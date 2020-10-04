// Regular Expressions = RegEx

// Regular Expressions: Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result = calRegex.test(rickyAndCal);
console.log(rickyAndCal.match(calRegex));

// The regex /z+/ matches the letter z when it appears one or more times in a row.
let Criminals = "P6P2P7P4P5CCCCCP3P1";
let reCriminals = /C+/;
console.log(Criminals.match(reCriminals));

//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/; // Change this line
let result5 = text.match(myRegex);
console.log(text.match(myRegex));

// chewieRegex that uses  *  to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/; // Change this line
let result4 = chewieQuote.match(chewieRegex);
console.log(chewieQuote.match(chewieRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/g; //
// let result = twinkleStar; //
console.log(twinkleStar.match(starRegex));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
// let result = unRegex.test(exampleStr);
console.log(unRegex.test(exampleStr));

let quoteSample =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; // Change this line
let result2 = quoteSample.match(vowelRegex); // Change this line
console.log(quoteSample.match(vowelRegex));
