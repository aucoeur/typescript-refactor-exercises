
// You are making a mapping application. 

// Write an enum that defines the directions: 
// North, South, East, West

enum Direction {
	
}

// Should having a heading property type Direction

class MapPosition {

	constructor() {
		
	}

	// takes a new Direction as an argument
	move(newDirection: Direction) {
		
	}

	// Should return a string and print:
	// "you are heading <direction>"
	describe(): string {
		return ''
	}
}

console.log(new MapPosition().describe())
// Might output:
// "You are heading north"


export default MapPosition