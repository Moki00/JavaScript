// *** Regular Expressions = RegEx ***

//z

//Regular Expressions: Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z]/gi;
console.log(userCheck.test(username));
console.log(username.match(userCheck));

// Regular Expressions: Match All Non-Numbers
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
console.log(movieName.match(noNumRegex).length);

// Regular Expressions: Match All Numbers
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

// chewieRegex that uses  *  to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote. Your regex does not need flags or character classes, and it should not match any of the other quotes.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
let result4 = chewieQuote.match(chewieRegex);
console.log(chewieQuote.match(chewieRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/g; //
// let result = twinkleStar; //
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
