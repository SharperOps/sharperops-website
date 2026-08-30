# SharperOps

Marketing site for sharperops.com. TanStack Start (React 19) built with Vite,
served from a single Cloudflare Worker. The contact form posts to a server
function that sends mail through Resend.

- `src/routes/` — file-based routes (`routeTree.gen.ts` is generated, don't edit)
- `src/components/ui/` — shadcn/ui primitives
- `src/serverFunctions/contact.ts` — contact form handler (Resend)
- `wrangler.jsonc` — Worker name, custom domains, preview URL setting
- `.github/workflows/` — production deploy + PR previews

## Requirements

- [Bun](https://bun.sh) 1.3.13 (pinned in `package.json`)

## Local development

```sh
bun install
cp .dev.vars.example .dev.vars   # then fill in RESEND_API_KEY
bun dev
```

`.dev.vars` is gitignored and never leaves your machine. Without a real
`RESEND_API_KEY` everything renders fine, but submitting the contact form
fails.

Other scripts: `bun run build`, `bun run lint`, `bun run format`.

## Where secrets live

Three separate stores, which is the part that trips people up:

| Store | Holds | Used by | Managed with |
| --- | --- | --- | --- |
| `.dev.vars` (local file) | `RESEND_API_KEY` | `bun dev` | your editor |
| GitHub Actions secrets | `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID` | CI, to authenticate to Cloudflare | repo Settings → Secrets and variables → Actions |
| Cloudflare Worker secrets | `RESEND_API_KEY` | the deployed Worker at runtime | `wrangler secret put` |

Setting one does not set the others. In particular, the Resend key has to be
set twice: once locally and once on the Worker. `wrangler deploy` preserves
existing Worker secrets, so the production one is a one-time step.

## Deploy

Push to `main` → `.github/workflows/deploy.yml` builds and runs
`wrangler deploy`. To re-run without a commit: Actions → "Deploy to Cloudflare"
→ Run workflow.

From your own machine instead:

```sh
bun run build && bunx wrangler deploy
```

## PR previews

Opening a PR runs `.github/workflows/preview.yml`, which builds and runs
`wrangler versions upload --preview-alias pr-<number>`. That uploads a new
Worker version and gives it its own URL **without shifting any production
traffic** — sharperops.com keeps serving the last `wrangler deploy`. The
workflow comments the URL on the PR and edits that same comment on each push,
so the link stays stable for the life of the PR.

Two things to know:

- Preview URLs are on `*.workers.dev` and are **publicly reachable** by anyone
  with the link. Don't put anything sensitive behind one. The account has a
  workers.dev subdomain registered purely to host these; production sets
  `workers_dev: false` and is only ever served from the custom domains.
- A preview version shares the production Worker's secrets, so the contact form
  on a preview **sends real email** to christian@sharperops.com.

Previews are skipped for PRs opened from forks, because GitHub does not expose
secrets to them. Collaborators pushing branches to this repo are unaffected.

Handy checks:

```sh
gh secret list                  # GitHub Actions secrets
bunx wrangler secret list       # Worker runtime secrets
bunx wrangler whoami            # which Cloudflare account you're pointed at
gh run list                     # recent deploys
```
