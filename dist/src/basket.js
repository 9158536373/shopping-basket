"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateTotal = void 0;
const pricing_1 = require("./pricing");
const utils_1 = require("./utils");
const calculateTotal = (items) => {
    const itemCounts = {
        Apple: 0,
        Banana: 0,
        Melon: 0,
        Lime: 0
    };
    items.forEach((item) => {
        itemCounts[item]++;
    });
    return (itemCounts.Apple * pricing_1.PRICES.Apple +
        itemCounts.Banana * pricing_1.PRICES.Banana +
        (0, utils_1.applyBogof)(itemCounts.Melon) * pricing_1.PRICES.Melon +
        (0, utils_1.applyThreeForTwo)(itemCounts.Lime) * pricing_1.PRICES.Lime);
};
exports.calculateTotal = calculateTotal;
