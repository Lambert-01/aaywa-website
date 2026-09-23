import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const routes = ["/", "/about", "/our-work", "/impact", "/stories", "/resources", "/get-involved", "/contact"];
  for (const route of routes) {
    const browser = await chromium.launch({
      executablePath: CHROME,
      headless: true,
      args: ["--headless=new", "--no-sandbox", "--disable-gpu"],
    });
    const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
    try {
      await page.goto("http://localhost:3000" + route, { waitUntil: "networkidle", timeout: 20000 });
      const sw = await page.evaluate(() => document.documentElement.scrollWidth);
      const cw = await page.evaluate(() => document.documentElement.clientWidth);
      console.log(sw > cw + 1 ? `OVERFLOW ${route} sw=${sw} cw=${cw}` : `OK  ${route} (sw=${sw})`);
    } catch (e) {
      console.log(`CRASH ${route}: ${String(e).slice(0, 120)}`);
    }
    await browser.close().catch(() => {});
  }
})();