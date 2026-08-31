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
  Steps,
} from "@/components/CaseStudyPage";

export const Route = createFileRoute("/case-studies/agency-lead-routing")({
  head: () => ({
    meta: [
      { title: "A marketing agency: six hours a week back from lead entry — SharperOps LLC" },
      {
        name: "description",
        content:
          "A marketing agency was hand-entering cold email leads into 15 client CRMs at five minutes each. Automating it returned about six hours a week.",
      },
      {
        property: "og:title",
        content: "How a marketing agency got six hours a week back from manual lead entry",
      },
      {
        property: "og:description",
        content: "Every cold email reply routed into the right client's CRM, unattended.",
      },
    ],
  }),
  component: AgencyLeadRouting,
});

const beforeAfter = [
  {
    before: "Every reply checked by hand to find which client it belonged to",
    after:
      "Replies routed to the right client's CRM automatically, including every domain variant a brand uses",
  },
  {
    before: "Replies read to judge whether they were a real lead",
    after: "Replies classified automatically, with out-of-office and auto-replies filtered out",
  },
  {
    before: "Name, email, company, message, and originating email retyped",
    after:
      "Full record and conversation history written into the client's CRM, contact created if they don't exist",
  },
  {
    before: "Client emailed by hand about every new lead",
    after: "The CRM notifies them",
  },
  {
    before: "Ran only when someone was at a desk",
    after: "Runs around the clock, with or without anyone working",
  },
];

function AgencyLeadRouting() {
  return (
    <CaseStudyLayout>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-18">
        <Breadcrumb current="Agency Lead Routing" />
        <Eyebrow>Marketing · Lead Routing Automation</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl text-balance">
          How a marketing agency got six hours a week back from manual lead entry
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The agency ran cold email for 15 clients and resold them a CRM to work out of. Every reply
          that came back had to be sorted, qualified, and retyped into the right client&rsquo;s CRM
          before that client ever saw it.
        </p>

        <Stats
          items={[
            { value: "6 hrs", label: "Returned every week" },
            { value: "~310 hrs", label: "Returned every year" },
            { value: "15", label: "Client CRMs kept in sync, unattended" },
          ]}
        />
      </section>

      <div className="border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Section heading="Six hours a week retyping leads into fifteen client CRMs">
            <Prose>
              <p>
                The agency ran cold email campaigns for 15 clients, bringing in about fifteen leads
                a day between them. Every reply went through the same six steps by hand:
              </p>
            </Prose>
            <Steps
              items={[
                "Work out which client the campaign belonged to",
                "Read the reply and decide whether it was a real lead",
                "Copy the name, email, and company",
                "Copy the message text and the original email that drew the reply",
                "Add all of it to that client's CRM",
                "Email the client to tell them a lead had come in",
              ]}
            />
            <p className="mt-6 text-base leading-relaxed text-foreground font-medium">
              Five minutes a lead. Fifteen leads a day.
            </p>
          </Section>

          <Section heading="Before and after">
            <BeforeAfter rows={beforeAfter} />
            <Callout>
              <strong className="font-semibold">Clients now answer their own leads.</strong> The
              full conversation history lands in the CRM, so the client can pick the thread up and
              reply to the customer directly from the system they already work out of.
            </Callout>
          </Section>

          <Section heading="Every reply now lands in the right client's CRM on its own">
            <Prose>
              <p>
                The moment a reply arrives, the system reads the sending domain and matches it to
                the client it belongs to — including every domain variant a brand runs campaigns
                from. It classifies the reply, filtering out out-of-office notices and automated
                bounces so they never reach a client as leads.
              </p>
              <p>
                It then finds the customer in that client&rsquo;s CRM, creates them if they
                aren&rsquo;t there yet, and writes the message and its full conversation history
                into their record. No one starts it, and no one has to be at a desk.
              </p>
            </Prose>
          </Section>

          <Section heading="Result: six hours a week back, and leads that arrive ready to answer">
            <Prose>
              <p>Roughly six hours a week — about 310 hours a year — returned to the agency.</p>
              <p>
                Leads reach the right CRM unattended, and because the whole conversation comes with
                them, clients answer their own customers inside the CRM they were already paying
                for.
              </p>
            </Prose>
          </Section>
        </div>
      </div>

      <ContactCta />
    </CaseStudyLayout>
  );
}
