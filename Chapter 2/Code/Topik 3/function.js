const x = 1;
const y = 2;
const z = 3;

function sayIfOdd(number) {
    if (number % 2 !== 0) {
        console.log(number,"Itu ganjil");
    }
}

sayIfOdd(x);
sayIfOdd(y);
sayIfOdd(z);

// Function dengan keyword
function computeSquareArea(size) {
    return size * size;
}
const squareAreaOf4 = computeSquareArea(4);
console.log(squareAreaOf4);

// Function dengan anonim
const calculateSquareArea = function(size) { // Function tanpa nama 
    return size * size;
}
const squareAreaOf5 = calculateSquareArea(5);
console.log(squareAreaOf5);

// Arrow Function
const hitungSquareArea = (size) => {
    return size * size;
}
const squareAreaOf6 = hitungSquareArea(6);
console.log(squareAreaOf6);