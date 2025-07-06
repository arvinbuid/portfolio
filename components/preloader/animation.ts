type SlideUpAnimation = {
  initial: {
    top: number;
  };
  exit: {
    top: string;
    transition: {
      duration: number;
      ease: [number, number, number, number];
      delay: number;
    };
  };
};

export const slideUp: SlideUpAnimation = {
  initial: {
    top: 0,
  },
  exit: {
    top: "-100vh",
    transition: {duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2},
  },
};

export const opacity = {
  initial: {
    opacity: 0,
  },
  enter: {
    opacity: 0.9,
    transition: {duration: 1, delay: 0.2},
  },
};
