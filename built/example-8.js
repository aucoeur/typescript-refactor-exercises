"use strict";
// This needs some types!
// Add the types and compile it!
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeKaiju = void 0;
function makeKaiju(name, type, power) {
    var description = name + " is a ";
    description += power > 50 ? "powerful " + type + " monster" : type + " monster ";
    return description;
}
exports.makeKaiju = makeKaiju;
console.log(makeKaiju('Gojira', 'lizard', 90));
console.log(makeKaiju('Mothra', 'flying', 45));
console.log(makeKaiju('Kong', 'ape', 88));
