const stokFruits = ['Mango', 'Orange', 'Apple'];
const orang = {name: 'Raffi', age: 21, ktpNumber: 12345678}

const isMyFavouriteFruitInStok = 2 in stokFruits; // Cek Index Array
console.log(isMyFavouriteFruitInStok);

const doesPersonHaveKTP = 'ktpNumber' in orang;
console.log(orang.name, doesPersonHaveKTP ? 'Has KTP' : 'Does not have KTP');

console.log(orang instanceof Date);

const date = new Date();
console.log(date instanceof Date);