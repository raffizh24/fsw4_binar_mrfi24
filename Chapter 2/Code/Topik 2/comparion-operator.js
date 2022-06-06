console.log("<-- Comparison Operator -->");

const a = 10;
const b = 100;

const isABiggerThanB = a > b;
console.log(isABiggerThanB); // false

// Equal
const isAEqualB = a == b;
console.log(isAEqualB); // false

// Not Equal
const isANotEqualB = a != b;
console.log(isANotEqualB); //true

// Stric Equal
// It will be false if the variables aren't same type
const isAStrictToB = a === b;
console.log(isAStrictToB) // flase

// Stict Not Equal
const isNotStrictEqualToB = a !== b;
console.log(isNotStrictEqualToB); //true

// Greater than or equal to
const isAGreaterThanB = a >= b;
console.log(isABiggerThanB); // false

// Less than
const isALessThanB = a < b;
console.log(isALessThanB); // true

// Less than or equal to 
const isALessThanEqualToB = a <= b;
console.log(isALessThanEqualToB); // true