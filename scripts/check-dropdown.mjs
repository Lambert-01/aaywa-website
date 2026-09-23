import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3100";

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });

  const ourWorkLink = page.getByRole("link", { name: /^Our Work/ }).first();
  await ourWorkLink.focus();
  await page.keyboard.press("Tab");
  await page.waitForTimeout(300);
  const focusedHref = await page.evaluate(() => document.activeElement?.getAttribute("href"));
  const submenuVisible = await page.locator('[aria-label="Our Work submenu"]').isVisible().catch(() => false);
  console.log(`keyboard Tab from 'Our Work' -> focused: ${focusedHref}`);
  console.log(`submenu visible via :focus-within: ${submenuVisible}`);

  const child = page.locator('[aria-label="Our Work submenu"] [href="/our-work#pathway"]').first();
  const n = await child.count();
  console.log(`pathway child link count: ${n}`);
  await browser.close();
})();