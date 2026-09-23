import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const cases = [
    ["/resources", 768],
    ["/get-involved", 1024],
    ["/get-involved", 1440],
  ];
  for (const [route, w] of cases) {
    const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
    const page = await browser.newPage({ viewport: { width: w, height: 900 } });
    await page.goto("http://localhost:3000" + route, { waitUntil: "networkidle" });
    const offenders = await page.evaluate(() => {
      const vw = document.documentElement.clientWidth;
      const out = [];
      document.querySelectorAll("*").forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.right > vw + 1 || r.left < -1) {
          out.push({
            tag: el.tagName,
            cls: String(el.className).slice(0, 90),
            id: el.id,
            left: Math.round(r.left),
            right: Math.round(r.right),
            w: Math.round(r.width),
          });
        }
      });
      return out.slice(0, 12);
    });
    console.log(`\n=== ${route} @ ${w}px ===`);
    offenders.forEach((o) => console.log(`${o.tag} #${o.id} right=${o.right} left=${o.left} w=${o.w} ${o.cls}`));
    await browser.close();
  }
})();