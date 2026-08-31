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

export const Route = createFileRoute("/case-studies/agency-lead-routing")({
  head: () => ({
    meta: [
      { title: "A marketing agency: six hours a day back from lead entry — SharperOps LLC" },
      {
        name: "description",
        content:
          "A marketing agency was hand-entering 75 cold email leads a day into 15 client CRMs at five minutes each. Automating it returned about six hours a day.",
      },
      {
        property: "og:title",
        content: "How a marketing agency got six hours a day back from manual lead entry",
      },
      {
        property: "og:description",
        content: "75 leads a day routed into 15 client CRMs, unattended.",
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
          How a marketing agency got six hours a day back from manual lead entry
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          The agency ran cold email for 15 clients and resold them a CRM to work out of. Every reply
          was read, matched to a client, qualified, and retyped into that client&rsquo;s CRM by hand
          — about five minutes a lead, seventy-five leads a day.
        </p>

        <Stats
          items={[
            { value: "6 hrs", label: "Returned every day" },
            { value: "~1,500 hrs", label: "Returned every year" },
            { value: "75", label: "Leads routed per day, unattended" },
          ]}
        />

        <Callout>
          <strong className="font-semibold">Clients now answer their own leads.</strong> The full
          conversation history lands in the CRM, so the client can pick the thread up and reply to
          the customer directly from the system they already work out of.
        </Callout>
      </section>

      <div className="border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Section heading="Six hours a day retyping leads into fifteen CRMs">
            <Prose>
              <p>
                The agency ran cold email campaigns for 15 clients, each averaging about five leads
                a day. Every reply meant the same six steps: work out which client the campaign
                belonged to, read the reply to judge whether it was a real lead, copy the name,
                email, company, message text, and the originating email that produced it, add all of
                it to that client&rsquo;s CRM, then email the client to tell them a lead had come
                in.
              </p>
              <p>About five minutes each, seventy-five times a day.</p>
            </Prose>
          </Section>

          <Section heading="Before and after">
            <BeforeAfter rows={beforeAfter} />
          </Section>

          <Section heading="Every reply now lands in the right client's CRM on its own">
            <Prose>
              <p>
                The moment a reply arrives, it is matched to the client it belongs to from the
                sending domain — including every domain variant a brand runs campaigns from — then
                read and classified so that out-of-office notices and automated bounces never reach
                the client as leads.
              </p>
              <p>
                The customer is found in that client&rsquo;s CRM or created if they aren&rsquo;t
                there yet, and the message and its conversation history are written into their
                record. It runs around the clock without anyone starting it.
              </p>
            </Prose>
          </Section>

          <Section heading="Result: six hours a day back, and a lead path that runs itself">
            <Prose>
              <p>
                About five minutes a lead across seventy-five leads a day — roughly six hours daily,
                or 1,500 hours a year — returned to the agency.
              </p>
              <p>
                Leads reach the right CRM unattended, and clients respond to customers themselves
                inside the CRM they were already paying for.
              </p>
            </Prose>
          </Section>
        </div>
      </div>

      <ContactCta />
    </CaseStudyLayout>
  );
}
