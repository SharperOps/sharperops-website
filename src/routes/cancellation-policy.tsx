import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/cancellation-policy")({
  head: () => ({ meta: [{ title: "Cancellation Policy — SharperOps LLC" }, { name: "description", content: "How to cancel an engagement with SharperOps LLC." }] }),
  component: () => (
    <PolicyPage title="Cancellation Policy" updated="May 5, 2026">
      <p>This Cancellation Policy describes how clients may cancel ongoing engagements with SharperOps LLC ("we," "us," or "our").</p>

      <h2>1. Notice Period</h2>
      <p>Clients may cancel an ongoing engagement by providing <strong>14 days written notice</strong>. The notice period begins on the date we receive your written cancellation request.</p>

      <h2>2. Billing Through Cancellation Date</h2>
      <p>Any work completed up to and including the effective cancellation date is billable. This includes work performed during the 14-day notice period at the client's request. Final invoices are issued promptly after the engagement ends and are payable per the original payment terms.</p>

      <h2>3. How to Cancel</h2>
      <p>To cancel an engagement, email <a href="mailto:christian@sharperops.com">christian@sharperops.com</a> with:</p>
      <ul>
        <li>The name of the client and the engagement;</li>
        <li>The reason for cancellation (optional but appreciated);</li>
        <li>The desired effective cancellation date.</li>
      </ul>
      <p>We will acknowledge your request within 2 business days and confirm the effective cancellation date.</p>

      <h2>4. Cancellation by SharperOps</h2>
      <p>SharperOps reserves the right to cancel an engagement with 14 days written notice, or immediately for cause (including non-payment, unlawful conduct, or material breach). In such cases, the client is billed only for work completed up to the cancellation date.</p>

      <h2>5. Refunds</h2>
      <p>Any refund of pre-paid amounts following cancellation is governed by our <a href="/refund-policy">Refund &amp; Dispute Policy</a>.</p>

      <h2>6. Contact</h2>
      <p>Questions about cancellation? Email <a href="mailto:christian@sharperops.com">christian@sharperops.com</a>.</p>
    </PolicyPage>
  ),
});
