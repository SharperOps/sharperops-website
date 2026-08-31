import { createFileRoute } from "@tanstack/react-router";
import {
  BeforeAfter,
  Breadcrumb,
  CaseStudyLayout,
  ContactCta,
  Eyebrow,
  Prose,
  PullQuote,
  Section,
  Stats,
  Testimonial,
} from "@/components/CaseStudyPage";

export const Route = createFileRoute("/case-studies/rent-a-chef")({
  head: () => ({
    meta: [
      { title: "Rent-A-Chef: a full workday back every week — SharperOps LLC" },
      {
        name: "description",
        content:
          "Rent-A-Chef Kitchen Staffing was losing six hours a week to candidate follow-up. An automated qualification pipeline returned about 300 hours a year.",
      },
      {
        property: "og:title",
        content: "How Rent-A-Chef got a full workday back every week",
      },
      {
        property: "og:description",
        content: "~300 hours a year returned to a kitchen staffing firm.",
      },
    ],
  }),
  component: RentAChef,
});

const beforeAfter = [
  {
    before: "Chasing candidates for missing information",
    after:
      "A single intake form, then an escalating follow-up sequence that runs until the candidate completes it",
  },
  {
    before: "Manually sending and tracking background checks",
    after: "The correct background check routed automatically by placement type",
  },
  {
    before: "Screening resumes for job fit",
    after: "An AI fit assessment against the role description on every candidate",
  },
];

function RentAChef() {
  return (
    <CaseStudyLayout>
      <section className="max-w-5xl mx-auto px-6 pt-20 pb-18">
        <Breadcrumb current="Rent-A-Chef Kitchen Staffing" />
        <Eyebrow>Staffing &amp; Placement · Candidate Screening Automation</Eyebrow>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight leading-[1.08] max-w-3xl text-balance">
          How Rent-A-Chef got a full workday back every week
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed">
          Six hours a week were going to candidate chasing, background-check tracking, and resume
          screening. We replaced all three with a single automated qualification pipeline.
        </p>

        <Stats
          items={[
            { value: "6 hrs", label: "Returned every week" },
            { value: "~300 hrs", label: "Returned every year" },
            { value: "3", label: "Manual tasks eliminated end-to-end" },
          ]}
        />

        <PullQuote
          quote="He listens carefully to our business needs, communicates effectively, and works hard to bring creative ideas to life."
          name="Arita Lindsey"
          title="CEO & COO, Rent-A-Chef Kitchen Staffing LLC"
        />
      </section>

      <div className="border-t border-border bg-secondary/40">
        <div className="max-w-5xl mx-auto px-6 py-20">
          <Section heading="Six hours a week lost to administrative follow-up">
            <Prose>
              <p>
                Rent-A-Chef was losing roughly six hours a week to the same three tasks: chasing
                candidates for missing information, manually sending and tracking background checks,
                and screening resumes for job fit.
              </p>
              <p>
                That&rsquo;s a full workday every week spent on administrative follow-up instead of
                winning new client accounts.
              </p>
            </Prose>
          </Section>

          <Section heading="Before and after">
            <BeforeAfter rows={beforeAfter} />
          </Section>

          <Section heading="We built an end-to-end candidate qualification pipeline">
            <Prose>
              <p>
                A candidate is submitted through a single intake form, and the system automatically
                routes them the correct background check based on placement type, then runs an
                escalating follow-up sequence until they complete it.
              </p>
              <p>
                Once verification comes back, the system performs an AI fit assessment against the
                role description and logs the complete candidate profile into a &ldquo;Ready to
                Present&rdquo; tracker with links to their resume and verification — notifying the
                team the moment a qualified candidate is ready.
              </p>
            </Prose>
          </Section>

          <Section heading="In the client's words">
            <Testimonial name="Arita Lindsey" title="CEO & COO, Rent-A-Chef Kitchen Staffing LLC">
              &ldquo;We are extremely grateful to Christian Martinez for his outstanding work and
              dedication in developing our app for Rent-A-Chef Kitchen Staffing LLC. Christian is
              very understanding, professional, and truly an IT genius. His passion for technology
              and commitment to excellence clearly shows in his work. He listens carefully to our
              business needs, communicates effectively, and works hard to bring creative ideas to
              life. Christian&rsquo;s professionalism, patience, and technical expertise have made
              this project a smooth and exciting experience. We highly recommend Christian Martinez
              to anyone seeking a talented and passionate app developer.&rdquo;
            </Testimonial>
          </Section>

          <Section heading="Result: a full workday a week, back on winning client accounts">
            <Prose>
              <p>
                Roughly six hours per week returned to the business — about 300 hours a year, back
                on the work that was being displaced: winning new client accounts.
              </p>
              <p>
                Candidate follow-up now runs unattended, and every qualified candidate arrives
                pre-screened and presentation-ready.
              </p>
            </Prose>
          </Section>
        </div>
      </div>

      <ContactCta />
    </CaseStudyLayout>
  );
}
