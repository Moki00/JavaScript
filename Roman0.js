//  numbers to be converted to Roman Numerals 
//create 2 arrays: one for Roman Numerals, one for decimal equivalent
//add numbers like 4, 9, and 40 
// cant have more than 3 Roman Numerals together

//enter as num, loop [search thru decimals, add roman to final, subtract that from num], get final


function convertToRoman(num) {
  decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  var i;
  for (i=0; i<decimal.length; i++) {

  }

return num;
}


console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(37));
console.log(convertToRoman(202));
console.log(convertToRoman(2020));
