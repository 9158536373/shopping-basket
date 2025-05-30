import { calculateTotal } from '../src/basket';
import { ItemName } from '../src/pricing';

describe('Basket Calculator', () => {
  it('calculates total for empty basket', () => {
    expect(calculateTotal([])).toBe(0);
  });

  it('calculates apples and bananas', () => {
    const items: ItemName[] = ['Apple', 'Apple', 'Banana'];
    expect(calculateTotal(items)).toBe(35 + 35 + 20);
  });

  it('applies BOGOF for melons', () => {
    const items: ItemName[] = ['Melon', 'Melon', 'Melon'];
    expect(calculateTotal(items)).toBe(100);
  });

  it('applies 3-for-2 on limes', () => {
    const items: ItemName[] = ['Lime', 'Lime', 'Lime', 'Lime'];
    expect(calculateTotal(items)).toBe(45);
  });

  it('calculates a mixed basket', () => {
    const items: ItemName[] = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
    expect(calculateTotal(items)).toBe(35 + 20 + 50 + 30);
  });
});