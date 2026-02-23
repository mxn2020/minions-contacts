# minions-contacts

**People, organizations, and contact channels**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-contacts/sdk minions-sdk

# Python
pip install minions-contacts

# CLI (global)
npm install -g @minions-contacts/cli
```

---

## CLI

```bash
# Show help
contacts --help
```

---

## Python SDK

```python
from minions_contacts import create_client

client = create_client()
```

---

## Project Structure

```
minions-contacts/
  packages/
    core/           # TypeScript core library (@minions-contacts/sdk on npm)
    python/         # Python SDK (minions-contacts on PyPI)
    cli/            # CLI tool (@minions-contacts/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [contacts.minions.help](https://contacts.minions.help)
- Blog: [contacts.minions.blog](https://contacts.minions.blog)
- App: [contacts.minions.wtf](https://contacts.minions.wtf)

---

## License

[MIT](LICENSE)
