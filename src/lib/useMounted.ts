import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

/**
 * Detects whether the component has hydrated on the client, without the
 * classic `useState(false)` + `useEffect(() => setState(true))` pattern —
 * that trips the `react-hooks/set-state-in-effect` rule because it calls
 * setState synchronously inside an effect body, causing an extra render.
 *
 * `useSyncExternalStore` returns the server snapshot (`false`) during SSR
 * and on the first client render, then flips to `true` once React commits
 * on the client — the same two-render behavior, but through a store
 * subscription instead of an effect-triggered state update.
 */
export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
}
