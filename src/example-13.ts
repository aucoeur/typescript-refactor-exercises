
// Functions have types add the types for the
// functions returned below:

// This function returns a function that returns a number (closure)

function count(): () => number {
	let n = 0
	return () => {
		// console.log(n)
		return n += 1
	}
}

const c = count()
console.log(c())
console.log(c())

const d = count()
console.log(d())
console.log(d())

// This function takes an array and returns an item from
// the array

function next(arr: any[]): () => any {
	let i = -1
	return () => {
		i += 1
		i = i === arr.length ? 0 : i
		return arr[i]
	}
}

// This function returns a function that generates a
// die roll.

function dice(sides: number): (n: number) => number {
	return (n: number): number => {
		return Math.floor(Math.random() * sides) * n
	}
}


export {
	count,
	next,
	dice
}
