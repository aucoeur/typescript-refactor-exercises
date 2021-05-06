
// You are making a mapping application.

// Write an enum that defines the directions:
// North, South, East, West

enum Direction {
	N = "North",
	E = "East",
	S = "South",
	W = "West"
}

// Should having a heading property type Direction

class MapPosition {
	direction: Direction

	constructor(direction: Direction) {
		this.direction = direction
	}

	// takes a new Direction as an argument
	move(direction: Direction) {
		this.direction = direction
		// switch(direction) {
		// 	case Direction.E:
		// 		console.log(`Changed direction to ${Direction.E}`)

		// 		break
		// 	case Direction.W:
		// 		console.log(`Changed direction to ${Direction.W}`)
		// 		break
		// 	case Direction.N:
		// 		console.log(`Changed direction to ${Direction.N}`)
		// 		break
		// 	case Direction.S:
		// 		console.log(`Changed direction to ${Direction.S}`)
		// 		break
		// }
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return `you are heading in ${this.direction}`
	}
}

console.log(new MapPosition(Direction.N).describe())
// Might output:
// "You are heading north"


export default MapPosition
