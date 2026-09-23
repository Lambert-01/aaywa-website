import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  const page = await browser.newPage({ viewport: { width: 375, height: 700 } });
  await page.goto("http://localhost:3000/", { waitUntil: "networkidle" });

  const btns = page.locator('button[aria-label="Open menu"]');
  console.log("open-button count:", await btns.count());
  await btns.first().click();
  await page.waitForTimeout(800);

  const dialogs = page.locator('[role="dialog"]');
  console.log("dialog count:", await dialogs.count());
  if (await dialogs.count()) {
    const box = await dialogs.first().boundingBox();
    const attrs = await dialogs.first().evaluate((el) => ({
      cls: el.getAttribute("class")?.slice(0, 80),
      display: getComputedStyle(el).display,
      opacity: getComputedStyle(el).opacity,
    }));
    console.log("dialog box:", JSON.stringify(box), JSON.stringify(attrs));
  } else {
    console.log("No dialog — dumping body first 300 chars of aria-hidden?", await page.locator("body").getAttribute("aria-hidden"));
    console.log((await page.evaluate(() => document.querySelector("header")?.outerHTML.slice(0, 300))));
  }
  await browser.close();
})();