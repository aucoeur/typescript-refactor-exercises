
class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	describe(): string {
		return `${this.name} is ${this.age}`
	}
}

// Define a Course. A Course a title: string and a units: number

class Course {
	title: string
	units: number

	constructor(title: string, units: number) {
		this.title = title
		this.units = units
	}

	describe(): string {
		return `${this.title} is worth ${this.units} units`
	}
}

// Define a Student class. Student extends Person. A Student
// has an array of Courses and a cohort which is: junior or senior
// enum Cohort {
// 	junior,
// 	senior
// }
// Add enroll method that takes a Course as parameter and adds
// this to the course array

class Student extends Person {
	name: string
	age: number
	cohort: string
	courses: Course[]

	constructor(name: string, age: number, cohort?: string, courses = []) {
		super(name, age);
		this.cohort = cohort
		this.courses = courses
	}

	enroll(course: Course): string {
		this.courses.push(course)
		return course.title
	}
}

const joe = new Person('Joe', 33)
const freshmanJoe = new Student(joe.name, joe.age, 'freshman')

const cs2 = new Course('CS 2.2', 3.0)
const registerJoe = freshmanJoe.enroll(cs2)
console.log(freshmanJoe.describe())
console.log(registerJoe)


export default Person
export {
	Course,
	Student
}
