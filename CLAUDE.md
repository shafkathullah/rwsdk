# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a RedwoodSDK project - a framework for building full-stack React applications that run on Cloudflare Workers. The project uses a minimal starter template with server-side rendering, client-side hydration, and edge deployment capabilities.

## Architecture

**Core Entry Points:**

- `src/worker.tsx` - Server-side entry point that defines the app with routing, middleware, and SSR
- `src/client.tsx` - Client-side entry point for hydration
- `src/app/Document.tsx` - HTML document wrapper component

**Request Flow:**

1. Requests hit the Cloudflare Worker defined in `src/worker.tsx`
2. The `defineApp` function processes middleware (headers, context setup)
3. Routes are rendered server-side with the `Document` wrapper
4. Client-side hydration occurs via the imported `src/client.tsx` script
5. Client-side navigation intercepts internal links for faster page transitions

**Key Patterns:**

- **Suspense-based Components**: Components like `Comp1` and `Comp2` are async with artificial delays, demonstrating SSR streaming
- **Security Headers**: The `setCommonHeaders` middleware applies comprehensive security headers including CSP with nonce-based script execution
- **Type Augmentation**: The `types/rw.d.ts` extends the RedwoodSDK's default context with the project's `AppContext`

## Development Commands

```bash
# Install dependencies
pnpm install

# Initialize development environment (generates types, etc.)
npm run dev:init

# Start development server
npm run dev

# Type checking
npm run types
# Shortcut: npm run check (runs generate + types)

# Build for production
npm run build

# Preview production build locally
npm run preview

# Run worker locally
npm run worker:run

# Clean build artifacts
npm run clean
```

## Deployment

```bash
# Deploy to Cloudflare Workers
npm run release
```

**Pre-deployment Requirements:**

- Update `wrangler.jsonc` name field from `__change_me__` to your worker name
- Configure environment variables in `wrangler.jsonc` vars section
- Ensure `rw-scripts ensure-deploy-env` requirements are met

## Configuration Files

- `wrangler.jsonc` - Cloudflare Workers configuration with assets binding and observability
- `vite.config.mts` - Vite build config with RedwoodSDK and Cloudflare plugins
- `tsconfig.json` - TypeScript config with strict mode, path aliases (`@/*` → `src/*`), and custom type definitions
- `worker-configuration.d.ts` - Cloudflare Workers environment type definitions

## Project Structure Patterns

- **Pages**: Place in `src/app/pages/` (see `Home.tsx`)
- **Components**: Place in `src/app/components/` (async components supported)
- **Middleware**: Define in separate files (see `src/app/headers.ts`)
- **Types**: Custom types in `types/` directory, worker context in `src/worker.tsx`
- **Path Aliases**: Use `@/` for `src/` imports

## Styling with Tailwind CSS

The project uses Tailwind CSS v4 for styling:

- **CSS File**: `src/app/styles.css` contains Tailwind imports and custom theme variables
- **Configuration**: Tailwind is configured via `@tailwindcss/vite` plugin in `vite.config.mts`
- **Theme Customization**: Use `@theme` block in CSS for custom design tokens
- **Utilities**: Standard Tailwind utility classes work throughout the project
- **Loading**: CSS is loaded via `styles.css?url` import in `Document.tsx`

**Example Theme Customization:**

```css
@theme {
  --color-primary: #3b82f6;
  --color-bg: #f8fafc;
}
```

## Client-Side Navigation

The project includes client-side navigation for faster page transitions:

- **Configuration**: Set up in `src/client.tsx` via `initClientNavigation()`
- **Behavior**: Internal links are intercepted and handled client-side
- **Server Integration**: Each navigation still hits the server, preserving middleware and security
- **Scroll Control**: Smooth scrolling enabled with automatic scroll-to-top

**Configuration Options:**

```typescript
initClientNavigation({
  scrollBehavior: "smooth", // "smooth" or "auto"
  scrollToTop: true, // automatic scroll to top
  onNavigate: async () => {
    /* custom tracking */
  },
});
```

## Security Implementation

The project implements security best practices via middleware:

- HSTS with 2-year max-age (production only)
- Content type sniffing prevention
- No-referrer policy
- Restrictive permissions policy
- CSP with nonce-based script execution using `rw.nonce`
