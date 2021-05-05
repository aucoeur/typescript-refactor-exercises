

// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, ape

// Define an enum for monster type

enum MonsterType {
	Ape,
	Flying,
	Lizard
}

// Add the types here and use the enum for type.

function rampage(name: string, type: MonsterType, power: number, city: string) {
	let action: string;

	switch(type) {
		case MonsterType.Flying:
			action = 'flying'
			break
		case MonsterType.Lizard:
			action = 'crawling'
			break
		case MonsterType.Ape:
			action = 'swinging'
			break
		default:
			action = 'rampaging'

	}
	let result = `${name} ${action} over ${city} causing mayhem`
	return result
}

// Use the enum here when calling the rampage function

console.log(rampage('Gojira', MonsterType.Lizard, 90, 'tokyo'))
console.log(rampage('Mothra', MonsterType.Flying, 40, 'Fresno'))
console.log(rampage('Kong', MonsterType.Ape, 88, 'New York'))

export {
	MonsterType,
	rampage
}
