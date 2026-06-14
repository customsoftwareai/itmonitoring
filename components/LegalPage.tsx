import { SiteNav, SiteFooter } from "@/components/SiteChrome"

type Block =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "section"; n: string; title: string }
  | { type: "subsection"; title: string }

export type LegalContent = {
  title: string
  effectiveDate: string
  intro: Block[]
  body: Block[]
}

function renderBlock(block: Block, idx: number) {
  switch (block.type) {
    case "section":
      return (
        <h2
          key={idx}
          id={`section-${block.n}`}
          className="mt-12 mb-4 scroll-mt-24 text-xl font-semibold tracking-tight text-foreground md:text-2xl"
        >
          <span className="text-primary">{block.n}.</span> {block.title}
        </h2>
      )
    case "subsection":
      return (
        <h3 key={idx} className="mt-6 mb-3 text-base font-semibold text-foreground md:text-lg">
          {block.title}
        </h3>
      )
    case "ul":
      return (
        <ul key={idx} className="mb-4 list-disc space-y-2 pl-6 text-muted-foreground marker:text-primary">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      )
    case "p":
    default:
      return (
        <p key={idx} className="mb-4 leading-relaxed text-muted-foreground">
          {block.text}
        </p>
      )
  }
}

export function LegalPage({ content }: { content: LegalContent }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteNav />

      <main id="main-content" role="main" className="flex-1">
        <section className="relative overflow-hidden border-b border-white/5">
          <div
            className="pointer-events-none absolute left-1/2 top-[-30%] h-[360px] w-[680px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]"
            aria-hidden="true"
          />
          <div className="relative mx-auto max-w-3xl px-6 py-16 md:py-20">
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
              {content.title}
            </h1>
            <p className="mt-4 text-sm font-medium uppercase tracking-wider text-primary">
              Effective Date: {content.effectiveDate}
            </p>
          </div>
        </section>

        <article className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <div className="border-b border-white/5 pb-8">{content.intro.map(renderBlock)}</div>
          <div>{content.body.map(renderBlock)}</div>
        </article>
      </main>

      <SiteFooter />
    </div>
  )
}
