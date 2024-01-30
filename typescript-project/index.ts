// typescript declare variable type
const str: string = "10";
let num: number = 10;
num = 1000;

// typescript declare variable inferred
let x = "world"; // x is a string

// typescript array
const names: string[] = ["Budi", "Ibu Budi"];
console.log(names);
names.forEach((name) => {
  console.log(name);
});

// Tuple
type MyTupple = [number, string]; // tuple that has data with type number and string
const myConst: MyTupple = [10, "10"];

type newTupple = (string | number)[]; // tuple or array that consist of string or number
const newConst: newTupple = [20, "budi", "bapak budi", 30];

type newerTuple = [number, string, string?]; // make the last data of the tuple optional. Optional property always has question mark
const newerConst: newerTuple = [20, "ok"];

// Object
// Make the object
type LivingObjects = {
  name: string;
  age: number;
  isHuman?: boolean; //Cannot assign default value in object property
};
// Assign the object into variable
const newObj: LivingObjects = {
  name: "Budi",
  age: 20,
};
console.log(newObj);

// Functions
// void function, cannot return value
function printLivingBeing(input: LivingObjects, times: number): void {
  for (let i = 0; i < times; i++) {
    console.log(input.name);
  }
}
printLivingBeing(
  {
    name: "Budi",
    age: 20,
  },
  5
);

// return function
function mull() {
  return 0;
}
// or it can be like this
function functStr(): string {
  return "world";
}

// make type function. With this thing, you can return something even the function type is void
type MyFunction = (input1: number) => void; // function parameter can be optional by adding ? in the parameter (e.g. input1?: string)
const myFunction: MyFunction = (input1) => {
  console.log("tes");
  return 5;
};
myFunction(2);

// overloading function
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
  return a + b;
}
add(4, 2);
add("4", "2");
// add(4, "2");
// No overload matches this call.
//   Overload 1 of 2, '(a: string, b: string): string', gave the following error.
//     Argument of type 'number' is not assignable to parameter of type 'string'.
//   Overload 2 of 2, '(a: number, b: number): number', gave the following error.
//     Argument of type 'string' is not assignable to parameter of type 'number'.

// Interfaces
// interface is used to define an object-like type.
// interface name always start with "I"
interface IAnimal {
  numOfLegs: number;
  isMammal: boolean;
}

// extends an interface
interface IAvian extends IAnimal {
  furColor: string;
  canFly: boolean;
}

const cat: IAnimal = {
  isMammal: true,
  numOfLegs: 4,
};

const albatros: IAvian = {
  canFly: true,
  furColor: "red",
  isMammal: false,
  numOfLegs: 2,
};

// alternative to interfaces, but you cannot use extends keyword with this
type Info = {
  detail: string;
  createdAt: Date;
  updatedAt: Date;
};
// instead, to extend, use this
type DetailedInfo = Info & {
  superDetail: string;
};

// " | " = union     " & " = intersection

// make type or interface with method
type User = {
  name: string;
  age: number;
  getInfo: (all?: boolean) => string; // method of type
  renewInfo: (information: string) => void; // method of type
};

// enumerations. Enumerations are similar with union of string
enum Agreement {
  No,
  Yes,
  Half,
}
enum Direction {
  Up,
  Down,
}
const agreement = Agreement.Yes;
const half = Agreement.Half;
const direction = Direction.Up;
console.log(agreement, half, direction);

// unknown is similar to any but we cannot assign unknown before we check the value is correct
let a: unknown = "Hello world!";
let b: unknown = 42;
let c: unknown = false;

let aString: string = a as string; // declare the unknown as a string
let bNumber: number = b as number;
let cBoolean: boolean = c as boolean;

console.log(aString, bNumber, cBoolean);

// combine unknown with interface
interface IPerson {
  firstName: string;
  lastName: string;
}

let userInput: unknown = {
  firstName: "Acong",
  lastName: "Suherman",
};

function isPerson(input: unknown): input is IPerson {
  const inputPerson = input as IPerson;
  if (!("firstName" in inputPerson) || !("lastName" in inputPerson)) {
    return false;
  }
  if (
    typeof inputPerson.firstName !== "string" ||
    typeof inputPerson.lastName !== "string"
  ) {
    return false;
  }
  return true;
}

console.log(isPerson(userInput));
