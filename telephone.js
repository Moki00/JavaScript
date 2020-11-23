function telephoneCheck(str) {
    str = "(545)555-5555";
    // easy to decipher and generate
    //create small regex tests for each variable
    let nondigits = /\D/g;
    let digitCount = str.replaceAll(nondigits, "").length;
    console.log(digitCount);

    let one = /^1/g;
    let startsWithOne = str.match(one);
    // console.log(startsWithOne);

    let dash2 = /\d{3}-\d{3}-\d{4}/g; // 555-555-5555
    let bracketDash = /[(]\d{3}[)]\d{3}-\d{4}/g; // (555)555-5555
    // (555) 555-5555
    // 555 555 5555
    // 5555555555
    // 1 555 555 5555

    let formats = str.match("(/[(]d{3}[)]d{3}-d{4}/g) | (/d{3}-d{3}-d{4}/g)");

    console.log(formats);

    let hasCorrectParentheses = true;

    // validate each format from the example per new line

    // examples that should not be selected
    if (digitCount < 10 || digitCount > 11) {
        return false;
    } else if (!formats || !hasCorrectParentheses) {
        return false;
    } else if ((digitCount = 11 && !startsWithOne)) {
        return false;
    } else {
        return true;
    }
}

// 7 true
console.log(telephoneCheck("545-555-5555"));
// console.log(telephoneCheck("255 555 5555"));
// console.log(telephoneCheck("5555553555"));
// console.log(telephoneCheck("1 (555) 595-5555"));
// console.log(telephoneCheck("(555)555-5558"));
// console.log(telephoneCheck("(555) 556-5555"));
// console.log(telephoneCheck("1 555-555-5575"));

// // 6 false
// console.log(telephoneCheck("555)555-5955")); //doesn't -->hasCorrectParentheses
// console.log(telephoneCheck("5egge4eg55")); //doesn't -->hasPermittedCharsOnly
// console.log(telephoneCheck("-1 555-555-5755")); //has a minus
// console.log(telephoneCheck("2 555-565-5555")); //11 digits doesn't -->startsWithOne
// console.log(telephoneCheck("555-555-55595")); //11 digits doesn't -->startsWithOne
// console.log(telephoneCheck("555-555-558")); //9 digits -->hasTenDigits
