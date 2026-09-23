import type { Transition, Variants } from 'framer-motion';

// Curva de easing tipo "easeOutExpo", habitual en sitios Vercel/Linear.
export const easeVercel: Transition['ease'] = [0.16, 1, 0.3, 1];

// Margin/once compartidos por TODAS las secciones para que el scroll-reveal
// se sienta como un único sistema en vez de seis animaciones sueltas.
export const viewportOnce = { once: true, margin: '-80px' } as const;

// Springs reutilizables para hovers/taps con física real en vez de un
// scale plano de Tailwind (whileHover={{ scale: 1.05 }} genérico).
export const springHover: Transition = { type: 'spring', stiffness: 400, damping: 25, mass: 0.6 };
export const springTap: Transition = { type: 'spring', stiffness: 500, damping: 30 };

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeVercel },
  },
};

// Igual que fadeInUp pero acepta un `custom` (índice) para escalonar
// tarjetas que no viven dentro de un staggerContainer (p.ej. Experience).
export const fadeInUpDelayed: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeVercel, delay: i * 0.08 },
  }),
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
