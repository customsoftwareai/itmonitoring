"use client"

export default function SkipLinks() {
  return (
    <nav aria-label="Skip links" className="sr-only focus-within:not-sr-only">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <a href="#main-nav" className="skip-link" style={{ left: "10rem" }}>
        Skip to navigation
      </a>
      <a href="#footer" className="skip-link" style={{ left: "20rem" }}>
        Skip to footer
      </a>
    </nav>
  )
}
