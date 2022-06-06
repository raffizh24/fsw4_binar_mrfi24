function no1(str) {
  str = str.replace().toLowerCase(); 
  return (str == str.split('').reverse().join(''));
}
function no2(inputArr) {
  let result = [];

  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.Push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next))
     }
   }
 }

 permute(inputArr)

 return result;
}

console.log(no1("Kasur ini rusak"));
console.log(no1("Ibu Ratna antar ubi"));
console.log(no1("Kasur Nanaban rusak"));
// console.log(no2(5,9));
// console.log(no2(3,8));
// console.log(no2(4,5));
console.log([1,2,4]);
