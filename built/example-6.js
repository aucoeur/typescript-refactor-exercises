// Snack type defines a tuple type. Use for
// all the tuples below.
// Set the other types.
var tsnack1 = ['Cookies', 142];
var tsnack2 = ['Avocado', 234];
var tsnack3 = ['Banana', 105];
function displayTypeNutrition(food) {
    console.log("Item: " + food[0] + " Calories: " + food[1]);
}
console.log(displayTypeNutrition(snack1));
console.log(displayTypeNutrition(snack2));
console.log(displayTypeNutrition(snack3));
// Compile the code and check what type script says:
// tsc example-6.ts
