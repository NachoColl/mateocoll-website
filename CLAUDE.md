# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a portfolio website for Mateo Coll, a film editor. It's built with Eleventy (11ty) using Nunjucks templates, deployed to GitHub Pages.

## Commands

```bash
# Development
npm run dev          # Start dev server on localhost:8080

# Build
npm run build        # Build site to _site/

# Visual regression testing
npm run build                    # Build first (tests require built site)
npm run test:visual              # Run Playwright visual tests
npm run test:visual:update       # Update snapshots
```

## Architecture

### Eleventy Structure
- **Templates**: `src/templates/` - Nunjucks templates (`.njk`)
- **Includes**: `src/templates/_includes/` - `base.njk`, `header.njk`, `footer.njk`
- **Data**: `src/data/` - JSON data files (`site.json`, `projects.json`, etc.)
- **Assets**: `src/assets/` - CSS, JS, images (copied to `_site/assets/`)
- **Output**: `_site/` - Built site

### Data Flow
Templates access data via Eleventy's data cascade. For example, `{{ site.title }}` pulls from `src/data/site.json`.

### Visual Testing
Playwright tests in `tests/visual/` capture screenshots of key pages and compare against reference snapshots in `tests/visual/snapshots/`.

## Deployment

Pushes to `master` trigger GitHub Actions (`.github/workflows/deploy.yml`) which builds and deploys to GitHub Pages. The `ELEVENTY_PATH_PREFIX` env var is set for the subdirectory deployment.

## Git Worktrees

For parallel feature development, use worktree scripts:

```bash
npm run worktree:create <branch-name>   # Create worktree in .trees/<branch-name>/
npm run worktree:list                   # Show all worktrees
npm run worktree:merge <branch-name>    # Merge worktree into current branch
npm run worktree:remove <branch-name>   # Clean up worktree
```

See `docs/worktrees/WORKTREES.md` for detailed workflow documentation.


⚠️ **IMPORTANT**: Read `CLAUDE_INSTRUCTIONS.md` for context before making changes in this repository.
