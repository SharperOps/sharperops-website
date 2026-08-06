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

Push to GitHub — Cloudflare automatically deploys on every push.

Production secrets are managed in the Cloudflare dashboard:
**Workers & Pages → your worker → Settings → Variables and Secrets**
