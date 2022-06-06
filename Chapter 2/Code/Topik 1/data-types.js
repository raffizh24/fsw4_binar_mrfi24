console.log('<-- Data Types -->');

/* String Data Type */
const asma = "Muhammad Raff'i";
let address = 'Karawang';

console.log(asma);
console.log(address);
console.log('Breeze');
/* End String Data Type */

/* Number Data Type */
const x = 10;
const y = 100;
let z = 1.1;

console.log(x + y + z);
/* End Number Data Type */

/* Boolean Data Type */
const isRaining = false;
const isExhausted = true;
let shoudRunFromReality = true;

console.log(isRaining);
/* End Boolean Data Type */

/* Null Data Type */
let seorangDiHatiku = null;
console.log(seorangDiHatiku);
seorangDiHatiku = 'Kamu';
console.log(seorangDiHatiku);
/* End Null Data Type */

/* Undefined Data Type */
let tujuanHidupku;
tujuanHidupku= undefined;
console.log(tujuanHidupku);
/* End Undefined Data Type */

/* Array Data Type */
const catNames = ['Oyen', 'Bob'];
console.log(catNames[0]);
console.log(catNames[1]);

let favouriteNumbers = [1, 2, 10];
favouriteNumbers[0] = 100;
console.log(favouriteNumbers);
/* End Array Data Type */

/* Object Data Type */
const person = {
    name: "Raffi",
    age: 24,
    isMarried: false,
    pets: [
        {
            name: "Oyen",
            speciesName: "Cat",
        },
        {
            name: "Bob",
            speciesName: "Cat",
        },
    ],
};
const people = [
    {
        name: "Reza",
        age: 24,
        isMarried: false,
        pets: [
            {
                name: "Oyen",
                speciesName: "Cat",
            },
            {
                name: "Bob",
                speciesName: "Cat",
            },
        ],
    },
    {
        name: "Raffi",
        age: 24,
        isMarried: false,
        pets: [
            {
                name: "Haikal",
                speciesName: "Cat",
            },
            {
                name: "Lailla",
                speciesName: "Cat",
            },
        ],
    },
];

console.log(person.name);
console.log(person['age']);
console.log(person.pets[1].name);

console.log(people[1].pets[0].name);
console.log(people[1]['age']);

/* End Object Data Type */