// Animation utility functions and constants
export const ANIMATION_DURATION = {
  fast: 0.3,
  medium: 0.5,
  slow: 0.8,
  extraSlow: 1.2,
}

export const ANIMATION_EASE = {
  default: [0.25, 0.1, 0.25, 1], // cubic-bezier
  easeOut: [0, 0, 0.2, 1],
  easeIn: [0.4, 0, 1, 1],
  easeInOut: [0.4, 0, 0.2, 1],
  appleEase: [0.42, 0, 0.58, 1], // Apple's preferred easing
}

// Helper to generate CSS cubic-bezier string
export const getCubicBezier = (ease: number[]) => `cubic-bezier(${ease.join(", ")})`
