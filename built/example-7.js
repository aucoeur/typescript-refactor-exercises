"use strict";
// Use the enum type to define the suit for
// a playing card.
// Below define the ace. It should have a suit
// and a value.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Suit = void 0;
var Suit;
(function (Suit) {
    Suit[Suit["Club"] = 0] = "Club";
    Suit[Suit["Diamond"] = 1] = "Diamond";
    Suit[Suit["Heart"] = 2] = "Heart";
    Suit[Suit["Spade"] = 3] = "Spade";
})(Suit || (Suit = {}));
exports.Suit = Suit;
var ace = {
    suit: Suit.Club,
    value: 1
};
