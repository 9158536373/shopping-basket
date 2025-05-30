export const applyBogof = (count: number): number =>
  Math.floor(count / 2) + (count % 2);

export const applyThreeForTwo = (count: number): number =>
  Math.floor(count / 3) * 2 + (count % 3);