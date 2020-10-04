let arr1 = [0, 1, 2];
let arr2 = [3, 4, 5];

console.log(arr1.concat(arr2));

//spread operator
let arr3 = [...arr1, ...arr2];
console.log(arr3);

let arr4 = [...arr2, "Moki", ...arr3];
console.log(arr4);

//rest operator: condenses multiple elements into an array
// function multiply(multiplier, ...theArgs){
//   return theArgs.map(function(element){
//     return multiplier * element;
//   });
// }

let multiply = (multiplier, ...theArgs) =>
  theArgs.map((element) => multiplier * element);

let arr5 = multiply(9, 1, 2, 3);
console.log(arr5);

//reduce
function reduce(...theArgs) {
  return theArgs.reduce(function (count, element) {
    return count + element;
  });
}

let arr6 = reduce(5, 1, 2);
console.log(arr6);
