"use client"

export default function SkipLinks() {
  return (
    <nav aria-label="Skip links" className="sr-only focus-within:not-sr-only">
      <a href="#main-content" className="skip-link !bg-blue-900 !text-white">
        Skip to main content
      </a>
      <a href="#main-nav" className="skip-link !bg-blue-900 !text-white" style={{ left: "10rem" }}>
        Skip to navigation
      </a>
      <a href="#footer" className="skip-link !bg-blue-900 !text-white" style={{ left: "20rem" }}>
        Skip to footer
      </a>
    </nav>
  )
}
