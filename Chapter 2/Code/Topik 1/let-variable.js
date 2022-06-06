/* Make direct variable */
let pesan = 'Hello Word';
console.log(pesan);

/* Make many variable */
let jeneng = 'Raffi', umur = 21, jenisKelamin = 'Laki=laki';
console.log(jeneng);
console.log(umur);
console.log(jenisKelamin);

/* Scope */
let discount = 500;
if(true){
    let discount = 300;
    console.log(discount);
}
console.log(discount);
/* End Scope */

/* Reassigment and Redeclared */
let nami;
console.log(nami);

nami = "Raffi";
console.log(nami); 
// let nama = 'Muhammad'; // Error cannot redeclared
/* End Reassigment and Redeclared */

/* Hoisting */
let message = "Hello ";
function greetings(){
    console.log(message);
    // let message = 'Hello World';
}
greetings();
/* End Hoisting */
