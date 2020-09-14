function convertToRoman(num) {
  function getNumeral(digit, lowStr, midStr, nextStr) {
    switch (true) {
      case digit <= 3:
        return lowStr.repeat(digit);
      case digit === 4:
        return lowStr + midStr;
      case digit <= 8: // digits 5-8
        return midStr + lowStr.repeat(digit - 5);
      default: // digit 9
        return lowStr + nextStr
    }
  }

  let str = ""

  // Thousands
  str += "M".repeat(Math.floor(num/1000));
  num %= 1000;

  // Hundreds
  str += getNumeral(Math.floor(num/100), 'C', 'D', 'M')
  num %= 100;

  // Tens
  str += getNumeral(Math.floor(num/10), 'X', 'L', 'C')
  num %= 10;

  // Ones
  str += getNumeral(num, 'I', 'V', 'X')

  return str;
}

convertToRoman(36);

/* Roman numerals up to 999 follow a pattern for each digit.
For single digit numbers, you have the strings I, V and X.
For multiples of ten, you have X, L and C.
For multiples of 100, you have C, D and M.
So to get the final Roman numeral, just find out the individual string based on those 3 combinations and then concatenate them together.

Define a function that will take the three strings and a single digit and output its Roman numeral based on the pattern.
For numbers over 1000, you just repeat M for each thousand.
Use the function to get the Roman Numeral for 100’s, 10’s and 1’s. 
*/