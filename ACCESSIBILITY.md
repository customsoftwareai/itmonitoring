# Accessibility Statement — ITMonitoring.com

ITMonitoring.com is committed to being usable by everyone, including people who rely on assistive technology. We target conformance with the **Web Content Accessibility Guidelines (WCAG) 2.2, Level AA**.

## What we provide

- **Accessibility options menu** — a persistent, keyboard-reachable control (labeled "Open accessibility options") that lets visitors adjust their experience. Preferences are saved in the browser (`a11y_prefs_v1`) and reapplied on return visits.
- **Skip links** — "Skip to main content / navigation / footer" appear on keyboard focus so keyboard and screen-reader users can bypass repeated content.
- **Semantic structure** — every page has a single `H1`, a logical heading outline, a declared page language (`lang="en"`), and proper landmark regions (`banner`, `navigation`, `main`, `contentinfo`).
- **Accessible names** — all links, buttons, and embedded forms (iframes) carry descriptive, programmatically-determinable names.
- **Keyboard support** — interactive components are operable by keyboard, with visible focus indicators (and an "always-visible focus" option in the accessibility menu).
- **Responsive & zoom-friendly** — content reflows and page zoom is never disabled.

## Standards & scope

- **Target standard:** WCAG 2.2 AA
- **Pages in scope:** the full public site, including Home (`/`), Careers (`/careers`), the Assessment (`/assessment`), and this Accessibility page (`/accessibility`).
- **Third-party content:** the assessment and specialist-application forms are hosted on Zoho Forms and embedded via titled iframes. We select accessible embed options where available, but some behavior of third-party form widgets is outside our direct control.

## How we test

Accessibility is checked automatically on every push and pull request (see `.github/workflows/accessibility.yml`):

1. **Static analysis** — `eslint-plugin-jsx-a11y` lints all JSX in `app/` and `components/` for common accessibility defects (missing alt text, unlabeled controls, untitled iframes, invalid ARIA, empty headings, etc.). This check gates merges.
2. **Runtime scan** — an `axe-core` scan runs against the built site for the in-scope pages and reports any WCAG 2.0/2.1/2.2 A and AA violations (run via `tests/axe-scan.mjs`).

To run the checks locally:

```bash
# static jsx-a11y lint
npx eslint --config eslint.a11y.config.mjs "app/**/*.{ts,tsx}" "components/**/*.{ts,tsx}"

# runtime axe scan (build & start the site first, then:)
node tests/axe-scan.mjs            # scans http://localhost:3000 by default
BASE_URL=https://itmonitoring.com node tests/axe-scan.mjs   # scan production
```

## Known limitations

We continuously work to close gaps surfaced by the automated scans. Color-contrast and heading-order findings reported by the axe scan are triaged and addressed in subsequent releases.

## Feedback

If you encounter an accessibility barrier on ITMonitoring.com, please tell us so we can fix it. Email **admin@itmonitoring.com** with the page URL and a short description of the problem, and we will respond promptly.

_Last reviewed: June 2026._
