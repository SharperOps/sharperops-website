import { Link } from "@tanstack/react-router";
import { SiteFooter } from "./SiteFooter";
import type { ReactNode } from "react";

function CaseStudyHeader() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="font-semibold tracking-tight text-lg">
          SharperOps<span className="text-primary">.</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <Link to="/" hash="services" className="hover:text-foreground transition-colors">
            Services
          </Link>
          <Link to="/case-studies" className="text-foreground font-medium">
            Case Studies
          </Link>
          <Link to="/" hash="about" className="hover:text-foreground transition-colors">
            About
          </Link>
          <Link to="/" hash="contact" className="hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function CaseStudyLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <CaseStudyHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">{children}</p>
  );
}

export function Breadcrumb({ current }: { current: string }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
      <Link to="/case-studies" className="hover:text-primary transition-colors">
        Case Studies
      </Link>
      <span className="opacity-50">/</span>
      <span>{current}</span>
    </nav>
  );
}

export function Stats({ items }: { items: { value: string; label: string }[] }) {
  return (
    <div className="grid sm:grid-cols-3 gap-4 mt-11">
      {items.map((item) => (
        <div key={item.label} className="rounded-lg border border-border bg-card p-6">
          <div className="text-4xl font-semibold tracking-tight text-primary tabular-nums leading-none">
            {item.value}
          </div>
          <p className="mt-2.5 text-sm text-muted-foreground leading-snug">{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export function PullQuote({ quote, name, title }: { quote: string; name: string; title: string }) {
  return (
    <figure className="mt-5 rounded-lg border border-border border-l-[3px] border-l-primary bg-card p-7">
      <blockquote className="text-lg leading-relaxed tracking-tight">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm text-muted-foreground">
        <span className="text-foreground font-semibold">{name}</span> — {title}
      </figcaption>
    </figure>
  );
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="mt-7 flex gap-3.5 items-start rounded-lg border border-primary/30 bg-accent/60 p-5">
      <span
        aria-hidden="true"
        className="flex-none mt-0.5 w-[22px] h-[22px] rounded-full bg-primary text-primary-foreground grid place-items-center text-[13px] font-bold"
      >
        ✓
      </span>
      <p className="text-[15px] leading-relaxed text-accent-foreground">{children}</p>
    </div>
  );
}

export function Section({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="mt-14 first:mt-0">
      <h2 className="text-[22px] font-semibold tracking-tight mb-5 text-balance">{heading}</h2>
      {children}
    </section>
  );
}

export function Prose({ children }: { children: ReactNode }) {
  return (
    <div className="space-y-4 [&_p]:text-base [&_p]:leading-relaxed [&_p]:text-muted-foreground [&_p]:max-w-[66ch]">
      {children}
    </div>
  );
}

export function BeforeAfter({ rows }: { rows: { before: string; after: string }[] }) {
  return (
    <div className="rounded-lg border border-border bg-card overflow-hidden">
      <div className="hidden sm:grid grid-cols-2 bg-secondary border-b border-border">
        <div className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-muted-foreground">
          Before
        </div>
        <div className="px-5 py-3 text-[11px] font-bold uppercase tracking-[0.1em] text-accent-foreground border-l border-border">
          After
        </div>
      </div>
      {rows.map((row) => (
        <div
          key={row.before}
          className="grid sm:grid-cols-2 border-t border-border first:border-t-0"
        >
          <div className="px-5 py-4 text-[15px] leading-snug text-muted-foreground">
            <span className="sm:hidden block text-[10px] font-bold uppercase tracking-[0.1em] mb-1.5">
              Before
            </span>
            {row.before}
          </div>
          <div className="px-5 py-4 text-[15px] leading-snug border-t sm:border-t-0 sm:border-l border-border bg-accent/30">
            <span className="sm:hidden block text-[10px] font-bold uppercase tracking-[0.1em] text-accent-foreground mb-1.5">
              After
            </span>
            {row.after}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Testimonial({
  children,
  name,
  title,
}: {
  children: ReactNode;
  name: string;
  title: string;
}) {
  return (
    <figure className="rounded-lg border border-border bg-card p-7">
      <blockquote className="text-[15px] leading-relaxed text-muted-foreground max-w-[68ch]">
        {children}
      </blockquote>
      <figcaption className="mt-4 pt-4 border-t border-border text-sm text-muted-foreground">
        <span className="block text-foreground font-semibold text-[15px]">{name}</span>
        {title}
      </figcaption>
    </figure>
  );
}

export function ContactCta() {
  return (
    <section className="border-t border-border">
      <div className="max-w-5xl mx-auto px-6 py-16 flex flex-wrap items-center justify-between gap-8">
        <h2 className="text-[22px] font-semibold tracking-tight">Let&rsquo;s talk.</h2>
        <Link
          to="/"
          hash="contact"
          className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Get in Touch <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
