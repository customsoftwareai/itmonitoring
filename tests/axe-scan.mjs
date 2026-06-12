// Runtime accessibility scan using axe-core against the in-scope pages.
// Requires: puppeteer and @axe-core/puppeteer (installed by the CI workflow).
// Usage:
//   node tests/axe-scan.mjs                  # scans http://localhost:3000
//   BASE_URL=https://itmonitoring.com node tests/axe-scan.mjs
//
// Exit code: 0 if no A/AA violations are found, 1 otherwise.

import puppeteer from "puppeteer";
import { AxePuppeteer } from "@axe-core/puppeteer";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const PAGES = ["/", "/careers", "/assessment", "/accessibility"];
const TAGS = ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"];

const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

let totalViolations = 0;

for (const path of PAGES) {
  const page = await browser.newPage();
  try {
    await page.goto(BASE + path, { waitUntil: "networkidle0", timeout: 60000 });
    const results = await new AxePuppeteer(page).withTags(TAGS).analyze();
    const v = results.violations;
    console.log(`\n=== ${path} — ${v.length} rule violation(s) ===`);
    for (const issue of v) {
      totalViolations += issue.nodes.length;
      console.log(`  [${issue.impact || "n/a"}] ${issue.id}: ${issue.help} (${issue.nodes.length} node(s))`);
      for (const node of issue.nodes.slice(0, 5)) {
        console.log(`      ↳ ${node.target.join(" ")}`);
      }
    }
  } catch (err) {
    console.error(`  ! Failed to scan ${path}: ${err.message}`);
  } finally {
    await page.close();
  }
}

await browser.close();

console.log(`\nTotal violation nodes across all pages: ${totalViolations}`);
process.exit(totalViolations > 0 ? 1 : 0);
