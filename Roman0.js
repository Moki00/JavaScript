//  numbers to be converted to Roman Numerals 

//use Array.splice()  Array.indexOf('num')  Array.join("")

//create 2 arrays: one for Roman Numerals, one for decimal equivalent

//add numbers like 4, 9, and 40 

// cant have more than 3 Roman Numerals together


function convertToRoman(num) {
roman = ['I','IV','V','IX','X','XL','L','C','M','','']

  if (num==1) {
    return 'I';
  }
  if (num==5) {
    return 'V';
  }
  if (num==10) {
    return 'X';
  }
  if (num==100) {
    return 'C';
  }
  else return 'error';
}
  

  
console.log(convertToRoman(2));
console.log(convertToRoman(3));
console.log(convertToRoman(4));
console.log(convertToRoman(5));
console.log(convertToRoman(37));
console.log(convertToRoman(202));
console.log(convertToRoman(2020));
