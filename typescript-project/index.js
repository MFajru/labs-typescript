"use strict";
// typescript declare variable type
const str = "10";
let a = 10;
a = 1000;
// typescript declare variable inferred
let x = "world"; // x is a string
// typescript array
const names = ["Budi", "Ibu Budi"];
console.log(names);
names.forEach((name) => {
    console.log(name);
});
const myConst = [10, "10"];
const newConst = [20, "budi", "bapak budi", 30];
const newerConst = [20, "ok"];
// Assign the object into variable
const newObj = {
    name: "Budi",
    age: 20,
};
console.log(newObj);
// Functions
// void function, cannot return value
function printLivingBeing(input, times) {
    for (let i = 0; i < times; i++) {
        console.log(input.name);
    }
}
printLivingBeing({
    name: "Budi",
    age: 20,
}, 5);
// return function
function mull() {
    return 0;
}
// or it can be like this
function functStr() {
    return "world";
}
const myFunction = (input1) => {
    console.log("tes");
    return 5;
};
myFunction(2);
function add(a, b) {
    return a + b;
}
add(4, 2);
add("4", "2");
const cat = {
    isMammal: true,
    numOfLegs: 4,
};
const albatros = {
    canFly: true,
    furColor: "red",
    isMammal: false,
    numOfLegs: 2,
};
// enumerations
var Agreement;
(function (Agreement) {
    Agreement[Agreement["No"] = 0] = "No";
    Agreement[Agreement["Yes"] = 1] = "Yes";
    Agreement[Agreement["Half"] = 2] = "Half";
})(Agreement || (Agreement = {}));
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
})(Direction || (Direction = {}));
const agreement = Agreement.Yes;
const half = Agreement.Half;
const direction = Direction.Up;
console.log(agreement, half, direction);
