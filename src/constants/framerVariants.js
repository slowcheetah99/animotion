export const staggerIn = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export const pageTransition = {
  initial: {
    opacity: 0,
    y: -200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const slideIn = {
  initial: {
    y: 200,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },

  leave: {
    y: -20,
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.6, 0.05, -0.01, 0.9],
    },
  },
};

export const staggerChildren = {
  animate: {
    transition: {
      duration: 2,
      delayChildren: 0.5,
      staggerChildren: 0.35,
    },
  },
};
