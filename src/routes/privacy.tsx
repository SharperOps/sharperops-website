import { createFileRoute } from "@tanstack/react-router";
import { PolicyPage } from "@/components/PolicyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({ meta: [{ title: "Privacy Policy — SharperOps LLC" }, { name: "description", content: "How SharperOps LLC collects and uses information." }] }),
  component: () => (
    <PolicyPage title="Privacy Policy" updated="May 5, 2026">
      <p>SharperOps LLC ("we," "us," or "our") respects your privacy. This Privacy Policy explains what information we collect, how we use it, and your choices.</p>

      <h2>1. Information We Collect</h2>
      <ul>
        <li><strong>Contact form submissions:</strong> When you submit our contact form, we collect your name, email address, and the message you send.</li>
        <li><strong>Email correspondence:</strong> When you email us directly, we receive and store your message and contact details.</li>
        <li><strong>Basic analytics:</strong> We may collect aggregated, non-identifying analytics about site usage (such as pages visited, browser type, and approximate region) to understand how the site is used.</li>
        <li><strong>Engagement information:</strong> If you become a client, we collect information you provide as part of the engagement (e.g., billing details, project requirements, and any data you choose to share).</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>To respond to inquiries and provide requested services.</li>
        <li>To deliver, maintain, and improve our services.</li>
        <li>To send service-related communications.</li>
        <li>To comply with legal obligations.</li>
      </ul>

      <h2>3. Sharing of Information</h2>
      <p>We do <strong>not</strong> sell your personal information. We may share information with trusted service providers (such as email, hosting, payment processing, and analytics providers) strictly to operate our business, and where required by law.</p>

      <h2>4. Data Retention</h2>
      <p>We retain personal information only as long as necessary to fulfill the purposes outlined in this policy or as required by law.</p>

      <h2>5. Security</h2>
      <p>We use reasonable technical and organizational measures to protect your information. No method of transmission or storage is 100% secure, however, and we cannot guarantee absolute security.</p>

      <h2>6. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have rights to access, correct, or delete personal information we hold about you. To exercise these rights, contact us at the email below.</p>

      <h2>7. Children</h2>
      <p>Our services are not directed to children under 13, and we do not knowingly collect personal information from them.</p>

      <h2>8. Changes to This Policy</h2>
      <p>We may update this Privacy Policy from time to time. The "Last updated" date at the top reflects the latest revision.</p>

      <h2>9. Contact</h2>
      <p>For privacy inquiries, email <a href="mailto:christian@sharperops.com">christian@sharperops.com</a>.</p>
    </PolicyPage>
  ),
});
