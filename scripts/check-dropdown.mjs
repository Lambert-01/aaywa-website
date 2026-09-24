import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = process.env.BASE_URL ?? "http://localhost:3100";

const EXPECTED = ["Home", "About Us", "Our Work", "Impact", "Contact"];
const ABSENT = ["Stories", "Resources", "Get Involved", "Partner With Us", "Join AAYWA"];

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });
  const results = [];

  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(BASE + "/", { waitUntil: "networkidle" });

  // 1. Primary nav contains ONLY the expected items, in order
  const mainNav = page.locator('header nav[aria-label="Main"]');
  const labels = (await mainNav.locator("a").allTextContents()).map((t) => t.trim());
  results.push(`header nav labels: [${labels.join(", ")}]`);
  results.push(`nav exactly 5 items: ${labels.length === 5}`);
  results.push(`nav matches expected: ${JSON.stringify(labels) === JSON.stringify(EXPECTED)}`);

  // 2. No forbidden items in the header
  const headerText = await page.locator("header").innerText();
  const forbidden = ABSENT.filter((t) => headerText.includes(t));
  results.push(`forbidden items in header: ${forbidden.length === 0 ? "none" : forbidden.join(", ")}`);

  // 3. Contact is present in the primary nav
  results.push(`Contact IS in primary nav: ${labels.includes("Contact")}`);

  // 4. No dropdown submenu under Our Work
  results.push(`no 'Our Work' submenu rendered: ${(await page.locator('[aria-label="Our Work submenu"]').count()) === 0}`);

  // 5. Header transparent at top, dark glass after scroll
  const atTop = await page.evaluate(() => getComputedStyle(document.querySelector("header")).backgroundColor);
  await page.evaluate(() => window.scrollTo(0, 360));
  await page.waitForTimeout(600);
  const scrolled = await page.evaluate(() => getComputedStyle(document.querySelector("header")).backgroundColor);
  const blur = await page.evaluate(() => getComputedStyle(document.querySelector("header")).backdropFilter);
  results.push(`header bg at top: ${atTop}`);
  results.push(`header bg after scroll: ${scrolled} (blur: ${blur})`);

  // 6. Hero uses landscape background image (aaywa-hills)
  const heroImg = await page.locator('img[src*="aaywa-hills"]').count();
  results.push(`hero uses aaywa-hills.jpg: ${heroImg === 1}`);
  await page.close();

  // 7. Mobile menu: 5 numbered links, no forbidden items
  const mob = await browser.newPage({ viewport: { width: 375, height: 800 } });
  await mob.goto(BASE + "/", { waitUntil: "networkidle" });
  await mob.getByRole("button", { name: "Open menu" }).click();
  await mob.waitForTimeout(700);
  const dialog = mob.locator('[role="dialog"]');
  const mobLabels = (await dialog.locator('nav[aria-label="Mobile"] a').allTextContents()).map((t) => t.trim());
  results.push(`mobile menu items: [${mobLabels.join(", ")}]`);
  results.push(`mobile exactly 5: ${mobLabels.length === 5 && mobLabels.every((l, i) => l === EXPECTED[i])}`);
  results.push(`mobile contains forbidden: ${(await dialog.innerText()).match(/Get Involved|Partner With Us|Join AAYWA/) ? "YES" : "no"}`);
  await mob.close();

  console.log(results.join("\n"));
  await browser.close();
})();