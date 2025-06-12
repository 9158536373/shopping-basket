
import { Basket } from '../models/Basket';
import { Item } from '../models/Item';
import { Offer, BuyOneGetOneFree, ThreeForTwo } from '../models/Offer';
export class PricingService {
  private priceList: Map<string, number> = new Map([
    ['Apple', 35],
    ['Banana', 20],
    ['Melon', 50],
    ['Lime', 15]
  ]);

  private offers: Map<string, Offer> = new Map([
    ['Melon', new BuyOneGetOneFree()],
    ['Lime', new ThreeForTwo()]
  ]);

  calculateTotal(basket: Basket): number {
    let total = 0;
    for (const [itemName, quantity] of basket.getItems()) {
      const price = this.priceList.get(itemName);
      const offer = this.offers.get(itemName);
      if (price !== undefined) {
        const finalQuantity = offer ? offer.apply(quantity) : quantity;
        total += price * finalQuantity;
      }
    }
    return total;
  }
}
