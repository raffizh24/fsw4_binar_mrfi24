console.log("<-- Assigment Operator -->");

// Declare x variabel
let x = 10;

// Additional Assigment
x += 5;
console.log('x :',x);

// Object
let person = { name: 'Raffi', age: 21, job: 'Student'};

// Array
let fruits = ['Mango', 'Apple', 'Banana'];

// Assigment to Object
person.name = 'Muhammad Raffi';
console.log('Person :', person);

// Assigment to Array
fruits[0] = 'Orange';
console.log('Fruits :',fruits);

// Destructuring Assigment
let {name, job} = person;
let [, secondFruit] = fruits;

console.log('Name :', name);
console.log('Job :', job);
// console.log('First Fruits :',firstFruit);
console.log('Second Fruits :', secondFruit);