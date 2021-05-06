"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = exports.Course = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return this.name + " is " + this.age;
    };
    return Person;
}());
// Define a Course. A Course a title: string and a units: number
var Course = /** @class */ (function () {
    function Course(title, units) {
        this.title = title;
        this.units = units;
    }
    Course.prototype.describe = function () {
        return this.title + " is worth " + this.units + " units";
    };
    return Course;
}());
exports.Course = Course;
// Define a Student class. Student extends Person. A Student
// has an array of Courses and a cohort which is: junior or senior
// enum Cohort {
// 	junior,
// 	senior
// }
// Add enroll method that takes a Course as parameter and adds
// this to the course array
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, cohort, courses) {
        if (courses === void 0) { courses = []; }
        var _this = _super.call(this, name, age) || this;
        _this.cohort = cohort;
        _this.courses = courses;
        return _this;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push(course);
        return course.title;
    };
    return Student;
}(Person));
exports.Student = Student;
var joe = new Person('Joe', 33);
var freshmanJoe = new Student(joe.name, joe.age, 'freshman');
var cs2 = new Course('CS 2.2', 3.0);
var registerJoe = freshmanJoe.enroll(cs2);
console.log(freshmanJoe.describe());
console.log(registerJoe);
exports["default"] = Person;
