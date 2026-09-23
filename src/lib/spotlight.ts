import type { MouseEvent } from 'react';

/**
 * Writes the pointer position as CSS custom properties on the hovered
 * element (`--mouse-x` / `--mouse-y`), which `.spotlight-card` in
 * globals.css reads to position its radial-gradient glow.
 *
 * Deliberately mutates the DOM node directly via `style.setProperty`
 * instead of React state, so a mousemove never triggers a re-render —
 * keeps the effect GPU-cheap and jank-free at 60fps.
 */
export function handleSpotlightMove(e: MouseEvent<HTMLElement>) {
  const target = e.currentTarget;
  const rect = target.getBoundingClientRect();
  target.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
  target.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
}
