import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Accessibility Statement | ITMonitoring.com",
  description:
    "Our commitment to digital accessibility. Learn about our accessibility features and how to contact us with feedback.",
}

export default function AccessibilityPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header role="banner" className="px-6 py-4">
        <nav id="main-nav" aria-label="Main navigation">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            <span>Back to Home</span>
          </Link>
        </nav>
      </header>

      <main
        id="main-content"
        className="flex-1 px-6 py-8"
        role="main"
      >
        <article className="mx-auto max-w-3xl">
          <header className="mb-8 text-center">
            <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Accessibility Statement
            </h1>
            <p className="text-lg text-muted-foreground">
              Our commitment to digital accessibility for all users
            </p>
          </header>

          <div className="space-y-8 text-foreground">
            <section aria-labelledby="commitment-heading">
              <h2
                id="commitment-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Our Commitment
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                ITMonitoring.com is committed to ensuring digital accessibility
                for people with disabilities. We are continually improving the
                user experience for everyone and applying the relevant
                accessibility standards.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We strive to conform to the Web Content Accessibility Guidelines
                (WCAG) 2.2 Level AA standards. These guidelines explain how to
                make web content more accessible for people with disabilities
                and more user-friendly for everyone.
              </p>
            </section>

            <section aria-labelledby="features-heading">
              <h2
                id="features-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Accessibility Features
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We have implemented the following accessibility features on our
                website:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Accessibility Menu:</strong>{" "}
                  A floating accessibility button (bottom-right on desktop,
                  bottom-center on mobile) provides quick access to assistive
                  controls.
                </li>
                <li>
                  <strong className="text-foreground">Text Size Adjustment:</strong>{" "}
                  Increase or decrease text size from 100% to 200% in multiple
                  steps.
                </li>
                <li>
                  <strong className="text-foreground">Line Spacing:</strong>{" "}
                  Adjust line spacing for improved readability.
                </li>
                <li>
                  <strong className="text-foreground">Color Themes:</strong>{" "}
                  Choose between dark mode (default), light mode, or high
                  contrast mode.
                </li>
                <li>
                  <strong className="text-foreground">Link Visibility:</strong>{" "}
                  Options to underline or highlight all links for easier
                  identification.
                </li>
                <li>
                  <strong className="text-foreground">Dyslexia-Friendly Font:</strong>{" "}
                  Toggle to Atkinson Hyperlegible font with improved letter
                  spacing for easier reading.
                </li>
                <li>
                  <strong className="text-foreground">Reading Guide:</strong>{" "}
                  A moveable horizontal guide to help focus on specific lines of
                  text.
                </li>
                <li>
                  <strong className="text-foreground">Large Cursor:</strong>{" "}
                  Increase cursor size for better visibility.
                </li>
                <li>
                  <strong className="text-foreground">Focus Indicators:</strong>{" "}
                  Always-visible focus rings for keyboard navigation.
                </li>
                <li>
                  <strong className="text-foreground">Reduce Motion:</strong>{" "}
                  Disable animations and transitions for users sensitive to
                  motion.
                </li>
                <li>
                  <strong className="text-foreground">Skip Links:</strong>{" "}
                  Keyboard-accessible links to skip to main content, navigation,
                  or footer.
                </li>
                <li>
                  <strong className="text-foreground">Semantic Structure:</strong>{" "}
                  Proper use of headings, landmarks, and ARIA attributes for
                  screen reader compatibility.
                </li>
              </ul>
            </section>

            <section aria-labelledby="using-menu-heading">
              <h2
                id="using-menu-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Using the Accessibility Menu
              </h2>
              <ol className="list-inside list-decimal space-y-2 text-muted-foreground">
                <li>
                  Click the accessibility button (circular icon at the
                  bottom-right corner of the screen, or bottom-center on mobile
                  devices).
                </li>
                <li>
                  The accessibility panel will open with various controls
                  organized into sections: Visual & Reading Aids, Cursor &
                  Focus, and Motion & Media.
                </li>
                <li>
                  Adjust settings as needed. Your preferences are automatically
                  saved in your browser and will persist across pages and
                  sessions.
                </li>
                <li>
                  Press Escape or click outside the panel to close it. Your
                  settings remain active.
                </li>
                <li>
                  Use the "Reset All Settings" button to return to default
                  settings at any time.
                </li>
              </ol>
            </section>

            <section aria-labelledby="keyboard-heading">
              <h2
                id="keyboard-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Keyboard Navigation
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                Our website is fully navigable using only a keyboard:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  <strong className="text-foreground">Tab:</strong> Move forward
                  through interactive elements
                </li>
                <li>
                  <strong className="text-foreground">Shift + Tab:</strong> Move
                  backward through interactive elements
                </li>
                <li>
                  <strong className="text-foreground">Enter/Space:</strong>{" "}
                  Activate buttons and links
                </li>
                <li>
                  <strong className="text-foreground">Escape:</strong> Close
                  dialogs and menus
                </li>
                <li>
                  <strong className="text-foreground">Arrow Keys:</strong> Move
                  the reading guide (when enabled)
                </li>
              </ul>
            </section>

            <section aria-labelledby="limitations-heading">
              <h2
                id="limitations-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Known Limitations
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                While we strive for full accessibility, some limitations exist:
              </p>
              <ul className="list-inside list-disc space-y-2 text-muted-foreground">
                <li>
                  Third-party embedded content (such as forms) may not fully
                  support all accessibility features.
                </li>
                <li>
                  The accessibility menu provides assistive tools but does not
                  guarantee full WCAG compliance by itself.
                </li>
              </ul>
            </section>

            <section aria-labelledby="feedback-heading">
              <h2
                id="feedback-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Feedback
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                We welcome your feedback on the accessibility of
                ITMonitoring.com. If you encounter any accessibility barriers or
                have suggestions for improvement, please contact us.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                We aim to respond to accessibility feedback within 5 business
                days and to resolve issues as quickly as possible.
              </p>
            </section>

            <section aria-labelledby="standards-heading">
              <h2
                id="standards-heading"
                className="mb-4 text-xl font-semibold text-foreground"
              >
                Standards & Guidelines
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                This website aims to conform to{" "}
                <a
                  href="https://www.w3.org/TR/WCAG22/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-2 hover:text-primary/80 focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  WCAG 2.2 Level AA
                </a>
                . We regularly test our website using automated tools and manual
                testing to ensure ongoing compliance.
              </p>
            </section>

            <aside className="rounded-lg border border-border bg-secondary/30 p-6">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Last Updated:</strong>{" "}
                February 2026
              </p>
            </aside>
          </div>
        </article>
      </main>

      <footer
        id="footer"
        role="contentinfo"
        className="px-6 py-6 text-center text-sm text-muted-foreground"
      >
        <nav aria-label="Footer navigation" className="mb-2">
          <Link
            href="/"
            className="underline underline-offset-2 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Home
          </Link>
          <span className="mx-2">|</span>
          <Link
            href="/assessment"
            className="underline underline-offset-2 transition-colors hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
          >
            Assessment
          </Link>
        </nav>
        <p>© ITMonitoring.com — Advisory Services Only</p>
      </footer>
    </div>
  )
}
