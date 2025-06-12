export abstract class Offer {
  abstract apply(quantity: number): number;
}

export class BuyOneGetOneFree extends Offer {
  apply(quantity: number): number {
    return Math.ceil(quantity / 2);
  }
}

export class ThreeForTwo extends Offer {
  apply(quantity: number): number {
    return Math.ceil((quantity * 2) / 3);
  }
}
