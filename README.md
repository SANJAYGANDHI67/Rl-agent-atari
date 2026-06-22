# Atari Reinforcement Learning Dashboard

This project is a React and Next.js dashboard for Atari Reinforcement Learning (A-RL) using Deep Q-Network concepts. It provides training configuration, session monitoring, replay analysis, and project documentation while preserving the original DQN-based RL design.

## Overview

- Train Atari agents on Breakout, Pong, and Space Invaders.
- Validate training configuration with schema-driven input.
- Monitor episode rewards, loss, epsilon decay, and Q-value distributions.
- Compare past sessions and review replay summaries.
- Use shared game metadata and centralized API helpers for maintainability.

## Setup

1. Install frontend dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000).

## Python RL Dependencies

This project includes a `requirements.txt` manifest for an Atari RL training stack. It is included for validation and documentation:

```bash
npm run check:requirements
```

If you have Python installed, this script validates the format of the requirements list.

## Project Structure

Key folders:

- `app/` - Next.js frontend routes, pages, and API endpoints.
- `components/` - Reusable UI components, charts, and visualizations.
- `lib/` - Shared types, configuration, game metadata, and API utility functions.
- `public/data/` - Demo session and metrics files used by the dashboard.

## Improvements

This version introduces:

- Centralized Atari game metadata in `lib/game-data.ts`
- Standardized training configuration schema and checkpoint metadata in `lib/config.ts`
- Shared API fetcher and error handling in `lib/api.ts`
- Performance summary utilities in `lib/metrics.ts`
- Improved validation and training result feedback
- Better error handling in API routes and frontend fetch flows
- Added `requirements.txt` manifest and validation script
- Added `CHANGELOG.md` and `PROJECT_STRUCTURE.md` documentation

## Notes

- Core algorithm behavior remains unchanged.
- No RL training logic has been rewritten.
- The frontend continues to use the same charts and session metrics pages.
