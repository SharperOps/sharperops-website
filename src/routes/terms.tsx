import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/terms")({
  head: () => ({ meta: [{ title: "Terms & Conditions — SharperOps LLC" }, { name: "description", content: "Terms and conditions for SharperOps LLC services." }] }),
  component: () => (
    <PolicyPage title="Terms & Conditions" updated="May 5, 2026">
      <p>These Terms &amp; Conditions ("Terms") govern your use of services provided by SharperOps LLC ("SharperOps," "we," "us," or "our"). By engaging our services, you agree to these Terms.</p>

      <h2>1. Scope of Services</h2>
      <p>SharperOps provides AI consulting, custom software development, workflow automation, and integration services. The specific scope, deliverables, and timeline of each engagement will be defined in a written proposal, statement of work, or agreement signed by both parties.</p>

      <h2>2. Payment Terms</h2>
      <p>Fees, billing schedules, and payment terms are set out in the applicable proposal or statement of work. Unless otherwise agreed in writing, invoices are payable within 14 days of issuance. Late payments may incur reasonable interest charges. Payments are processed through third-party providers; you agree to their applicable terms.</p>

      <h2>3. Intellectual Property</h2>
      <p>Upon full payment, the client receives ownership of custom-developed deliverables produced specifically for them under an engagement, except for: (a) pre-existing tools, libraries, frameworks, and know-how owned by SharperOps; and (b) third-party open-source or licensed components, which remain governed by their original licenses. SharperOps retains the right to reuse general knowledge, methodologies, and non-confidential techniques developed in the course of work.</p>

      <h2>4. Confidentiality</h2>
      <p>Each party agrees to keep the other party's confidential information confidential and to use it only for the purpose of performing the engagement.</p>

      <h2>5. Limitation of Liability</h2>
      <p>To the maximum extent permitted by law, SharperOps's total aggregate liability arising out of or relating to any engagement shall not exceed the fees paid by the client to SharperOps in the three (3) months preceding the event giving rise to the claim. In no event shall SharperOps be liable for any indirect, incidental, special, consequential, or punitive damages, including lost profits or lost data.</p>

      <h2>6. Warranties &amp; Disclaimer</h2>
      <p>Services are provided on an "as is" and "as available" basis. AI systems may produce outputs that are inaccurate, biased, or otherwise unsuitable for a given use; clients are responsible for reviewing outputs before relying on them in production. SharperOps disclaims all implied warranties to the maximum extent permitted by law.</p>

      <h2>7. Promotions</h2>
      <p>From time to time, SharperOps may offer promotions, discounts, or special offers. Any such promotion is governed by its own specific written terms, which will be made available at the time of the offer. Promotional terms control in the event of any conflict with these Terms with respect to that promotion.</p>

      <h2>8. Termination</h2>
      <p>Either party may terminate an engagement in accordance with the Cancellation Policy. Sections relating to payment, intellectual property, confidentiality, and limitation of liability survive termination.</p>

      <h2>9. Governing Law</h2>
      <p>These Terms are governed by the laws of the State of Texas, without regard to its conflict of laws rules. Any disputes shall be brought in the state or federal courts located in Texas, unless first resolved through the dispute process described in our Refund &amp; Dispute Policy.</p>

      <h2>10. Changes to These Terms</h2>
      <p>We may update these Terms from time to time. The "Last updated" date at the top of this page reflects the latest revision. Continued engagement after changes constitutes acceptance.</p>

      <h2>11. Contact</h2>
      <p>Questions about these Terms? Email <a href="mailto:christian@sharperops.com">christian@sharperops.com</a>.</p>
    </PolicyPage>
  ),
});
