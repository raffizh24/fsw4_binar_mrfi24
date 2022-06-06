// Var declaration in advance
var harga;
harga = 1000;

// Var declaration in assigment
var harga = 1000;

/* Scope */
var diskon = 500 // Global Variable
if(true){
    var diskon = 300 // Global scope
}
console.log(diskon);
// Output : 300
// Because diskon is global scope

// Sebelum ada ES6, solusi membuat function scope
var diskon = 500; //Global Scope
function diskonScope(){
    var diskon = 300; //Local Scope
    console.log(diskon);
}
diskonScope();
console.log(diskon);
/* End Scope */

/* Reassigment and Redeclared */
var Name; //Declare
console.log(Name);

name = "Bot";
console.log(name);

var name = "Bot Raffi";
console.log(name);
/* End Reassigment and Redeclared */

/* Hoisting */
Nama = "Mentor Reza"
var Nama;
console.log(Nama);
/* 
Background Execution
var Nama;
Nama = "Mentor Reza";
console.log(Nama);
*/
/* End Hoisting */


