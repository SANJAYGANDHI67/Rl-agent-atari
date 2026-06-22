# Project Structure

This repository is an Atari Reinforcement Learning dashboard built with Next.js and supporting Deep Q-Network project documentation.

## Top-level files
- `README.md` - Project overview, setup instructions, architecture, and usage.
- `CHANGELOG.md` - Summary of recent modifications to the project.
- `requirements.txt` - Python dependencies for the RL training stack.
- `package.json` - Frontend dependencies and scripts.
- `tsconfig.json` - TypeScript compiler configuration.
- `next.config.mjs` - Next.js runtime configuration.

## Application folders
- `app/`
  - `page.tsx` - Home / landing page.
  - `train/page.tsx` - Training configuration UI.
  - `dashboard/page.tsx` - Metrics dashboard and session metrics display.
  - `sessions/page.tsx` - Session comparison interface.
  - `replay/page.tsx` - Replay preview and action distribution view.
  - `architecture/page.tsx` - DQN architecture documentation and pseudocode.
  - `api/` - Serverless API routes for config validation, games, sessions and metrics.

- `components/`
  - `game-card.tsx` - Reusable card presentation for Atari games.
  - `page-wrapper.tsx` - Page transition wrapper with animation.
  - `dqn-diagram.tsx` - Animated DQN architecture visualization.
  - `charts/` - Reusable chart components for training metrics.
  - `ui/` - Shared UI primitives (buttons, cards, forms, etc.).

- `lib/`
  - `types.ts` - Shared TypeScript interfaces and metric definitions.
  - `utils.ts` - Tailwind class helper.
  - `game-data.ts` - Centralized Atari game metadata.
  - `config.ts` - Training configuration schema, defaults, and checkpoint metadata.
  - `api.ts` - Shared API route helpers.
  - `metrics.ts` - Performance metric calculation utilities.

- `public/data/`
  - `index.json` - Available training sessions.
  - `session-XXX/metrics.json` - Sample training metrics data.

## Notes
- The frontend uses `swr` for data fetching, `zod` for schema validation, and `recharts` for charts.
- `requirements.txt` is included as a validation manifest for the Python RL stack, without changing frontend behavior.
