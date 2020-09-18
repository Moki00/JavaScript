function telephoneCheck(str) {
  return true;
}

//formats
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

// Hint 1
// use regular expressions

// Hint 2
// Try using a site to test the regex live while you create it.

// Hint 3
// Start by trying to get it to validate each format from the example, each one should take a new line, once you get to select them all, then add examples that should not be selected and make sure they are not selected.

// Hint 4
// Think through what you are trying to solve in a step by step fashion. Below are the different Booleans you could set up. Once you have these set up, you can create small regex tests for each variable.
// This will lead to a much longer solution than those contained in the spoilers. However it will be easier to decipher and generate.

// Set up your Booleans here
let hasTenDigits = false;
let hasElevenDigits = false;
let startsWithOne = false;
let hasPermittedCharsOnly = false;
let hasCorrectParentheses = false;

// Write regular expressions here so that the Booleans contain the correct values
// INSERT CODE WITH REGEX HERE

// Use the Booleans to return true or false, without needing to string together one complex regular expression
if (!hasTenDigits && !hasElevenDigits) {
  return false;
} else if (!hasPermittedCharsOnly || !hasCorrectParentheses) {
  return false;
} else if (hasElevenDigits && !startsWithOne) {
  return false;
} else {
  return true;
}

//should have 7 true
console.log(telephoneCheck("545-555-5555"));
console.log(telephoneCheck("255 555 5555"));
console.log(telephoneCheck("5555553555"));
console.log(telephoneCheck("1 (555) 595-5555"));
console.log(telephoneCheck("(555)555-5558"));
console.log(telephoneCheck("(555) 556-5555"));
console.log(telephoneCheck("1 555-555-5575"));

//should have 5 false
console.log(telephoneCheck("555)555-5955"));
console.log(telephoneCheck("5egge4eg55"));
console.log(telephoneCheck("-1 555-555-5755"));
console.log(telephoneCheck("2 555-565-5555"));
console.log(telephoneCheck("555-555-55595"));
console.log(telephoneCheck("555-555-558"));
