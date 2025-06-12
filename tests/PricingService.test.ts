import { Basket } from '../src/models/Basket';
import { Item } from '../src/models/Item';
import { PricingService } from '../src/service/PricingService';

describe('PricingService', () => {
  let pricingService: PricingService;
  let basket: Basket;

  beforeEach(() => {
    pricingService = new PricingService();
    basket = new Basket();
  });

  test('calculates total for single items', () => {
    basket.addItem(new Item('Apple', 35));
    basket.addItem(new Item('Banana', 20));
    expect(pricingService.calculateTotal(basket)).toBe(55);
  });

  test('applies Buy One Get One Free offer for Melons', () => {
    basket.addItem(new Item('Melon', 50));
    basket.addItem(new Item('Melon', 50));
    expect(pricingService.calculateTotal(basket)).toBe(50);
  });

  test('applies Three For Two offer for Limes', () => {
    basket.addItem(new Item('Lime', 15));
    basket.addItem(new Item('Lime', 15));
    basket.addItem(new Item('Lime', 15));
    expect(pricingService.calculateTotal(basket)).toBe(30);
  });
});
