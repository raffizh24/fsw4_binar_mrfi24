const bumi = 'Bulat';
const aku = 'Raffi';
const pi = 3.14;
const WARNA_MERAH = '#F00';
const WARNA_BIRU = '#00F';
const WARNA_HIJAU = '#0F0';

console.log("<-- Const Variabel JS -->");
console.log(bumi);
console.log(aku);
console.log(pi);

const warnaBaju = WARNA_BIRU;
console.log(warnaBaju);

/* Start Scope */
const dskn = 500; //Global Scope
if(true){
    // Tanda awal scope
    const dskn = 300;
    console.log(dskn);
} //Tanda akhir scope
console.log(dskn);
/* End Scope */

/* Reassigment and Redeclared */
// bumi = 'Datar'; // Const can't be reassigment
// const bumi = 'Datar'; // Const can't be redeclared
/* End Reassigment and Redeclared */

/* Hoisting */
// const namo;
// namo = 'Reza';
// console.log(namo); //Output : Error
/* End Hoisting */
