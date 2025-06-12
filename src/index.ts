import { Basket } from './models/Basket';
import { Item } from './models/Item';
import { PricingService } from './service/PricingService';

const basket = new Basket();
basket.addItem(new Item('Apple', 35));
basket.addItem(new Item('Banana', 20));
basket.addItem(new Item('Melon', 50));
basket.addItem(new Item('Melon', 50));
basket.addItem(new Item('Lime', 15));
basket.addItem(new Item('Lime', 15));
basket.addItem(new Item('Lime', 15));

const pricingService = new PricingService();
const total = pricingService.calculateTotal(basket);

console.log(` Total price: ${total}p`);
