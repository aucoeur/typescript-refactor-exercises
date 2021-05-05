"use strict";
// This example has some tuples.
// These are arrays with mixed types.
// Define a tuple type for each.
// Add the types for the variables and function
Object.defineProperty(exports, "__esModule", { value: true });
exports.displayNutrition = void 0;
var snack1 = ['Cookies', 142];
var snack2 = ['Avocado', 234];
var snack3 = ['Banana', 105];
function displayNutrition(food) {
    console.log("Item: " + food[0] + " Calories: " + food[1]);
}
exports.displayNutrition = displayNutrition;
console.log(displayNutrition(snack1));
console.log(displayNutrition(snack2));
console.log(displayNutrition(snack3));
