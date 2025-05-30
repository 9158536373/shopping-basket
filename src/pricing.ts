
export const PRICES = {
  Apple: 35,
  Banana: 20,
  Melon: 50,
  Lime: 15
} as const;

export type ItemName = keyof typeof PRICES;