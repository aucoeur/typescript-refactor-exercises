
// Snack type defines a tuple type. Use for
// all the tuples below.
// Set the other types.

type Snack = [string, number]

const tsnack1: Snack = ['Cookies', 142]
const tsnack2: Snack = ['Avocado', 234]
const tsnack3: Snack = ['Banana', 105]

function displayTypeNutrition(food: Snack): void {
  console.log(`Item: ${food[0]} Calories: ${food[1]}`)
}

console.log(displayTypeNutrition(tsnack1))
console.log(displayTypeNutrition(tsnack2))
console.log(displayTypeNutrition(tsnack3))

// Compile the code and check what type script says:
// tsc example-6.ts

export {
  displayTypeNutrition
}
