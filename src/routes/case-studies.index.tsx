import { createFileRoute, Link } from "@tanstack/react-router";
import { CaseStudyLayout, Eyebrow, ContactCta } from "@/components/CaseStudyPage";

export const Route = createFileRoute("/case-studies/")({
  head: () => ({
    meta: [
      { title: "Case Studies — SharperOps LLC" },
      {
        name: "description",
        content:
          "How SharperOps returned ~300 hours a year to a kitchen staffing firm and eliminated ~160 hours a year of quarterly billing at a $1.7B family office.",
      },
      { property: "og:title", content: "Case Studies — SharperOps LLC" },
      {
        property: "og:description",
        content: "Work we've shipped, and the hours it gave back.",
      },
    ],
  }),
  component: CaseStudiesIndex,
});

const studies = [
  {
    to: "/case-studies/rent-a-chef",
    tag: "Staffing & Placement",
    value: "~300 hrs",
    valueLabel: "Returned per year",
    title: "How Rent-A-Chef got a full workday back every week",
    summary:
      "Candidate chasing, background-check tracking, and resume screening replaced with one automated qualification pipeline.",
  },
  {
    to: "/case-studies/family-office-billing",
    tag: "Wealth Management",
    value: "~160 hrs",
    valueLabel: "Eliminated per year",
    title: "How a $1.7B RIA took 40 hours a quarter out of client billing",
    summary:
      "The full billing cycle automated through the Addepar API — with a human approval gate kept on every client email.",
  },
  {
    to: "/case-studies/law-firm-contract-review",
    tag: "Legal",
    value: "~270 hrs",
    valueLabel: "Returned per year",
    title: "How a law firm got an hour back on every contract",
    summary:
      "Every contract scored against the firm's own playbook, with risky clauses flagged and redlined before counsel reads it.",
  },
  {
    to: "/case-studies/agency-lead-routing",
    tag: "Marketing",
    value: "~1,500 hrs",
    valueLabel: "Returned per year",
    title: "How a marketing agency got six hours a day back from manual lead entry",
    summary:
      "75 cold email replies a day routed into 15 client CRMs with full conversation history, so clients answer their own leads.",
  },
] as const;

function CaseStudiesIndex() {
  return (
    <CaseStudyLayout>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-24">
        <Eyebrow>Case Studies</Eyebrow>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          Work we&rsquo;ve shipped.
        </h1>
        <div className="grid md:grid-cols-2 gap-5 mt-11">
          {studies.map((study) => (
            <Link
              key={study.to}
              to={study.to}
              className="group rounded-lg border border-border bg-card p-7 flex flex-col gap-3.5 hover:border-primary/40 transition-colors"
            >
              <span className="self-start text-[11px] font-semibold uppercase tracking-[0.08em] text-accent-foreground bg-accent rounded-full px-3 py-1.5">
                {study.tag}
              </span>
              <div>
                <div className="text-3xl font-semibold tracking-tight text-primary tabular-nums leading-none">
                  {study.value}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {study.valueLabel}
                </div>
              </div>
              <h2 className="text-[17px] font-semibold tracking-tight leading-snug">
                {study.title}
              </h2>
              <p className="flex-1 text-[15px] text-muted-foreground leading-relaxed">
                {study.summary}
              </p>
              <span className="text-sm font-medium text-primary inline-flex items-center gap-2">
                Read the case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <ContactCta />
    </CaseStudyLayout>
  );
}
