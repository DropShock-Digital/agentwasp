# AgentWasp

<p align="center"><img src="assets/readme/agentwasp-banner-concept.png" alt="Illustrative AgentWasp capability-boundary concept banner." width="100%"></p>

<p align="center"><strong>A self-hosted autonomous-agent runtime with explicit operational and capability boundaries.</strong></p>

> **Review copy only.** Proposed `README.md` replacement on `docs/readme-brand-draft`; no primary README, release, deployment, or branding has changed.

> **Visual concept:** Original Codex-OAuth generated banner and embedded mark. Illustrative only—not runtime UI, certification, or official AgentWasp branding.

AgentWasp is a Docker-based runtime for operating agents with persistent memory, tool integrations, observability, and defined privilege boundaries. Treat it as an operator-managed system, not a casual one-command install.

<table><tr><td width="50%" valign="top">

### Runtime surface

- Containerized agent services
- Persistent memory and knowledge systems
- Integrations, logs, and monitoring
- Installer and `wasp` operational CLI

</td><td width="50%" valign="top">

### Operator responsibilities

- Review privileges and integrations
- Protect `.env` and deployment state
- Keep dashboards behind an intended access boundary
- Verify installer checksums before execution

</td></tr></table>

## Start with the docs

Read [Quickstart](docs/QUICKSTART.md), [Installation](docs/INSTALL.md), [Deployment](docs/DEPLOYMENT.md), [Security](docs/SECURITY.md), and [Status and limits](docs/STATUS_AND_LIMITS.md) before operating the stack.

## Verify an installer before use

Do not blindly pipe a remote installer into a shell. Fetch the installer and its published SHA-256 file, verify the checksum, review it, then execute only in an intended environment.

## Development and operations

The repository uses Docker Compose. Review the supplied `.env.example`, Compose configuration, and least-privilege notes before bringing up services. Use the documented `wasp` CLI for health, status, logs, backup, restore, and lifecycle operations.

## License

Apache License 2.0. See [LICENSE.md](LICENSE.md).
