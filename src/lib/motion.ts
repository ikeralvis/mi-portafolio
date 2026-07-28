import type { Transition, Variants } from 'framer-motion';

// Curva de easing tipo "easeOutExpo", habitual en sitios Vercel/Linear.
export const easeVercel: Transition['ease'] = [0.16, 1, 0.3, 1];

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeVercel },
  },
};

export const staggerContainer = (stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger },
  },
});

export const fadeInItem: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeVercel },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: easeVercel },
  },
};
