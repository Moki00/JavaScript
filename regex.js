// *** Regular Expressions = RegEx ***

// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
console.log(petRegex.test(petString)); //true, because there's a cat
console.log(petString.match(petRegex)); //cat

// after this Regex below "g" is global and "i" is ignore case
let quoteSample2 = "This looks at all vowels.";
let vowelRegex = /[aeiou]/gi;
console.log(quoteSample2.match(vowelRegex));

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.lar/;
console.log(unRegex.test(exampleStr)); //true, it's in the String
console.log(exampleStr.match(unRegex)); //ular, fills in the character before

// use  *  to match an uppercase "A" character immediately followed by zero or more lowercase "a" characters in chewieQuote.
let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex = /Aa*/;
console.log(chewieQuote.match(chewieRegex));

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
console.log(twinkleStar.match(starRegex));

//Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let lazyRegex = /<.*?>/; //this finds everything between <>
let lazyRegex2 = /W.*?r/; //this finds everything between W r
console.log(text.match(lazyRegex));
console.log(text.match(lazyRegex2));

//  [\W]
let quoteSample = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /[\W]/g; //not letters and numbers
console.log(quoteSample.match(nonAlphabetRegex).length); //6 = 5 spaces and a period

// Match All Letters and Numbers (shorthand character classes)
let alphabetRegexV2 = /[\w+]/g;
console.log(quoteSample.match(alphabetRegexV2).length);

// The regex /z+/ matches the letter z when it appears one or more times in a row.
let Criminals = "P6P2P7P4P5CCCCCP3P1";
let reCriminals = /C+/;
console.log(Criminals.match(reCriminals)); //CCCCC

// Beginning String Patterns with ^
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/;
console.log(calRegex.test(rickyAndCal)); //true

// Ending String Patterns with $
let caboose = "The last car on a train is the caboose";
let lastRegex = /boose$/;
console.log(lastRegex.test(caboose)); //true, because it's at the end
console.log(caboose.match(lastRegex)); //boose

let movieName = "2001: Odyssey";
let noNumRegex = /\D/g; // All Non-Numbers
console.log(movieName.match(noNumRegex).length); //9 non-numbers
let numRegex = /\d/g; // All Numbers
console.log(movieName.match(numRegex).length); //4 numbers

// \s and \S
let whitespaceSample = "Whitespace is important in separating words.";
let countWhiteSpace = /\s/g; //Whitespace
let countNonWhiteSpace = /\S/g; //NonWhiteSpace
console.log(whitespaceSample.match(countWhiteSpace)); //5 with the array
console.log(whitespaceSample.match(countNonWhiteSpace)); //38 with the array

//Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; //This checks for zero or one of the preceding element
console.log(favRegex.test(favWord));

//Specify Upper and Lower Number of Matches
let ohStr = "Ohhhh no";
let ohRegex = /Oh{3,6} no/;
let timRegex = /Tim{4}ber/; // exactly 4 m's
console.log(ohRegex.test(ohStr));
console.log(ohStr.match(ohRegex));

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/; //from 3 to 5 a's
console.log(multipleA.test(A4)); //true
console.log(multipleA.test(A2)); //false, not enough

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

let quit = "quit";
let noquit = "noqit";
let quRegex = /q(?=u)/; //Positive Lookahead
let qRegex = /q(?!u)/; //Negative Lookahead
console.log(quit.match(quRegex)); // Returns ["q"], because there is a "u" after q(?=u)
console.log(noquit.match(quRegex)); // null, because there is a "u" after q(?=u)
console.log(quit.match(qRegex)); // null, because there is no "u" after q(?!u)
console.log(noquit.match(qRegex)); // Returns ["q"], because there is no "u" after q(?!u)

// Lookahead with (?=...) or (?!...)
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
console.log(checkPass.test(password)); // Returns true

let sampleLookahead = "astr1on11aut";
let pwRegex = /^(?=\D)(?=\w{5,})(?=\w*\d{2,})/;
//  do not begin with numbers ^(?=\D)
// greater than 5 characters (?=\w{5,})
//  have two consecutive digits after a character (?=\w*\d{2,})
console.log(sampleLookahead.match(pwRegex)); // ""

// mixed grouping of characters
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
let fdr = "Franklin D. Roosevelt";
let myString = "Eleanor Roosevelt";
let myRegex = /(Eleanor|Franklin).* Roosevelt/g;
console.log(myRegex.test(myString));
console.log(fdr.match(myRegex));

//Reuse Patterns Using Capture Groups
//Some patterns will occur multiple times in a string
//search for repeat substrings using capture groups
//Parentheses, ( and ), are used to find repeat substrings; regex of the pattern in the parentheses.
//specify where that repeat string will appear with a backslash (\) and then a number...starts at 1 and increases with each additional capture group
//An example would be \1 to match the first group.
//example below matches any word that occurs twice separated by a space:
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/; //all letters and number, then a space, then \w again
console.log(repeatRegex.test(repeatStr)); //  true
console.log(repeatStr.match(repeatRegex)); // Returns ["regex regex", "regex"]

let repeatNum = "42 42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // All Numbers with whitespaces
console.log(reRegex.test(repeatNum));
console.log(repeatNum.match(reRegex));

// Use Capture Groups to Search and Replace using .replace() on a string
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue"); // Returns "The sky is blue."
//You can also access capture groups in the replacement string with dollar signs ($).

"Code Camp".replace(/(\w+)\s(\w+)/, "$2 $1");
// Returns "Camp Code"
//Write a regex fixRegex using three capture groups that will search for each word in the string "one two three"
//update the replaceText variable to replace "one two three" with the string "three two one" and assign the result to the result variable
//use the dollar sign ($) syntax.

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = "$3 $2 $1";
console.log(str.replace(fixRegex, replaceText));

//
