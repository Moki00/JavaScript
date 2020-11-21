// Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.
function convertToF(celsius) {
    let fahrenheit = (celsius * 9) / 5 + 32;
    return fahrenheit;
}
console.log(convertToF(30)); //83

// Reverse a string
function reverseString(str) {
    //spread out the string into an array with split
    let split = str.split("");
    console.log(split);
    //flip with reverse
    let back = split.reverse();
    console.log(back);
    //turn into a string with join
    let out = back.join("");
    return out;
}
console.log(reverseString("hello"));

// let x = "limits the number of chars";
// let y = "array each";
// console.log(x.split("", 6));
// console.log("this o is a sparator".split("o"));
// console.log("this must be a string".split());
// console.log(y.split(""));
// let limits = x.split("", 6);
// console.log(limits);
// let stimil = limits.reverse();
// console.log(stimil);
// let join = stimil.join("");
// console.log(join);

// Factorialize a Number
function factorialize(num) {
    if (num === 0) {
        return 1;
    } else {
        for (let i = num - 1; i >= 1; i--) {
            num = num * i;
        }
        return num;
    }
}
console.log(factorialize(5));
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Find the Longest Word in a String
function findLongestWordLength(str) {
    //split the words into arrays
    let arr43 = str.split(" ");
    console.log(arr43);

    //make a for loop to cycle through all the words for the greatest length
    let longz = 0;
    for (let i = 0; i < arr43.length; i++) {
        if (arr43[i].length > longz) {
            longz = arr43[i].length;
        }
        console.log(longz);
    }
    return longz;
}

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//highest number using .sort

var points2 = [40, 100, 1, 5, 25, 10];
answer = points2.sort(function (a, b) {
    return b - a;
});
console.log(answer[0]); //logs the highest number

// Return Largest Numbers in a nested array

function largestOfFour(arr) {
    let finalArray = [];
    for (let i = 0; i < arr.length; i++) {
        let biggest = arr[i][0]; //sets the biggest number in each array as the first
        console.log(i + " Outer array"); //see what outer array we are in
        for (let nested = 0; nested < arr[i].length; nested++) {
            if (biggest < arr[i][nested]) {
                biggest = arr[i][nested];
            }
            console.log(biggest);
        }
        finalArray[i] = biggest;
    }
    return finalArray; //should return  [5,27,39,1001]
}

console.log(
    largestOfFour([
        [4, 5, 1, 3],
        [13, 27, 18, 26],
        [32, 35, 37, 39],
        [1000, 1001, 857, 333],
    ])
);

// Check if a string ends with the given target.
// use one of the JavaScript substring methods

function confirmEnding(str, target) {
    var re = new RegExp(target + "$"); //RegEx as an object
    return re.test(str); //returns true or false
}
console.log(confirmEnding("Bastian", "n")); //true, because it's at the end

// Repeat a string for num times
// Return an empty string if num is not a positive number
// do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    let repeater = "";
    while (num > 0) {
        repeater += str;
        num--;
    }
    return repeater;
}

console.log(repeatStringNumTimes("a----", 0));

// Truncate a string if it is longer than the given maximum string length.
//Return the truncated string with a ... ending.

function truncateString(str, num) {
    let cut;
    if (str.length <= num) {
        return str;
    } else {
        cut = str.slice(0, num);
        return cut + "...";
    }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// the 'truth test' is passed if func(num) is true.
//If no element passes the test, return undefined

function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) {
        num = arr[i];
        if (func(num) == true) {
            return num;
        }
    }
    return undefined;
}

console.log(findElement([1, 22, 99], (num) => num % 11 === 0)); //22
console.log(findElement([1, 55, 3, 4], (num) => num % 2 === 0)); //4

// Basic Algorithm Scripting: Boo who
// Check if a value is classified as a boolean primitive
// Boolean primitives are true and false.

function booWho(bool) {
    return bool === true || bool === false;
}

console.log(booWho(null)); // false
console.log(booWho(true)); // true
console.log(booWho(false)); // true
console.log(booWho([1, 2, 3])); // false
console.log(booWho([].slice)); // false
console.log(booWho({ a: 1 })); // false
console.log(booWho(NaN)); // false
console.log(booWho(1)); // false
console.log(booWho("true")); // false

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console ***CLEAR***
//*+-*-+*+-*+*+*+*+-+

// Basic Algorithm Scripting: Title Case a Sentence
// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.
// For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".

// function titleCase(str) {
//     console.log(str.length);

//     let arr = str.split(" "); // separate str into an array
//     for (i = 0; i < str.length; i++) {
//         arr[i] = arr[i].toLowerCase(); //all char lowercase
//     }
//     arr[0] = arr[0].toUpperCase(); //first char uppercase
//     for (i = 0; i < str.length; i++) {
//         arr[i].replace(/\S(?!\s)/, (L) => L.toUpperCase());
//     }
//     // every char after a space should be capital
//     //capStr = arr.join(""); // make array into a string
//     return arr;
// }

function titleCase(str) {
    var array1 = str.toLowerCase().split(" ");
    var output = array1.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return output.join(" ");
}

console.log(titleCase("I'm a little tea pot")); // should return a string.
console.log(titleCase("I'm a little tea pot")); // should return I'm A Little Tea Pot.
console.log(titleCase("sHoRt AnD sToUt")); // should return Short And Stout.
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")); // should return Here Is My Handle Here Is My Spout.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // removes whitespace in start and end of string
let finale = hello.replace(wsRegex, "");
console.log(hello);
