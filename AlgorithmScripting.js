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

//*+-*-+*+-*+*+*+*+-+
console.clear(); // to clear the browser console ***CLEAR***
//*+-*-+*+-*+*+*+*+-+

// Repeat a String
// Repeat a string for num times
// Return an empty string if num is not a positive number
// do not use the built-in .repeat() method.

function repeatStringNumTimes(str, num) {
    if (num < 0) {
        return "";
    } else {
        let combined;
        for (let i = 0; i < num; i++) {
            combined = str.push("1");
        }
        return combined;
    }
}

console.log(repeatStringNumTimes("a----", 3));
