import { PRICES, ItemName } from './pricing';
import { applyBogof, applyThreeForTwo } from './utils';

export const calculateTotal = (items: ItemName[]): number => {
  const itemCounts: Record<ItemName, number> = {
    Apple: 0,
    Banana: 0,
    Melon: 0,
    Lime: 0
  };

  items.forEach((item) => {
    itemCounts[item]++;
  });

  return (
    itemCounts.Apple * PRICES.Apple +
    itemCounts.Banana * PRICES.Banana +
    applyBogof(itemCounts.Melon) * PRICES.Melon +
    applyThreeForTwo(itemCounts.Lime) * PRICES.Lime
  );
};