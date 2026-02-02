"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { createPortal } from "react-dom"

// Storage key for localStorage
const STORAGE_KEY = "a11y_prefs_v1"

// Types for accessibility preferences
interface A11yPreferences {
  textSize: number // 100, 110, 125, 150, 175, 200
  lineSpacing: number // 100, 120, 140
  theme: "default" | "light" | "high-contrast"
  underlineLinks: boolean
  highlightLinks: boolean
  dyslexiaFont: boolean
  readingGuide: boolean
  bigCursor: boolean
  focusVisible: boolean
  reduceMotion: boolean
  mediaPaused: boolean
}

const defaultPreferences: A11yPreferences = {
  textSize: 100,
  lineSpacing: 100,
  theme: "default",
  underlineLinks: false,
  highlightLinks: false,
  dyslexiaFont: false,
  readingGuide: false,
  bigCursor: false,
  focusVisible: false,
  reduceMotion: false,
  mediaPaused: false,
}

// Icons
const AccessibilityIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="4" r="1" />
    <path d="M12 12v8" />
    <path d="M12 8v.01" />
    <path d="m8 20 4-4 4 4" />
    <path d="M4 8h16" />
    <path d="m9 8 3 4 3-4" />
  </svg>
)

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
)

const MinusIcon = () => (
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
    <path d="M5 12h14" />
  </svg>
)

const PlusIcon = () => (
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
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
)

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
)

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
  </svg>
)

const ContrastIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2v20" />
    <path d="M12 2a10 10 0 0 1 0 20" fill="currentColor" />
  </svg>
)

// Toggle Switch Component
function Toggle({
  checked,
  onChange,
  id,
  label,
}: {
  checked: boolean
  onChange: (checked: boolean) => void
  id: string
  label: string
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      id={id}
      data-state={checked ? "checked" : "unchecked"}
      className="a11y-toggle"
      onClick={() => onChange(!checked)}
    >
      <span className="a11y-toggle-thumb" />
    </button>
  )
}

// Stepper Component for text size and line spacing
function Stepper({
  value,
  onChange,
  options,
  label,
  unit = "%",
}: {
  value: number
  onChange: (value: number) => void
  options: number[]
  label: string
  unit?: string
}) {
  const currentIndex = options.indexOf(value)
  const canDecrease = currentIndex > 0
  const canIncrease = currentIndex < options.length - 1

  return (
    <div className="a11y-stepper" role="group" aria-label={label}>
      <button
        type="button"
        className="a11y-stepper-btn"
        onClick={() => canDecrease && onChange(options[currentIndex - 1])}
        disabled={!canDecrease}
        aria-label={`Decrease ${label}`}
        aria-disabled={!canDecrease}
      >
        <MinusIcon />
      </button>
      <span className="a11y-stepper-value" aria-live="polite">
        {value}
        {unit}
      </span>
      <button
        type="button"
        className="a11y-stepper-btn"
        onClick={() => canIncrease && onChange(options[currentIndex + 1])}
        disabled={!canIncrease}
        aria-label={`Increase ${label}`}
        aria-disabled={!canIncrease}
      >
        <PlusIcon />
      </button>
    </div>
  )
}

// Reading Guide Component
function ReadingGuide({ enabled }: { enabled: boolean }) {
  const [position, setPosition] = useState(200)

  useEffect(() => {
    if (!enabled) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition(e.clientY - 20)
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowUp") {
        setPosition((p) => Math.max(0, p - 20))
      } else if (e.key === "ArrowDown") {
        setPosition((p) => Math.min(window.innerHeight - 40, p + 20))
      }
    }

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [enabled])

  if (!enabled) return null

  return createPortal(
    <div
      className="a11y-reading-guide"
      style={{ top: position }}
      role="presentation"
      aria-hidden="true"
    />,
    document.body
  )
}

export default function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [preferences, setPreferences] = useState<A11yPreferences>(defaultPreferences)
  const panelRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const firstFocusableRef = useRef<HTMLButtonElement>(null)

  // Load preferences from localStorage
  useEffect(() => {
    setMounted(true)
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        const parsed = JSON.parse(stored)
        setPreferences({ ...defaultPreferences, ...parsed })
      }
      
      // Check for prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setPreferences(prev => ({ ...prev, reduceMotion: true }))
      }
    } catch {
      // Use defaults if localStorage fails
    }
  }, [])

  // Save preferences to localStorage and apply classes
  useEffect(() => {
    if (!mounted) return

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences))
    } catch {
      // Silently fail if localStorage is unavailable
    }

    // Apply classes to html element
    const html = document.documentElement
    const classesToRemove = [
      "a11y-text-110",
      "a11y-text-125",
      "a11y-text-150",
      "a11y-text-175",
      "a11y-text-200",
      "a11y-line-120",
      "a11y-line-140",
      "a11y-theme-light",
      "a11y-theme-high-contrast",
      "a11y-underline-links",
      "a11y-highlight-links",
      "a11y-dyslexia-font",
      "a11y-big-cursor",
      "a11y-focus-visible",
      "a11y-reduce-motion",
      "a11y-media-paused",
      "a11y-reading-guide-active",
    ]

    classesToRemove.forEach((cls) => html.classList.remove(cls))

    // Text size
    if (preferences.textSize !== 100) {
      html.classList.add(`a11y-text-${preferences.textSize}`)
    }

    // Line spacing
    if (preferences.lineSpacing !== 100) {
      html.classList.add(`a11y-line-${preferences.lineSpacing}`)
    }

    // Theme
    if (preferences.theme === "light") {
      html.classList.add("a11y-theme-light")
    } else if (preferences.theme === "high-contrast") {
      html.classList.add("a11y-theme-high-contrast")
    }

    // Boolean toggles
    if (preferences.underlineLinks) html.classList.add("a11y-underline-links")
    if (preferences.highlightLinks) html.classList.add("a11y-highlight-links")
    if (preferences.dyslexiaFont) html.classList.add("a11y-dyslexia-font")
    if (preferences.bigCursor) html.classList.add("a11y-big-cursor")
    if (preferences.focusVisible) html.classList.add("a11y-focus-visible")
    if (preferences.reduceMotion) html.classList.add("a11y-reduce-motion")
    if (preferences.mediaPaused) html.classList.add("a11y-media-paused")
    if (preferences.readingGuide) html.classList.add("a11y-reading-guide-active")
  }, [preferences, mounted])

  // Focus trap and keyboard handling
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false)
        buttonRef.current?.focus()
      }

      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusableElements = panelRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        )
        const firstElement = focusableElements[0]
        const lastElement = focusableElements[focusableElements.length - 1]

        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault()
          lastElement.focus()
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault()
          firstElement.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    firstFocusableRef.current?.focus()

    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  const updatePreference = useCallback(
    <K extends keyof A11yPreferences>(key: K, value: A11yPreferences[K]) => {
      setPreferences((prev) => ({ ...prev, [key]: value }))
    },
    []
  )

  const resetPreferences = useCallback(() => {
    setPreferences(defaultPreferences)
  }, [])

  if (!mounted) return null

  return (
    <>
      {/* Floating Button */}
      <button
        ref={buttonRef}
        type="button"
        className="a11y-menu-btn"
        onClick={() => setIsOpen(true)}
        aria-label="Open accessibility options"
        aria-expanded={isOpen}
        aria-controls="a11y-menu-panel"
      >
        <AccessibilityIcon />
      </button>

      {/* Menu Panel */}
      {isOpen &&
        createPortal(
          <>
            {/* Overlay */}
            <div
              className="a11y-menu-overlay"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />

            {/* Panel */}
            <div
              ref={panelRef}
              id="a11y-menu-panel"
              role="dialog"
              aria-modal="true"
              aria-label="Accessibility options"
              className="a11y-menu-panel"
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-foreground">
                  Accessibility Options
                </h2>
                <button
                  ref={firstFocusableRef}
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  aria-label="Close accessibility options"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Visual & Reading Aids Section */}
              <section className="a11y-section" aria-labelledby="visual-heading">
                <h3 id="visual-heading" className="a11y-section-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                  Visual & Reading Aids
                </h3>

                {/* Text Size */}
                <div className="a11y-control-row">
                  <span className="a11y-control-label" id="text-size-label">
                    Text Size
                  </span>
                  <Stepper
                    value={preferences.textSize}
                    onChange={(v) => updatePreference("textSize", v)}
                    options={[100, 110, 125, 150, 175, 200]}
                    label="Text size"
                  />
                </div>

                {/* Line Spacing */}
                <div className="a11y-control-row">
                  <span className="a11y-control-label" id="line-spacing-label">
                    Line Spacing
                  </span>
                  <Stepper
                    value={preferences.lineSpacing}
                    onChange={(v) => updatePreference("lineSpacing", v)}
                    options={[100, 120, 140]}
                    label="Line spacing"
                  />
                </div>

                {/* Contrast Themes */}
                <div className="mb-4 mt-4">
                  <span className="a11y-control-label mb-3 block">
                    Color Theme
                  </span>
                  <div
                    className="flex gap-2"
                    role="radiogroup"
                    aria-label="Color theme"
                  >
                    <button
                      type="button"
                      role="radio"
                      aria-checked={preferences.theme === "default"}
                      data-active={preferences.theme === "default"}
                      className="a11y-theme-btn"
                      onClick={() => updatePreference("theme", "default")}
                    >
                      <MoonIcon />
                      <span className="text-xs">Dark</span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={preferences.theme === "light"}
                      data-active={preferences.theme === "light"}
                      className="a11y-theme-btn"
                      onClick={() => updatePreference("theme", "light")}
                    >
                      <SunIcon />
                      <span className="text-xs">Light</span>
                    </button>
                    <button
                      type="button"
                      role="radio"
                      aria-checked={preferences.theme === "high-contrast"}
                      data-active={preferences.theme === "high-contrast"}
                      className="a11y-theme-btn"
                      onClick={() => updatePreference("theme", "high-contrast")}
                    >
                      <ContrastIcon />
                      <span className="text-xs">High Contrast</span>
                    </button>
                  </div>
                </div>

                {/* Underline Links */}
                <div className="a11y-control-row">
                  <label
                    htmlFor="underline-links"
                    className="a11y-control-label"
                  >
                    Underline Links
                  </label>
                  <Toggle
                    id="underline-links"
                    checked={preferences.underlineLinks}
                    onChange={(v) => updatePreference("underlineLinks", v)}
                    label="Underline links"
                  />
                </div>

                {/* Highlight Links */}
                <div className="a11y-control-row">
                  <label
                    htmlFor="highlight-links"
                    className="a11y-control-label"
                  >
                    Highlight Links
                  </label>
                  <Toggle
                    id="highlight-links"
                    checked={preferences.highlightLinks}
                    onChange={(v) => updatePreference("highlightLinks", v)}
                    label="Highlight links"
                  />
                </div>

                {/* Dyslexia Font */}
                <div className="a11y-control-row">
                  <label htmlFor="dyslexia-font" className="a11y-control-label">
                    Dyslexia-Friendly Font
                  </label>
                  <Toggle
                    id="dyslexia-font"
                    checked={preferences.dyslexiaFont}
                    onChange={(v) => updatePreference("dyslexiaFont", v)}
                    label="Dyslexia-friendly font"
                  />
                </div>

                {/* Reading Guide */}
                <div className="a11y-control-row">
                  <label htmlFor="reading-guide" className="a11y-control-label">
                    Reading Guide
                  </label>
                  <Toggle
                    id="reading-guide"
                    checked={preferences.readingGuide}
                    onChange={(v) => updatePreference("readingGuide", v)}
                    label="Reading guide"
                  />
                </div>
              </section>

              {/* Cursor & Focus Section */}
              <section className="a11y-section" aria-labelledby="cursor-heading">
                <h3 id="cursor-heading" className="a11y-section-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m4 4 7.07 17 2.51-7.39L21 11.07z" />
                  </svg>
                  Cursor & Focus
                </h3>

                {/* Big Cursor */}
                <div className="a11y-control-row">
                  <label htmlFor="big-cursor" className="a11y-control-label">
                    Large Cursor
                  </label>
                  <Toggle
                    id="big-cursor"
                    checked={preferences.bigCursor}
                    onChange={(v) => updatePreference("bigCursor", v)}
                    label="Large cursor"
                  />
                </div>

                {/* Focus Visible */}
                <div className="a11y-control-row">
                  <label htmlFor="focus-visible" className="a11y-control-label">
                    Always Show Focus
                  </label>
                  <Toggle
                    id="focus-visible"
                    checked={preferences.focusVisible}
                    onChange={(v) => updatePreference("focusVisible", v)}
                    label="Always show focus indicator"
                  />
                </div>
              </section>

              {/* Motion & Media Section */}
              <section className="a11y-section" aria-labelledby="motion-heading">
                <h3 id="motion-heading" className="a11y-section-title">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <polygon points="10 8 16 12 10 16 10 8" />
                  </svg>
                  Motion & Media
                </h3>

                {/* Reduce Motion */}
                <div className="a11y-control-row">
                  <label htmlFor="reduce-motion" className="a11y-control-label">
                    Reduce Motion
                  </label>
                  <Toggle
                    id="reduce-motion"
                    checked={preferences.reduceMotion}
                    onChange={(v) => updatePreference("reduceMotion", v)}
                    label="Reduce motion"
                  />
                </div>

                {/* Pause Media */}
                <div className="a11y-control-row">
                  <label htmlFor="media-paused" className="a11y-control-label">
                    Pause Auto-Play Media
                  </label>
                  <Toggle
                    id="media-paused"
                    checked={preferences.mediaPaused}
                    onChange={(v) => updatePreference("mediaPaused", v)}
                    label="Pause auto-playing media"
                  />
                </div>
              </section>

              {/* Reset Button */}
              <button
                type="button"
                className="a11y-reset-btn"
                onClick={resetPreferences}
              >
                Reset All Settings
              </button>

              {/* Footer Note */}
              <p className="mt-4 text-center text-xs text-muted-foreground">
                Settings are saved automatically in your browser.
              </p>
            </div>
          </>,
          document.body
        )}

      {/* Reading Guide Overlay */}
      <ReadingGuide enabled={preferences.readingGuide} />
    </>
  )
}
