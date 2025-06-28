export const variantOptions = [
  'neutral',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
] as const;

export type Variant = (typeof variantOptions)[number];
