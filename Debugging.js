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

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console,
//*+-*-+*+-*+*+*+*+-+

let innerHtml = '<p>Click here to <a href="#Home">return home</a></p>';
console.log(innerHtml);
