// function freqCounter(str) {
//   let obj = {};
//   for (let letter of str) {
//     if (obj[letter] === undefined) {
//       obj[letter] = 1;
//     } else {
//       obj[letter]++;
//     }
//   }
//   return obj;
// }

// function anagramHash(str1, str2) {
//   let oneCounter = freqCounter(str1);

//   let twoCounter = freqCounter(str2);

//   for (let i = 0; i < str2.length; i++) {
//     let letter = str2[i];
//     console.log(letter);

//     if (
//       oneCounter[letter] < twoCounter[letter] ||
//       oneCounter[letter] === undefined
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

// anagramHash();
// console.log(anagramHash(happy, ha));

//find the average

// function averagePairLoop(arr, target) {
//   for (let i = 0; i < arr.length; i++) {
//     let one = arr[i];
//     // console.log(one);

//     for (let j = i + 1; j < arr.length; j++) {
//       let two = arr[j];

//       // console.log(one + two) / 2;
//       let avg = (one + two) / 2;
//       console.log(avg);
//       if (avg === target) {
//         return true;
//       }
//     }
//   }
//   return false;
// }

// console.log(averagePairLoop([1, 2, 3], 2.5)); //true
// console.log(averagePairLoop([1, 3, 3, 5, 6, 7, 10, 12, 19], 3)); //true

function averagePair(arr, target) {
  let small = 0;
  let big = arr.length - 1;
  let avg;

  while (arr[big] > arr[small]) {
    avg = (arr[big] + arr[small]) / 2;
    console.log(avg);

    if (avg === target) {
      return true;
    } else if (avg > target) {
      big--;
    } else {
      small++;
    }
  }
}

console.log(averagePair([1, 2, 3], 2.5)); //true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 3)); //true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 5.5)); //true
