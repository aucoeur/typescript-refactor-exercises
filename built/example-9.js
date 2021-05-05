"use strict";
// Currently the function below uses a string for
// for the type of monster. Better to use an enum
// since monsters are only: lizard, flying, ape
Object.defineProperty(exports, "__esModule", { value: true });
exports.rampage = exports.MonsterType = void 0;
// Define an enum for monster type
var MonsterType;
(function (MonsterType) {
    MonsterType[MonsterType["Ape"] = 0] = "Ape";
    MonsterType[MonsterType["Flying"] = 1] = "Flying";
    MonsterType[MonsterType["Lizard"] = 2] = "Lizard";
})(MonsterType || (MonsterType = {}));
exports.MonsterType = MonsterType;
// Add the types here and use the enum for type.
function rampage(name, type, power, city) {
    var action;
    switch (type) {
        case MonsterType.Flying:
            action = 'flying';
            break;
        case MonsterType.Lizard:
            action = 'crawling';
            break;
        case MonsterType.Ape:
            action = 'swinging';
            break;
        default:
            action = 'rampaging';
    }
    var result = name + " " + action + " over " + city + " causing mayhem";
    return result;
}
exports.rampage = rampage;
// Use the enum here when calling the rampage function
console.log(rampage('Gojira', MonsterType.Lizard, 90, 'tokyo'));
console.log(rampage('Mothra', MonsterType.Flying, 40, 'Fresno'));
console.log(rampage('Kong', MonsterType.Ape, 88, 'New York'));
