import Link from "next/link"

export default function HomePage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 py-12 text-center">
      <div className="max-w-[900px]">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
          Independent IT Monitoring Consulting
        </h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Identify blind spots, reduce downtime risk, and improve monitoring
          strategy — without vendor bias.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/assessment"
            className="rounded-[10px] bg-primary px-6 py-3.5 font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Take the IT Monitoring Assessment
          </Link>
          <Link
            href="/whitepaper"
            className="rounded-[10px] border border-border px-6 py-3.5 font-semibold text-foreground transition-all hover:-translate-y-0.5 hover:opacity-95"
          >
            Read the White Paper
          </Link>
        </div>
        <footer className="mt-10 text-sm text-muted-foreground">
          © ITMonitoring.com — Advisory Services Only
        </footer>
      </div>
    </main>
  )
}
