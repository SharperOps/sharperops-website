import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border mt-24">
      <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row gap-6 sm:items-center sm:justify-between text-sm text-muted-foreground">
        <p>© 2026 SharperOps LLC. All rights reserved.</p>
        <nav className="flex flex-wrap gap-x-6 gap-y-2">
          <Link to="/terms" className="hover:text-foreground transition-colors">Terms &amp; Conditions</Link>
          <Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link>
          <Link to="/refund-policy" className="hover:text-foreground transition-colors">Refund &amp; Dispute</Link>
          <Link to="/cancellation-policy" className="hover:text-foreground transition-colors">Cancellation</Link>
        </nav>
      </div>
    </footer>
  );
}
