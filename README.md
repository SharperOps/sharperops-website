# SharperOps

## Requirements

- [Bun](https://bun.sh) v1.3.13

## Install dependencies

```sh
bun install
```

## Local development

Create a `.dev.vars` file in the project root with your secrets:

```sh
RESEND_API_KEY=your_key_here
```

Then start the dev server:

```sh
bun dev
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds and runs
`wrangler deploy`. To re-deploy without a commit: Actions tab -> "Deploy to
Cloudflare" -> Run workflow.

Required GitHub repository secrets (Settings -> Secrets and variables -> Actions):

- `CLOUDFLARE_API_TOKEN` - created from the "Edit Cloudflare Workers" template
- `CLOUDFLARE_ACCOUNT_ID`

To deploy from your machine instead:

```sh
bun run build && bunx wrangler deploy
```

## Production secrets

Worker secrets are separate from the GitHub secrets above, and `wrangler deploy`
preserves them, so they only need to be set once:

```sh
bunx wrangler secret put RESEND_API_KEY
```

Check what is currently set with `bunx wrangler secret list`.
