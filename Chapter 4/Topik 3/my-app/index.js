// Core Module
const o = require('os');
console.log('Free Memory: ' + o.freemem() + ' bytes');

// Third Party Modules
const fs = require('fs');
const text = fs.readFileSync('./text.txt', 'utf-8');
console.log(text);
fs.writeFileSync('./textWrite.txt', 'YNTKTS');

// Local Module
const luasSegitiga = require('./segitiga');
console.log('Luas Segitiga: ' + luasSegitiga(10, 5));

// Make JSON File
const createPerson = function (person) {
    fs.writeFileSync('./person.json', JSON.stringify(person));
    return person;
};
const raffi = createPerson({
    name: 'Raffi',
    age: 21,
    address: 'Karawang'
});
const person = JSON.parse(fs.readFileSync('./person.json', 'utf-8'));
console.log(person);