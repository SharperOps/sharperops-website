import { createFileRoute, Link } from "@tanstack/react-router";
import React, { useState } from "react";
import { SiteFooter } from "@/components/SiteFooter";
import { sendContactEmail } from "@/serverFunctions/contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SharperOps LLC — Custom AI solutions, built for your business" },
      {
        name: "description",
        content:
          "SharperOps LLC is an independent AI consulting agency that designs and builds custom AI-powered software solutions across industries.",
      },
      { property: "og:title", content: "SharperOps LLC — Custom AI Consulting" },
      { property: "og:description", content: "Custom AI solutions, built for your business." },
    ],
  }),
  component: Index,
});

const services = [
  {
    title: "AI Consulting",
    body: "Strategic advisory on where and how to deploy AI within your business — from opportunity mapping to roadmap.",
  },
  {
    title: "Custom AI Software Development",
    body: "Bespoke applications built around large language models, automation, and intelligent agents.",
  },
  {
    title: "Workflow Automation",
    body: "Integrating AI into existing business processes to reduce manual work and accelerate operations.",
  },
  {
    title: "Implementation & Integration",
    body: "Connecting AI tools to your existing software stack — CRMs, internal apps, data pipelines, and APIs.",
  },
];

function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/about" className="font-semibold tracking-tight text-lg">
          SharperOps<span className="text-primary">.</span>
        </Link>
        <nav className="hidden sm:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#services" className="hover:text-foreground transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-foreground transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-foreground transition-colors">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    try {
      await sendContactEmail({
        data: {
          name: fd.get("name") as string,
          email: fd.get("email") as string,
          message: fd.get("message") as string,
        },
      });
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSubmitting(false);
    }
  }
  if (sent) {
    return (
      <div className="rounded-lg border border-border bg-card p-8 text-center">
        <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary mb-3 text-xl">
          ✓
        </div>
        <h3 className="font-semibold text-lg">Message received</h3>
        <p className="text-sm text-muted-foreground mt-1">
          Thanks for reaching out. I respond within 12 hours.
        </p>
      </div>
    );
  }
  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-border bg-card p-6 space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1.5">
            Name
          </label>
          <input
            id="name"
            name="name"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1.5">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-y"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
      >
        {submitting ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}

function Index() {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Nav />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-5xl mx-auto px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
          <p className="text-sm font-medium text-primary mb-5 tracking-wide uppercase">
            SharperOps LLC
          </p>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight max-w-3xl leading-[1.05]">
            Custom AI solutions,
            <br />
            built for your business.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
            SharperOps LLC is an independent AI consulting agency that designs and builds custom
            AI-powered software solutions for businesses. We work across industries to help
            organizations integrate large language models, automation, and intelligent workflows
            into their operations.
          </p>
          <div className="mt-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch <span aria-hidden>→</span>
            </a>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-t border-border bg-secondary/40">
          <div className="max-w-5xl mx-auto px-6 py-24">
            <div className="max-w-2xl mb-14">
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Services
              </p>
              <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">What we build</h2>
              <p className="mt-4 text-muted-foreground">
                Engagements range from short advisory sprints to full custom software builds.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className="group rounded-lg border border-border bg-card p-7 hover:border-primary/40 transition-colors"
                >
                  <div className="text-xs font-mono text-muted-foreground mb-4">0{i + 1}</div>
                  <h3 className="font-semibold text-lg tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="border-t border-border">
          <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">About</p>
              <h2 className="text-3xl font-semibold tracking-tight">
                A focused, independent practice.
              </h2>
            </div>
            <div className="md:col-span-2 text-lg text-muted-foreground leading-relaxed">
              <p>
                SharperOps LLC is a US-based independent consultancy. We partner directly with
                clients to deliver tailored AI solutions, with engagements ranging from short
                advisory sprints to full software builds.
              </p>
              <p className="mt-4">
                You work directly with the operator — no account managers, no handoffs. Just clear
                thinking, careful engineering, and honest delivery.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-secondary/40">
          <div className="max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-12">
            <div>
              <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight">Let's talk.</h2>
              <p className="mt-4 text-muted-foreground">
                Email or use the form. I respond within 12 hours.
              </p>
              <div className="mt-6 text-sm">
                <div className="text-muted-foreground">Customer service</div>
                <a
                  href="mailto:christian@sharperops.com"
                  className="text-foreground font-medium hover:text-primary transition-colors"
                >
                  christian@sharperops.com
                </a>
              </div>
            </div>
            <div className="md:col-span-2">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
