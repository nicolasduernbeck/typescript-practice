// TS - Practice

// Simple Types:
const bool: boolean = true;
const num: number = 1;
const str: string = 'abc';

// There is explicit and implicit typing
//Explicit:
const explicitTyping: string = 'I am explicit typed!';
const implicitTyping = "I am implicit typed (TS 'guesses' the type)";

//Typescript can not always properly infer types

const json = JSON.parse('55');

// The type "any" disables type checking

let anyExample: any = 'str';
anyExample = 1;

// The type never throws an error whenever is is defined
// const neverExample: never = 'str'; Not valid!

// Array Types

const strArr: string[] = ['a', 'b', 'c'];
const readOnlyExample: readonly number[] = [1, 2, 3]; // Not changable
const twoDimensionalArray: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

// Tuples
let tupleExample: [number, number, boolean];
tupleExample = [1, 1, true];

// Object types
const objExample: { x: number; y?: number; z: number } = { x: 1, z: 1 };
const secondObjExample = { a: 'a' };
// secondObjExample.a = 1; Not valid - TypeScript does automatically infer the types of an Object

// Enums
enum Keys {
  Spacebar = 32, // Default 0
  Enter = 13, // Default 1
}
console.log(Keys.Spacebar); //Prints 32
console.log(Keys.Enter); // Prints 13

// Types and interfaces (Used to describe types and objects)
type CarYear = number;
type CarType = string;
type Car = {
  year: CarYear;
  type: CarType;
};

const car: Car = { type: 'Renault', year: 2022 };

interface Coords {
  x: number;
  y: number;
}

const coords: Coords = { y: 1, x: 1 };

interface AdvancedCoords extends Coords {
  z: number;
}

const advancedCoords: AdvancedCoords = { x: 1, y: 1, z: 1 };

// Union Types (OR)

let unionExample: string | number = 1; // unionExample can be of type number or of the type string
unionExample = 'a';

// Functions

const sayHello = (name: string): string => {
  return `Hello ${name}`;
};

function noReturnValue(a: number, b: number): void {
  console.log(`The sum is: ${a + b}`);
}

const optionalParameterExample = (a: number, b?: number): void => {
  if (b) {
    console.log('There is a value for b!');
  }
};

// Type Casting
let castingExample: unknown = 1;
(castingExample as string).length;
(<string>castingExample).length;

// Classes
class Person {
  name: string;
  private age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  public isOldEnough(): boolean {
    return this.age >= 18;
  }
}

const person = new Person('Peter', 20);
console.log(person.isOldEnough());

// Generics

function createPair<S, T>(a: S, b: T): [S, T] {
  return [a, b];
}

type Wrapped<T = string> = { val: T }; //string is the defualt value for the generic

const genericsExample: Wrapped<string> = { val: 'a' };
