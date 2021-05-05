"use strict";
// Snack type defines a tuple type. Use for
// all the tuples below.
// Set the other types.
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayTypeNutrition = void 0;
var tsnack1 = ['Cookies', 142];
var tsnack2 = ['Avocado', 234];
var tsnack3 = ['Banana', 105];
function displayTypeNutrition(food) {
    console.log("Item: " + food[0] + " Calories: " + food[1]);
}
exports.displayTypeNutrition = displayTypeNutrition;
console.log(displayTypeNutrition(tsnack1));
console.log(displayTypeNutrition(tsnack2));
console.log(displayTypeNutrition(tsnack3));
