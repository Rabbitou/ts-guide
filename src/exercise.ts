const t: string = 'Hello, TypeScript!';
console.log(t);


const temperature:number = 20;
const welcomeMessage: string = "Welcome to TypeScript!";
const isLoggedIn: boolean = true;

const colors: string[] = ["#85EFDA", "#45C6B9", "#AD6597"];
const userInfo: [string, number] = ['userName', 20];

enum Season {
    'Spring',
    'Summer',
    'Autumn',
    'Winter'
};

let s: Season = Season.Summer;
const logValue = (value: any) => {
    console.log('logValue: ', value);
}

logValue('test');
logValue(5);

const noReturn = (): void => {
    console.log('noReturn','No return');
}

noReturn();

const greet = (greeting: string): string => {
    return greeting;
}

const multiply = (x: number, y: number): number => {
    return x * y;
}

const createEmail = (to: string, subject ?: string): [string, string] => {
    subject = subject || 'No Subject';
    return [to, subject];
}

const add = (x: number, y: number, z?: number): number => {
    return z ? x + y + z : x + y;
}

const concatenateStrings = (...strings: string[]): string => {
    return strings.reduce((accumulator, current, _index) => accumulator + current, '');
}

const maxNumber = (...numbers: number[]): number => {
    return numbers.reduce((acc, curr) => acc > curr ? acc : curr, 0);
}

console.log('maxNumber : ',maxNumber(2,9,8,7,10,3,20,-3));

interface Vehicule {
    make: string;
    model: string;
    year?: number;
}

const createVehicule = (vehicule: Vehicule): Vehicule => {
    return vehicule;
}

interface Person {
    firstName: string;
    lastName: string;
    age?: number;
    email?: string;
}

const updatePerson = (person: Person, newPerson: {firstName: string, lastName: string, age: number, email: string}): Person => {
    if (newPerson.firstName)
        person.firstName = newPerson.firstName;
    if (newPerson.lastName)
        person.lastName = newPerson.lastName;
    if (newPerson.age)
        person.age = newPerson.age;
    if (newPerson.email)
        person.email = newPerson.email;

    return person;
}

interface Circle {
    readonly centerX: number;
    readonly centerY: number;
    readonly radius: number;
}

const moveCircle = (circle: Circle, x: number, y: number): Circle => {
    // circle.centerX = x;
    // circle.centerY = y;
    const newCircle: Circle = {
        centerX: x,
        centerY: y,
        radius: circle.radius
    } 

    return newCircle;
}

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Dog extends Animal {
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} jumped ${distanceInMeters}m.`);
        
    }
}

const newDog: Dog = new Dog('Rex');
newDog.move(15);

class PersonClass {
    private name: string;
    constructor(name: string) { this.name = name; }
    public getName():string {
        return this.name;
    }
}

const newPersonClass = new PersonClass('Jhon');
// console.log(newPersonClass.name); // Error : Property 'name' is private and only accessible within class 'Person'.
console.log(newPersonClass.getName());

function identity<T>(arg: T): string {
    return typeof arg;
}

console.log(identity('te'));
console.log(identity(62));
console.log(identity(false));

interface GenericIdentityFn<T> {
    (arg: T): T;
}
// ---------------------------------------------------------

enum Res {
    No,
    Yes
}

console.log(Res.No,Res.Yes);

enum ResultMessage {
    Success = "SUCCESS",
    Failure = "FAILURE"
}

function padLeft(value: string, padding: string | number) {
    console.log(value, padding);
}

padLeft('value','set');
padLeft('value',51);

interface BusinessPartner {
    name: string;
    credit: number;
}

interface Contact {
    email: string;
    phone: string;
}

type Customer = BusinessPartner & Contact;

const objCustomer: Customer = {
    name: 'Jhon',
    credit: 5000,
    email: "email@gmail.com",
    phone: "0612345678"
}

const logCustomer = (partner:BusinessPartner,contact:Contact) => {
    console.log(partner,contact);
}

logCustomer(objCustomer,objCustomer);

import { capitalize } from "./stringUtils";

console.log(capitalize('capitalize'));

import greetImported, { departing } from "./greeter";

greetImported('yo');
departing('yo');

// namespace Calculator {
//     export class SimpleSum implements BasicCalculator {
//       calculate(x:number, y:number) {
//         return x + y;
//       }
//     }
//   }
// Decorators --------------------------------------------------------------------------------------
function logged(target: Function) {
        const original = target;
        function construct(constructor, args) {
            console.log(`Creating a new instance of ${original.name}`);
            return new constructor(...args);
        }
        const newConstructor: any = function (...args) {
            return construct(original, args);
        };
        newConstructor.prototype = original.prototype;

        return newConstructor;
}

@logged
class Greeter {
    constructor() {
        console.log('Greeter class created !')
    }
}

const newGreeter = new Greeter();

function format(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]) {
        const result = originalMethod.apply(this, args);
        const formattedResult = result.toUpperCase();
        return formattedResult;
    };

    return descriptor;
}

class MyClass {
    @format
    greet(name: string): string {
        return `Hello, ${name}!`;
    }
}

// Usage example
const instance = new MyClass();
const greeting = instance.greet("John");
console.log(greeting); // Output: "HELLO, JOHN!"
// ---------------------------------------------------------------------------------------------------------

interface Todo {
    title: string;
    description: string;
}

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>): Todo {
    return { ...todo, ...fieldsToUpdate };
}

const todo1: Todo = {
    title: "Delete inactive users",
    description: "..."
};

const updatedTodo = updateTodo(todo1, { description: 'Updated description' });
console.log(updatedTodo);

interface User {
    name: string;
    age: number;
    email: string;
}

const userReadOnly: Readonly<User> = {
    name: "Jhon",
    age: 20,
    email: "Jhon@gmail.com"
}

// userReadOnly.name = 'H' // Cannot assign to 'name' because it is a read-only property.