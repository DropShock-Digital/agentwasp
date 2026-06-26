# Agentwasp

![Repo type](https://img.shields.io/badge/type-profile%20organization%20hub-0f172a) ![Status](https://img.shields.io/badge/status-prototype-2563eb) ![Docs](https://img.shields.io/badge/docs-rich%20README-7c3aed) ![Visibility](https://img.shields.io/badge/visibility-public-16a34a)

The agent runtime built to operate.

Built and maintained by **DropShock Digital**.

---

## First screen

| Area | Detail |
| --- | --- |
| Repository | [`DropShock-Digital/agentwasp`](https://github.com/DropShock-Digital/agentwasp) |
| Primary class | profile / organization hub |
| Current posture | prototype |
| Default branch | `main` |
| Visibility | public |
| Last README standardization | 2026-06-26 |

## What matters

- Make the repo purpose obvious in the first 30 seconds.
- Put the architecture or workflow in a visual map before deep prose.
- Keep commands, environment notes, and handoff risks close to the top.
- Credit the real builder/maintainer while keeping client or project context separate from implementation notes.
- Audit priority: `P1`

## System map

```mermaid
flowchart TD
    A["New repo / operator"] --> B["Template or hub"]
    B --> C["Reusable standards"]
    C --> D["Project-specific implementation"]
    D --> E["Consistent handoff"]
    B --> F["Examples + adoption notes"]
```


### Visual proof

![Logo](.github/assets/logo.png)

![Wasp Text](.github/assets/wasp-text.png)

![Logo](docs-site/static/img/logo.png)

## Best features carried forward

- Visual-first GitHub Markdown is kept, but constrained to one clear hero/asset lane.
- Existing Mermaid thinking is preserved and moved near the top as the system map.
- Existing setup intent is kept and reframed as a short operator path.
- Architecture language is retained but converted into a skimmable diagram-first explanation.

## Operate this repo

**Detected stack:** Docker Compose

```bash
docker compose up --build
```

> Commands above are inferred from repository files and should be verified before they become release or client handoff instructions.

## Documentation map

- [`.env.example`](.env.example)
- [`.github/ISSUE_TEMPLATE/bug_report.md`](.github/ISSUE_TEMPLATE/bug_report.md)
- [`.github/ISSUE_TEMPLATE/feature_request.md`](.github/ISSUE_TEMPLATE/feature_request.md)
- [`.github/PULL_REQUEST_TEMPLATE.md`](.github/PULL_REQUEST_TEMPLATE.md)
- [`CHANGELOG.md`](CHANGELOG.md)
- [`CODE_OF_CONDUCT.md`](CODE_OF_CONDUCT.md)
- [`LICENSE.md`](LICENSE.md)
- [`docker-compose.yml`](docker-compose.yml)
- [`docs/CONTRIBUTING.md`](docs/CONTRIBUTING.md)
- [`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md)
- [`docs/INSTALL.md`](docs/INSTALL.md)
- [`docs/QUICKSTART.md`](docs/QUICKSTART.md)
- [`docs/SECURITY.md`](docs/SECURITY.md)
- [`docs/STATUS_AND_LIMITS.md`](docs/STATUS_AND_LIMITS.md)

## Handoff notes

| Area | Detail |
| --- | --- |
| Secrets | ` .env.example ` is present; keep real credentials in the vault. |
| License | License file detected. |
| Owner credit | Built and maintained by DropShock Digital. |
| Next documentation move | Add `docs/ARCHITECTURE.md` with the full system diagram and decisions. |

## Maintenance standard

This README follows the DropShock repo documentation format: one clear identity, one visual map, a short operator path, explicit ownership, and deeper detail moved into linked docs when needed. If the repo grows, add or update `docs/ARCHITECTURE.md`, `docs/DEPLOYMENT.md`, and `docs/OPERATIONS.md` instead of turning the README into a wall of text.
