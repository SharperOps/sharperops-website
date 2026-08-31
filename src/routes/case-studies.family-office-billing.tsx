import { createFileRoute } from "@tanstack/react-router";
import {
  BeforeAfter,
  Breadcrumb,
  Callout,
  CaseStudyLayout,
  ContactCta,
  Eyebrow,
  Prose,
  Section,
  Stats,
} from "@/components/CaseStudyPage";

export const Route = createFileRoute("/case-studies/family-office-billing")({
  head: () => ({
    meta: [
      { title: "A $1.7B RIA: 40 hours a quarter out of client billing — SharperOps LLC" },
      {
        name: "description",
        content:
          "Quarterly billing at a $1.7B family office consumed about 40 hours of senior team time. Automating the cycle through the Addepar API eliminated roughly 160 hours a year.",
      },
      {
        property: "og:title",
        content: "How a $1.7B RIA took 40 hours a quarter out of client billing",
      },
      {
        property: "og:description",
        content: "~160 hours a year eliminated, with human approval kept on every client email.",
      },
    ],
  }),
  component: FamilyOfficeBilling,
});

const beforeAfter = [
  {
    before: "Bills run in Addepar by hand each quarter",
    after: "Bills execute through the Addepar API",
  },
  {
    before: "Hundreds of PDFs downloaded and filed by hand",
    after:
      "Each bill filed to the correct client folder, following the firm's existing naming conventions",
  },
  {
    before: "Billing emails built client by client",
    after:
      "Personalized drafts modeled on each client's historical formatting, recipient groups, and subject conventions, with the correct PDF attached",
  },
  {
    before: "No fee variance review",
    after: "Quarter-over-quarter management fee variance report each cycle",
  },
];

function FamilyOfficeBilling() {
  return (
    <CaseStudyLayout>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-18">
        <Breadcrumb current="Family Office Billing Automation" />
        <Eyebrow>Wealth Management · $1.7B+ AUM · Quarterly Billing Automation</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl text-balance">
          How a $1.7B RIA took 40 hours a quarter out of client billing
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Quarterly billing was consuming about 40 hours of senior team time. We automated the full
          cycle through the Addepar API — and kept a human approval gate on every client-facing
          email.
        </p>

        <Stats
          items={[
            { value: "40 hrs", label: "Eliminated every quarter" },
            { value: "~160 hrs", label: "Eliminated every year" },
            { value: "100%", label: "Client emails still human-approved" },
          ]}
        />

        <Callout>
          <strong className="font-semibold">
            Nothing reaches an end client without human approval.
          </strong>{" "}
          Every billing email is routed to the billing team as a draft.
        </Callout>
      </section>

      <div className="border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Section heading="40 hours of senior team time, and hundreds of PDFs, every quarter">
            <Prose>
              <p>
                Quarterly client billing was consuming about 40 hours per quarter of senior team
                time — running bills in Addepar, downloading and filing hundreds of PDFs by hand,
                then building personalized billing emails client by client.
              </p>
            </Prose>
          </Section>

          <Section heading="Before and after">
            <BeforeAfter rows={beforeAfter} />
          </Section>

          <Section heading="We automated the cycle inside the firm's existing conventions, not around them">
            <Prose>
              <p>
                The system executes quarterly bills through the Addepar API, downloads each
                client&rsquo;s bill, and files it into the correct client folder following the
                firm&rsquo;s existing naming conventions. It then drafts a personalized billing
                email for every client — modeled on their historical formatting, recipient groups,
                and subject conventions — with the correct PDF attached, and routes all of them to
                the billing team as drafts.
              </p>
              <p>
                Once the cycle closes, it generates a quarter-over-quarter management fee variance
                report for internal review. We paired it with an internal dashboard tracking the
                status of every step per client.
              </p>
            </Prose>
          </Section>

          <Section heading="Result: about 160 hours a year eliminated, approval retained">
            <Prose>
              <p>
                About 40 hours per quarter eliminated — roughly 160 hours a year — with a full human
                approval gate retained on every client-facing email, and a quarter-over-quarter fee
                variance review the firm did not previously have.
              </p>
              <p>
                The system was built modularly, so additional operational workflows can be added on
                top of it.
              </p>
            </Prose>
          </Section>
        </div>
      </div>

      <ContactCta />
    </CaseStudyLayout>
  );
}
