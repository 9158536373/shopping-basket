import { Item } from './Item';

export class Basket {
  private items: Map<string, number> = new Map();

  addItem(item: Item): void {
    this.items.set(item.name, (this.items.get(item.name) || 0) + 1);
  }

  getItems(): Map<string, number> {
    return this.items;
  }
}
