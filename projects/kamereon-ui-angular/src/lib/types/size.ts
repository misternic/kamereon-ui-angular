export const sizeOptions = [
  'extra-small',
  'small',
  'medium',
  'large',
  'extra-large',
] as const;

export type Size = (typeof sizeOptions)[number];
