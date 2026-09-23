import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3100";

const routes = ["/", "/about", "/our-work", "/impact", "/stories", "/resources", "/get-involved", "/contact"];

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  let failures = 0;
  for (const vp of [{ name: "375", width: 375, height: 800 }, { name: "768", width: 768, height: 900 }, { name: "1440", width: 1440, height: 900 }]) {
    for (const route of routes) {
      const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
      const errors = [];
      page.on("console", (m) => { if (m.type() === "error") errors.push(m.text()); });
      page.on("pageerror", (e) => errors.push(String(e)));
      try {
        await page.goto(BASE + route, { waitUntil: "networkidle", timeout: 25000 });
        await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
        await page.waitForTimeout(1500);
        const report = await page.evaluate(() => {
          const imgs = Array.from(document.images);
          const broken = imgs.filter((img) => img.complete && img.naturalWidth === 0).map((img) => img.getAttribute("src")?.split("?")[0]);
          const overflow = document.documentElement.scrollWidth > document.documentElement.clientWidth + 1;
          return { broken, overflow, total: imgs.length };
        });
        if (report.broken && report.broken.length) { failures = 1; console.log(`BROKEN IMG ${vp.name} ${route}: ${report.broken.join(", ")}`); }
        if (report.overflow) { failures = 1; console.log(`OVERFLOW ${vp.name} ${route}`); }
        if (errors.length) { failures = 1; console.log(`CONSOLE ${vp.name} ${route}: ${errors.slice(0, 3).join(" || ")}`); }
        console.log(`${route} @ ${vp.name}: ${report.total} images ok, no overflow${errors.length ? " (console errors!)" : ""}`);
      } catch (e) {
        failures = 1;
        console.log(`FAIL ${vp.name} ${route}: ${String(e).slice(0, 120)}`);
      }
      await page.close().catch(() => {});
    }
  }
  console.log(failures === 0 ? "ALL CLEAN" : "ISSUES FOUND");
  await browser.close();
})();