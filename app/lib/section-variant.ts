export const sectionVariant = {
  offscreen: {
    y: 20,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 1.4,
      delay: 0.2
    }
  }
};
