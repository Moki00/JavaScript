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
    let arr = str.split(" ");
    console.log(arr);

    //make a for loop to cycle through all the words for the greatest length
    let longz = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > longz) {
            longz = arr[i].length;
        }
        console.log(longz);
    }
    return longz;
}

console.log(
    findLongestWordLength("The quick brown fox jumped over the lazy dog")
);

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console ***CLEAR***
//*+-*-+*+-*+*+*+*+-+

// Return Largest Numbers in Arrays

function largestOfFour(arr) {
    return arr;
}

largestOfFour([
    [4, 5, 1, 3],
    [13, 27, 18, 26],
    [32, 35, 37, 39],
    [1000, 1001, 857, 1],
]);

// Return an array consisting of the largest number from each provided sub-array.
//the provided array will contain exactly 4 sub-arrays.
// you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
