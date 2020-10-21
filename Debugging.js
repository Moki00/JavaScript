function fixed() {
  console.log("(^o^)/");
}
fixed();
// "function" keyword is misspelled and there's a missing parenthesis

function loopy() {
  while (true) {
    console.log("Hello, world!");
  }
}
// Calling loopy starts an infinite loop, which may crash your browser

function calcAreaOfRect(w, h) {
  return w - h; // This should be w * h
}
let myRectArea = calcAreaOfRect(2, 3);
// Correct syntax and the program executes, but this gives the wrong answer
console.log(myRectArea);

console.log(typeof ""); //  "string"
console.log(typeof 0); //  "number"
console.log(typeof []); //  "object"
console.log(typeof {}); //  "object"

let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
console.log(`Net working capital is: ${netWorkingCapital}`);

let myArray = [1, 2, 3];
let arraySum = myArray.reduce((2.5, (current) => 2.5 + current));
console.log(`Sum of array values is: ${arraySum}`);

let FCC = [1, 2, 3];
let arraySum2 = FCC.reduce((previous, current) => previous + current);
console.log(`Sum of array values is: ${arraySum2}`); //Sum of array values is: 6

let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);

//the assignment operator (=) in JavaScript assigns a value to a variable name
//the == and === operators check for equality (the triple === tests for strict equality, meaning both value and type are the same).
//Almost every value on its own in JavaScript evaluates to true
//"falsy" values: false, 0, "" (an empty string), NaN, undefined, and null.

function myFunction() {
  return "You rock!";
}
let varOne = myFunction; // set to equal a function
let varTwo = myFunction(); // set to equal the string "You rock!"

function raiseToPower(b, e) {
  return Math.pow(b, e);
}
let base = 2;
let exp = 4;
let power = raiseToPower(base, exp);
console.log(power); // 2 to the 4th power is 16

function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  for (let i = 0; i < len; i++) {
    console.log(firstFive[i]);
  }
}
countToFive();

function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];
  for (let i = 0; i < m; i++) {
    let row = []; //incorrect if outside this for loop
    // Adds the m-th row into newArray
    for (let j = 0; j < n; j++) {
      // Pushes n zeroes into the current row to create the columns
      row.push(0);
    }
    // Pushes the current row, which now has n zeroes in it, to the array
    newArray.push(row);
  }
  return newArray;
}
let matrix = zeroArray(3, 2);
console.log(matrix);

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console,
//*+-*-+*+-*+*+*+*+-+
