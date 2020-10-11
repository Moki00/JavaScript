// *** Regular Expressions = RegEx ***

//Match Whitespace and NonWhiteSpace
let whitespaceSample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let countNonWhiteSpace = /\S/g;
console.log(whitespaceSample.match(countWhiteSpace));
console.log(whitespaceSample.match(countNonWhiteSpace));

//Restrict Possible Usernames
let username = "Rettrh77";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i;
console.log(userCheck.test(username));
console.log(username.match(userCheck));
//^[a-z][a-z]+\d*$ (starts with a letter, then 1+ letters, and ends with 0+ numbers)
//^[a-z]\d\d+$/i (starts with a letter, then a number with 1+ numbers)

let superRegex = /^(?=\S)(?=(?:[^+]*\+){0,2}[^+]*$)(?=(?:[^(]*\()?[^(]*$)(?=(?:[^)]*\))?[^)]*$)[- .()+0-9]*[-.+()0-9]$/;
// The ^ anchor asserts that we are at the beginning of the string
//  (?=\S) asserts that what follows is a non-space character
//  (?=(?:[^+]*\+){0,2}[^+]*$) : two "+" chars at the most
//  (?=(?:[^(]*\()?[^(]*$) : One ( at the most
//  (?=(?:[^)]*\))?[^)]*$) : One ) at the most
// [- .()+0-9]* zero or more of the allowed chars
// [-.+()0-9] end with one of the allowed chars that is not a space
// The $ anchor asserts that we are at the end of the string

let movieName = "2001: Odyssey";
// Regular Expressions: All Non-Numbers
let noNumRegex = /\D/g;
console.log(movieName.match(noNumRegex).length);
// Regular Expressions: All Numbers
let numRegex = /\d/g;
console.log(movieName.match(numRegex).length);

// Regular Expressions: Match Everything But Letters and Numbers
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /[\W]/g;
console.log(quoteSample.match(nonAlphabetRegex).length);

//Regular Expressions: Match All Letters and Numbers (shorthand character classes)
let alphabetRegexV2 = /[\w+]/g;
console.log(quoteSample.match(alphabetRegexV2).length);

// Regular Expressions: Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/;
console.log(lastRegex.test(caboose));

// Regular Expressions: Match Beginning String Patterns
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal));

// The regex /z+/ matches the letter z when it appears one or more times in a row.
let Criminals = "P6P2P7P4P5CCCCCP3P1";
let reCriminals = /C+/;
console.log(Criminals.match(reCriminals));

//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/;
console.log(text.match(myRegex));

// use  *  to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result4 = chewieQuote.match(chewieRegex);
console.log(chewieQuote.match(chewieRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
// let result = twinkleStar.match(starRegex);
console.log(twinkleStar.match(starRegex));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/;
// let result = unRegex.test(exampleStr);
console.log(unRegex.test(exampleStr));

// after this Regex below "g" is global and "i" is ignore case
let quoteSample2 =
  "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi;
let result2 = quoteSample2.match(vowelRegex);
console.log(quoteSample2.match(vowelRegex));

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petString2 = "James has a pet rock.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString));
console.log(petRegex.test(petString2));
