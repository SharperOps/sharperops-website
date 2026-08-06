import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({ meta: [{ title: "Refund & Dispute Policy — SharperOps LLC" }, { name: "description", content: "Refund and dispute resolution policy for SharperOps LLC services." }] }),
  component: () => (
    <PolicyPage title="Refund & Dispute Policy" updated="May 5, 2026">
      <p>SharperOps LLC ("we," "us," or "our") provides professional consulting and custom software development services. Because our work is services-based, the following refund and dispute policy applies to all engagements.</p>

      <h2>1. Refunds for Unstarted Work</h2>
      <p>Refunds are available within <strong>14 days</strong> of payment for any engagement on which work has not yet begun. To request a refund, email <a href="mailto:christian@sharperops.com">christian@sharperops.com</a> with your invoice or payment reference.</p>

      <h2>2. Refunds for In-Progress Engagements</h2>
      <p>For engagements where work has already commenced, partial refunds may be issued at SharperOps's discretion based on the proportion of work completed at the time of the request. Time spent on discovery, advisory, planning, and development is non-refundable to the extent it has been delivered.</p>

      <h2>3. Non-Refundable Items</h2>
      <ul>
        <li>Completed deliverables that have been accepted by the client.</li>
        <li>Third-party fees (e.g., software licenses, API usage, infrastructure costs) already incurred on the client's behalf.</li>
        <li>Engagements canceled outside of the timelines described in our Cancellation Policy.</li>
      </ul>

      <h2>4. Disputes</h2>
      <p>If you have a concern or dispute regarding a charge or engagement, please raise it first by emailing <a href="mailto:christian@sharperops.com">christian@sharperops.com</a> with a clear description of the issue. We are committed to working in good faith to resolve disputes promptly.</p>

      <h2>5. Resolution Timeline</h2>
      <p>We commit to acknowledging dispute requests within 2 business days and resolving them within <strong>10 business days</strong> of receipt. Where additional time is required, we will communicate the reason and expected timeline.</p>

      <h2>6. Approved Refunds</h2>
      <p>Approved refunds are processed back to the original payment method within 5–10 business days. Bank or processor timelines may add additional delay.</p>

      <h2>7. Contact</h2>
      <p>All refund and dispute requests should be sent to <a href="mailto:christian@sharperops.com">christian@sharperops.com</a>.</p>
    </PolicyPage>
  ),
});
