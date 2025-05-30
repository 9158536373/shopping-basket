"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyThreeForTwo = exports.applyBogof = void 0;
const applyBogof = (count) => Math.floor(count / 2) + (count % 2);
exports.applyBogof = applyBogof;
const applyThreeForTwo = (count) => Math.floor(count / 3) * 2 + (count % 3);
exports.applyThreeForTwo = applyThreeForTwo;
