# Changelog

## [Unreleased]

### Added
- Introduced shared game metadata in `lib/game-data.ts` to centralize Atari environment configuration.
- Added training configuration schema, defaults, and checkpoint metadata utilities in `lib/config.ts`.
- Added `lib/api.ts` helper for consistent API fetching and error handling.
- Added `lib/metrics.ts` utilities for reward, trend, and summary calculations.
- Added `requirements.txt` for Python RL dependency validation.
- Added `CHANGELOG.md` to document project updates.
- Added `README.md` improvements and project structure documentation.

### Changed
- Refactored API routes to use shared configuration and improved error messages.
- Improved training form validation and user feedback in `app/train/page.tsx`.
- Consolidated supported game data and ensured all UI references use centralized metadata.
- Added performance metrics tracking and summary calculations to dashboard components.
- Added reusable API and game utility methods to reduce duplicate fetch logic.

### Fixed
- Added safer fetch handling for session and metrics API routes.
- Improved default configuration boundaries, especially epsilon decay range.
