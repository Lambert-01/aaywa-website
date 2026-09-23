import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const BASE = "http://localhost:3100";

(async () => {
  const browser = await chromium.launch({ executablePath: CHROME, headless: true, args: ["--headless=new", "--no-sandbox", "--disable-gpu"] });

  const results = [];

  // ---- Contact form flow ----
  const contact = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await contact.goto(BASE + "/contact", { waitUntil: "networkidle" });
  await contact.fill("#contact-name", "Test User");
  await contact.fill("#contact-email", "test@example.com");
  await contact.fill("#contact-message", "Hello AAYWA, I would like to speak about partnership opportunities.");
  await contact.getByRole("button", { name: "Send message" }).click();
  await contact.waitForTimeout(900);
  const noted = await contact.evaluate(() => document.body.innerText.includes("not enabled yet"));
  results.push(`contact form shows honest notice: ${noted}`);
  const extra = await contact.evaluate(() => document.body.innerText.includes("Message received") || document.body.innerText.includes("has been sent to the AAYWA"));
  results.push(`contact does NOT fake success: ${!extra}`);
  await contact.close();

  // ---- Newsletter flow (footer, on dark bg) ----
  const foot = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  await foot.goto(BASE + "/", { waitUntil: "networkidle" });
  await foot.fill("#newsletter-email", "test@example.com");
  await foot.getByRole("button", { name: "Subscribe" }).click();
  await foot.waitForTimeout(900);
  const nlNote = await foot.evaluate(() => document.body.innerText.includes("not enabled yet"));
  results.push(`newsletter shows honest notice: ${nlNote}`);
  const noFakeSub = await foot.evaluate(() => !document.body.innerText.includes("you're subscribed"));
  results.push(`newsletter does NOT fake success: ${noFakeSub}`);
  await foot.close();

  // ---- Footer: no '#' socials, contact fallback text, no mailto: / tel: fakes ----
  const sink = await foot;
  const checker = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await checker.goto(BASE + "/", { waitUntil: "networkidle" });
  const footerInfo = await checker.evaluate(() => {
    const a = Array.from(document.querySelectorAll("footer a")).map((x) => x.getAttribute("href"));
    return {
      hashLinks: a.filter((h) => h === "#").length,
      mailtoLinks: a.filter((h) => h?.startsWith("mailto:")).length,
      fallbackText: document.body.innerText.includes("Official contact details will be published here."),
      socialLinks: a.filter((h) => h && (h.startsWith("http") || h.startsWith("mailto"))).length,
    };
  });
  results.push(`footer '#' links: ${footerInfo.hashLinks} (expect 0)`);
  results.push(`footer fake mailto links: ${footerInfo.mailtoLinks} (expect 0)`);
  results.push(`footer shows honest contact fallback: ${footerInfo.fallbackText}`);
  results.push(`footer real social/mail links rendered: ${footerInfo.socialLinks} (expect 0 while unconfigured)`);
  await checker.close();

  console.log(results.join("\n"));
  await browser.close();
})();