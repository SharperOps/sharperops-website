import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — SharperOps LLC" },
      {
        name: "description",
        content:
          "SharperOps LLC is an independent AI consulting agency building custom AI-powered software for businesses.",
      },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight text-lg">
            SharperOps<span className="text-primary">.</span>
          </Link>
          <Link
            to="/"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-6 py-24">
          <p className="text-sm font-medium text-primary mb-3 uppercase tracking-wide">About</p>
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight max-w-2xl leading-[1.05]">
            A focused, independent practice.
          </h1>
          <div className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed space-y-4">
            <p>
              SharperOps LLC is a US-based independent consultancy. We partner directly with clients
              to deliver tailored AI solutions, with engagements ranging from short advisory sprints
              to full software builds.
            </p>
            <p>
              You work directly with the operator — no account managers, no handoffs. Just clear
              thinking, careful engineering, and honest delivery.
            </p>
          </div>
          <div className="mt-10">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              Get in Touch <span aria-hidden>→</span>
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
