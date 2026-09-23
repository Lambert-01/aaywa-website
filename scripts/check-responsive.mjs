import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";

const routes = [
  "/", "/about", "/our-work", "/impact", "/stories", "/resources",
  "/get-involved", "/contact",
];

const viewports = [
  { name: "320", width: 320, height: 640 },
  { name: "375", width: 375, height: 700 },
  { name: "430", width: 430, height: 800 },
  { name: "768", width: 768, height: 900 },
  { name: "1024", width: 1024, height: 800 },
  { name: "1440", width: 1440, height: 900 },
  { name: "2560", width: 2560, height: 1000 },
];

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

(async () => {
  let failures = 0;
  for (const vp of viewports) {
    const browser = await chromium.launch({
      executablePath: CHROME,
      headless: true,
      args: ["--headless=new", "--no-sandbox", "--disable-gpu"],
    });
    for (const route of routes) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const errors = [];
      page.on("console", (m) => {
        if (m.type() === "error") errors.push(m.text());
      });
      page.on("pageerror", (e) => errors.push(String(e)));
      try {
        await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 20000 });
        const overflow = await page.evaluate(() => {
          const doc = document.documentElement;
          return { sw: doc.scrollWidth, cw: doc.clientWidth };
        });
        if (overflow.sw > overflow.cw + 1) {
          failures++;
          console.log(`OVERFLOW  ${vp.name}px  ${route}  scrollWidth=${overflow.sw} clientWidth=${overflow.cw}`);
        }
        if (errors.length) {
          failures++;
          console.log(`CONSOLE   ${vp.name}px  ${route}  ${errors.slice(0, 3).join(" || ")}`);
        }
      } catch (e) {
        failures++;
        console.log(`FAIL      ${vp.name}px  ${route}  ${String(e).slice(0, 160)}`);
      }
      await page.close().catch(() => {});
    }
    await browser.close().catch(() => {});
    await sleep(300);
  }
  console.log(failures === 0 ? "ALL CLEAN — no overflow or console errors" : `${failures} issue(s) detected`);
  process.exit(failures === 0 ? 0 : 1);
})();