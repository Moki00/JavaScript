let abcd = ["a", "b", "c", "d"];
abcd[1] = "not b anymore"; //changed the second item in the array
console.log(abcd);

let twentyThree = "XXIII";
let romanNumerals = ["XXI", "XXII"];
romanNumerals.unshift("XIX", "XX"); //adds on front
console.log(romanNumerals); // now equals ['XIX', 'XX', 'XXI', 'XXII']
romanNumerals.push(twentyThree); //adds on the end
console.log(romanNumerals); // now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']

function mixedNumbers(arr2) {
    // Only change code below this line
    arr2.unshift("I", 2, "three");
    arr2.push(7, "VIII", 9);
    // Only change code above this line
    return arr2;
}
console.log(mixedNumbers(["IV", 5, "six"])); // ["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]

//Remove Items from an Array with pop() and shift()

let greetings = ["whats up?", "hello", "see ya!"];
greetings.pop();
console.log(greetings); // ['whats up?', 'hello']
greetings.shift();
console.log(greetings); //   ['hello']
let popped1 = greetings.pop();
console.log(greetings); //   []
console.log(popped1); // hello

function popShift(arr) {
    let popped2 = arr.pop();
    let shifted = arr.shift();
    return [shifted, popped2];
}
console.log(popShift(["challenge", "is", "not", "complete"])); // (2) ["challenge", "complete"]

//Remove Items Using splice()

let today = ["today", "was", "not", "so", "great"];
console.log(today.splice(2, 2)); // ["not", "so"]  (removes 2 elements beginning with the 3rd element)
console.log(today); //(3) ["today", "was", "great"]

let feeling = ["I", "am", "feeling", "really", "happy"];
console.log(feeling); //["I", "am", "feeling", "really", "happy"];
console.log(feeling.splice(1, 1)); // ["am"]
console.log(feeling); //["I", "feeling", "really", "happy"];
let newArray = feeling.splice(1, 2);
console.log(feeling); // ["I", "happy"];
console.log(newArray); // ["feeling", "really"];

const arr10 = [2, 4, 5, 1, 7, 5, 2, 1];
console.log(arr10.splice(0, 2)); // spliced [2, 4]
console.log(arr10); // then arr10 is [5, 1, 7, 5, 2, 1]
console.log(arr10.splice(1, 2)); // spliced [1, 7]
console.log(arr10); // then arr10 is [5, 5, 2, 1]
console.log(arr10.splice(2, 2)); // spliced [2, 1]
console.log(arr10); // finally arr10 is [5, 5] to equal 10 as requested

const numbers = [10, 11, 12, 99, 15];
const startIndex = 3;
const amountToDelete = 1;
numbers.splice(startIndex, amountToDelete, 13, 14);
// 99 is removed, and we add 13 and 14 at the same index
console.log(numbers); // returns [ 10, 11, 12, 13, 14, 15 ]

function htmlColorNames(arr76) {
    arr76.splice(0, 2, "DarkSalmon", "BlanchedAlmond"); // removes the first two items and replaces them
    return arr76;
}
console.log(
    htmlColorNames([
        "DarkGoldenRod",
        "WhiteSmoke",
        "LavenderBlush",
        "PaleTurquoise",
        "FireBrick",
    ])
);

//slice copies, unlike splice that cuts
//slice: the first is the index at which to begin extraction, and the second is the index at which to stop extraction
let weatherConditions = ["rain", "snow", "sleet", "hail", "clear"];
console.log(weatherConditions); //["rain", "snow", "sleet", "hail", "clear"];
console.log(weatherConditions.slice(1, 2)); // snow
console.log(weatherConditions.slice(2, 99)); // ["sleet", "hail", "clear"];
console.log(weatherConditions); // weatherConditions still equals ['rain', 'snow', 'sleet', 'hail', 'clear']

function forecast(arr23) {
    return arr23.slice(2, 4);
}
console.log(
    forecast(["cold", "rainy", "warm", "sunny", "cool", "thunderstorms"])
);

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray]; //spread Operator copies all of an array's elements
console.log(thatArray); // thatArray equals [true, true, undefined, false, null]
console.log(thisArray); // thisArray remains unchanged and thatArray contains the same elements as thisArray

//Copy an Array with the Spread Operator

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
        newArr.unshift([...arr]);
        num--;
    }
    return newArr;
}
console.log(copyMachine([true, false, true], 2));

//Combine Arrays with the Spread Operator

function spreadOut() {
    let fragment = ["to", "code"];
    let sentence = ["learning", ...fragment, "is", "fun"];
    return sentence;
}
console.log(spreadOut()); //  ["learning", "to", "code", "is", "fun"]

//Check For The Presence of an Element With indexOf()

let fruits = ["pears", "foooo", "oranges", "peaches", "pears"];
console.log(fruits.indexOf("dates")); // returns -1 because it does not exist
console.log(fruits.indexOf("oranges")); // returns 2
console.log(fruits.indexOf("pears")); // returns 0, the first index at which the element exists

function quickCheck(arr, elem) {
    if (arr.indexOf(elem) == -1) {
        return false;
    } else {
        return true;
    }
}
console.log(quickCheck(["squash", "mushrooms", "shallots"], "mushrooms")); // indexOf

//Iterate Through All an Array's Items Using For Loops

function greaterThanTen(arr) {
    let newArr2 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 10) {
            newArr2.push(arr[i]);
        }
    }
    return newArr2;
}

console.log(greaterThanTen([2, 12, 8, 14, 80, 0, 1])); // returns the object [12, 14, 80]

// return a filtered version of the passed array such that any array nested within arr containing elem has been removed
function filteredArray(arr, elem) {
    let newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(elem) == -1) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

console.log(
    filteredArray(
        [
            [3, 2, 3],
            [1, 6, 7],
            [3, 13, 26],
            [19, 3, 9],
        ],
        3
    )
);

//Create complex multi-dimensional arrays

let nestedArray2 = [
    // top, or first level - the outer most array
    ["deep"], // an array within an array, 2 levels of depth
    [
        ["deeper"],
        ["deeper"], // 2 arrays nested 3 levels deep
    ],
    [
        [
            ["deepest"],
            ["deepest"], // 2 arrays nested 4 levels deep
        ],
        [
            [
                ["deep5"], // an array nested 5 levels deep
            ],
        ],
    ],
];

console.log(nestedArray2[2][1][0][0][0]); //deep5
console.log(nestedArray2.length); //3 arrays
console.log(typeof nestedArray2); //object

//Add Key-Value Pairs to JavaScript Objects

const tekkenCharacter = {
    player: "Hwoarang",
    fightingStyle: "Tae Kwon Doe",
    human: true,
};
tekkenCharacter.origin = "South Korea"; // add an additional property
tekkenCharacter["hair color"] = "dyed orange"; //Bracket notation is required if your property has a space in it
const eyes = "eye color"; //or if you want to use a variable to name the property.

tekkenCharacter[eyes] = "brown";

console.log(tekkenCharacter); //{player: 'Hwoarang', fightingStyle: 'Tae Kwon Doe', human: true, origin: 'South Korea', 'hair color': 'dyed orange', 'eye color': 'brown'};

//Modify an Object Nested Within an Object

let nestedObject = {
    id: 28802695164,
    date: "December 31, 2016",
    data: {
        totalUsers: 99,
        online: 80,
        onlineStatus: {
            active: 67,
            away: 13,
            busy: 8,
        },
    },
};
nestedObject.data.onlineStatus.busy = 42;

console.log(nestedObject);

//Access Property names with Bracket Notation

let foods2 = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};

function checkInventory(scannedItem) {
    // Only change code below this line
    return foods2[scannedItem];
    // Only change code above this line
}

console.log(checkInventory("apples"));

//Use the delete Keyword to Remove Object Properties

let foods = {
    apples: 25,
    oranges: 32,
    plums: 28,
    bananas: 13,
    grapes: 35,
    strawberries: 27,
};
delete foods["oranges"];
delete foods.plums;
delete foods.strawberries;
console.log(foods);

//Check if an Object has a Property

let users45 = {
    Alan: { age: 27, online: true },
    Jeff: { age: 32, online: true },
    Sarah: { age: 48, online: true },
    Ryan: { age: 19, online: true },
};

function isEveryoneHere(obj) {
    console.log(obj.hasOwnProperty("Alan" && "Jeff" && "Sarah" && "Ryan")); //true
    if (
        (obj.hasOwnProperty("Alan") &&
            obj.hasOwnProperty("Jeff") &&
            obj.hasOwnProperty("Sarah") &&
            obj.hasOwnProperty("Ryan")) == true
    ) {
        return true;
    }
    return false;
}
console.log(isEveryoneHere(users45));

//Iterate Through the Keys of an Object with a for...in Statement

function countOnline(usersObj) {
    let result = 0;
    console.log(usersObj);
    for (let user in usersObj) {
        console.log(usersObj[user].online);
        if (usersObj[user].online === true) {
            result++;
            console.log(result);
        }
    }
    return result;
}

console.log(
    countOnline({
        Alan: { online: false },
        Jeff: { online: true },
        Sarah: { online: false },
    })
);

//Generate an Array of All Object Keys with Object.keys()

let users = {
    Alan: { age: 27, online: false },
    Jeff: { age: 32, online: true },
    Sarah: { age: 48, online: false },
    Ryan: { age: 19, online: true },
};

function getArrayOfUsers(obj) {
    return Object.keys(obj);
}

console.log(getArrayOfUsers(users));

//Modify an Array Stored in an Object

let user = {
    name: "Kenneth",
    age: 28,
    data: {
        username: "kennethCodesAllDay",
        joinDate: "March 26, 2016",
        organization: "freeCodeCamp",
        friends: ["Sam", "Kira", "Tomo"],
        location: {
            city: "San Francisco",
            state: "CA",
            country: "USA",
        },
    },
};

function addFriend(userObj, friend) {
    // Only change code below this line
    console.log(userObj); //the big user object above
    console.log(friend); //Pete
    console.log(userObj.data.friends); // Sam, Kira, Tomo
    console.log(userObj.data.friends.push(friend)); // 4
    console.log(userObj.data.friends); // Sam, Kira, Tomo, Pete
    return userObj.data.friends;
    // Only change code above this line
}

console.log(addFriend(user, "Pete")); //undefined
