var convertToRoman = function(num) {

// two arrays with default conversion with matching indices.

  var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romanNumeral = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I"
  ];

  // empty string variable which will house the final roman number
  var romanized = "";

  // loop through the indicies of decimalValue until the current index will fit into num.
  
  for (var index = 0; index < decimalValue.length; index++) {
    while (decimalValue[index] <= num) {

//add the roman numeral and decrease num by the decimal equivalent.

      romanized += romanNumeral[index];
      num -= decimalValue[index];
    }
  }

  return romanized;
};


console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(37));
console.log(convertToRoman(202));
console.log(convertToRoman(2020));

