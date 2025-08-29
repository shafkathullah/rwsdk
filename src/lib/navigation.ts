/**
 * Navigate to a new URL with client-side navigation (similar to Next.js router.push)
 * Updates browser history and triggers RSC re-render without full page reload
 * 
 * @param href - The URL to navigate to (can be relative or absolute)
 * @param replace - If true, replaces current history entry instead of adding new one
 */
export function navigate(href: string, replace = false) {
  const url = typeof href === 'string' ? new URL(href, window.location.origin) : href;
  
  if (replace) {
    window.history.replaceState({}, "", url);
  } else {
    window.history.pushState({}, "", url);
  }
  
  // @ts-ignore - RedwoodSDK internal API for RSC navigation
  globalThis.__rsc_callServer();
}