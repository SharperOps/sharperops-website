import { Link } from "@tanstack/react-router";
import { SiteFooter } from "./SiteFooter";
import type { ReactNode } from "react";

export function PolicyPage({ title, updated, children }: { title: string; updated: string; children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-border">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link to="/" className="font-semibold tracking-tight">SharperOps<span className="text-primary">.</span></Link>
          <Link to="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">← Back to home</Link>
        </div>
      </header>
      <main className="flex-1">
        <article className="max-w-3xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-semibold tracking-tight mb-2">{title}</h1>
          <p className="text-sm text-muted-foreground mb-12">Last updated: {updated}</p>
          <div className="prose-content space-y-6 text-foreground/90 leading-relaxed [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:mt-10 [&_h2]:mb-3 [&_h2]:tracking-tight [&_p]:text-[15px] [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-[15px] [&_a]:text-primary [&_a]:underline">
            {children}
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
