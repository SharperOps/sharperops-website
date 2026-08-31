import { createFileRoute } from "@tanstack/react-router";
import {
  BeforeAfter,
  Breadcrumb,
  CaseStudyLayout,
  ContactCta,
  Eyebrow,
  Prose,
  Section,
  Stats,
} from "@/components/CaseStudyPage";

export const Route = createFileRoute("/case-studies/law-firm-contract-review")({
  head: () => ({
    meta: [
      { title: "A law firm: an hour back on every contract — SharperOps LLC" },
      {
        name: "description",
        content:
          "A law firm was spending eight to ten hours a week reviewing contracts by hand. An automated contract auditor made every review 62% faster.",
      },
      {
        property: "og:title",
        content: "How a law firm got an hour back on every contract",
      },
      {
        property: "og:description",
        content: "62% faster contract review — about 270 hours a year returned to the firm.",
      },
    ],
  }),
  component: LawFirmContractReview,
});

const beforeAfter = [
  {
    before: "Each contract reviewed from scratch",
    after: "Every contract scored 1–10 against the firm's own playbook",
  },
  {
    before: "Risky clauses found by reading",
    after: "Indemnification and termination clauses flagged and rewritten",
  },
  {
    before: "Redlines written by hand",
    after: "Redlined Word report generated for counsel review",
  },
  {
    before: "One contract at a time",
    after: "Multiple contracts processed in a single pass",
  },
];

function LawFirmContractReview() {
  return (
    <CaseStudyLayout>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-18">
        <Breadcrumb current="Law Firm Contract Review" />
        <Eyebrow>Legal · Contract Review Automation</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl text-balance">
          How a law firm got an hour back on every contract
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          A law firm was spending eight to ten hours a week reviewing contracts by hand. Every
          contract now goes through an automated first pass that scores its risk, flags the
          dangerous clauses, and returns a redlined document for counsel.
        </p>

        <Stats
          items={[
            { value: "62%", label: "Faster on every contract review" },
            { value: "5–6 hrs", label: "Returned every week" },
            { value: "~270 hrs", label: "Returned every year" },
          ]}
        />
      </section>

      <div className="border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Section heading="Five contracts a week, at up to two hours each">
            <Prose>
              <p>
                The firm was reviewing about five contracts a week — NDAs, MSAs, and SaaS agreements
                — and each took between an hour and a half and two hours depending on its size.
              </p>
              <p>That&rsquo;s eight to ten hours a week, every week, spent reading contracts.</p>
            </Prose>
          </Section>

          <Section heading="Before and after">
            <BeforeAfter rows={beforeAfter} />
          </Section>

          <Section heading="A contract auditor that grades against the firm's own standard">
            <Prose>
              <p>
                The tool takes contracts in as PDFs and runs them against a &ldquo;gold
                standard&rdquo; playbook of the firm&rsquo;s preferred terms, so each contract is
                measured against a known benchmark rather than judged in isolation.
              </p>
              <p>
                It returns a 1–10 risk score, identifies specific clause types including
                indemnification and termination, and rewrites them. The output is a Word document
                formatted for counsel review, and it handles multiple contracts at once.
              </p>
            </Prose>
          </Section>

          <Section heading="Result: about an hour back on every contract">
            <Prose>
              <p>
                Sixty-two percent faster on every review — roughly five to six hours a week, or
                about 270 hours a year, returned to the firm.
              </p>
              <p>
                A contract that took an hour and a half to two hours now takes closer to forty
                minutes, and every one comes back scored against the same standard rather than
                depending on how much time was available to read it.
              </p>
            </Prose>
          </Section>
        </div>
      </div>

      <ContactCta />
    </CaseStudyLayout>
  );
}
