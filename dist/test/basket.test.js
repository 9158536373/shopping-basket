"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const basket_1 = require("../src/basket");
describe('Basket Calculator', () => {
    it('calculates total for empty basket', () => {
        expect((0, basket_1.calculateTotal)([])).toBe(0);
    });
    it('calculates apples and bananas', () => {
        const items = ['Apple', 'Apple', 'Banana'];
        expect((0, basket_1.calculateTotal)(items)).toBe(35 + 35 + 20);
    });
    it('applies BOGOF for melons', () => {
        const items = ['Melon', 'Melon', 'Melon'];
        expect((0, basket_1.calculateTotal)(items)).toBe(100);
    });
    it('applies 3-for-2 on limes', () => {
        const items = ['Lime', 'Lime', 'Lime', 'Lime'];
        expect((0, basket_1.calculateTotal)(items)).toBe(45);
    });
    it('calculates a mixed basket', () => {
        const items = ['Apple', 'Banana', 'Melon', 'Melon', 'Lime', 'Lime', 'Lime'];
        expect((0, basket_1.calculateTotal)(items)).toBe(35 + 20 + 50 + 30);
    });
});
