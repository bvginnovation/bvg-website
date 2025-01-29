export const keyframes = {
  // ShakeX Animation
  shakeX: {
    "0%, 100%": { transform: "translateX(-100%)" },
    "50%": { transform: "translateX(100%)" },
  },

  // Fade Animation
  fade: {
    "0%": { opacity: "0" },
    "100%": { opacity: "1" },
  },

  // Dot Bounce Animation
  dotBounce: {
    "0%, '80%',100%": { transform: "scale(1)" },
    "40%": { transform: "scale(1.5)" },
  },

  // Bar Pulse Animation
  barPulse: {
    "0%": { transform: "scaleY(1)" },
    "50%": { transform: "scaleY(1.5)" },
    "100%": { transform: "scaleY(1)" },
  },

  // Text animation typings
  textTypings: {
    "0%": { "clip-path": "inset(0 100% 0 0)" },
    "50%": { "clip-path": "inset(0 0% 0 0)" },
    "80%": { "clip-path": "inset(0 0% 0 0)" },
    "100%": { "clip-path": "inset(0 100% 0 0)" },
  },

  // Cusors blink animation
  blinkCursor: {
    "50% ": { opacity: "0" },
  },
};

export const animations = {
  shakeX: { value: "shakeX 1s ease-in-out infinite" },
  fade: { value: "fade 1s ease-in-out infinite" },
  dotBounce: { value: "dotBounce 0.6s ease-in-out infinite" },
  barPulse: { value: "barPulse 0.6s ease-in-out infinite" },
  textTypings: { value: "textTypings 5s steps(20) infinite" },
  blinkCursor: { value: "blinkCursor 0.7s steps(1, end) infinite" },
};
