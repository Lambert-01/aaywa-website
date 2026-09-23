import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3000";

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  const results = [];

  // Mobile: menu open -> Escape closes
  const mob = await browser.newPage({ viewport: { width: 375, height: 700 } });
  await mob.goto(BASE + "/", { waitUntil: "networkidle" });
  const menuBtn = mob.locator('button[aria-label="Open menu"], button[aria-label*="menu" i]').first();
  if (await menuBtn.count()) {
    await menuBtn.click();
    await mob.waitForTimeout(700);
    const visible = await mob.locator('[role="dialog"]').isVisible().catch(() => false);
    results.push(`mobile menu opened: ${visible}`);
    await mob.keyboard.press("Escape");
    await mob.waitForTimeout(700);
    const closed = !(await mob.locator('[role="dialog"]').isVisible().catch(() => true));
    results.push(`mobile menu closed via Escape: ${closed}`);
    // body scroll lock released?
    const locked = await mob.evaluate(() => document.body.style.overflow);
    results.push(`body overflow after close: '${locked || "auto"}'`);
  } else {
    results.push("menu button NOT FOUND at 375px");
  }
  await mob.close();

  // Desktop: dropdown navigable
  const desk = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await desk.goto(BASE + "/", { waitUntil: "networkidle" });
  const dd = desk.getByRole("button", { name: /our work/i }).first();
  if (await dd.count()) {
    await dd.hover();
    await desk.waitForTimeout(400);
    const shown = await desk.getByRole("menuitem", { name: /about|impact/i }).first().isVisible().catch(() => false);
    results.push(`desktop 'Our Work' dropdown visible: ${shown}`);
    const link = desk.getByRole("link", { name: /the pathway/i }).first();
    if (await link.count()) {
      await link.click();
      await desk.waitForTimeout(800);
    }
  } else {
    const ourWork = desk.getByRole("link", { name: /our work/i }).first();
    results.push(`desktop: 'Our Work' as plain link (no dropdown) count=${await ourWork.count()}`);
  }
  results.push(`url after nav: ${desk.url()}`);
  await desk.close();

  // Focus-visible outline applies to interactive elements
  const foc = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await foc.goto(BASE + "/", { waitUntil: "networkidle" });
  await foc.getByRole("link", { name: "About" }).first().focus();
  const outline = await foc.evaluate(() => {
    const el = document.activeElement;
    const cs = getComputedStyle(el);
    return `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor}`;
  });
  results.push(`focus-visible outline: ${outline}`);
  await foc.close();

  console.log(results.join("\n"));
  await browser.close();
})();