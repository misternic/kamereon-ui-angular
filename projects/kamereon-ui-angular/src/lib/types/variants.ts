export const variantOptions = [
  'default',
  'neutral',
  'primary',
  'secondary',
  'accent',
  'info',
  'success',
  'warning',
  'error',
] as const;

export type Variant = (typeof variantOptions)[number];
