function telephoneCheck(str) {
    // easy to decipher and generate
    let withoutBrackets = /^(1[\s-]?)?\d{3}[\s-]?\d{3}[\s-]?\d{4}$/gm; // 1 234-555-8901 and 1 234 555 8901 and 555 555 7890 and 0123456789 and 123-555-7890
    let withBrackets = /^(1[\s-]?)?[(]\d{3}[)][\s-]?\d{3}[\s-]?\d{4}$/gm; // 1 (555) 555-5575 and (555) 555-7890 and (555)555-7890

    let format1 = str.match(withoutBrackets);
    let format2 = str.match(withBrackets);

    console.log(format1 + " possible 1 with dashes or spaces");
    console.log(format2 + " has brackets and a dash and maybe 1");

    if (format1 || format2) {
        return true;
    } else {
        return false;
    }
}

// 8 true
console.log(telephoneCheck("545-555-5555"));
console.log(telephoneCheck("255 555 5555"));
console.log(telephoneCheck("5555553555"));
console.log(telephoneCheck("1 (555) 595-5555")); // 4
console.log(telephoneCheck("(555)555-5558"));
console.log(telephoneCheck("(555) 556-5555"));
console.log(telephoneCheck("1 555 555 5575"));
console.log(telephoneCheck("1 (555) 555-5575")); // 8

// // 7 false
// console.log(telephoneCheck("2 (757) 622-7382"));
// console.log(telephoneCheck("555)555-5955")); //doesn't -->hasCorrectParentheses
// console.log(telephoneCheck("5egge4eg55")); //doesn't -->hasPermittedCharsOnly
// console.log(telephoneCheck("-1 555-555-5755")); //has a minus
// console.log(telephoneCheck("2 555-565-5555")); //11 digits doesn't -->startsWithOne
// console.log(telephoneCheck("555-555-55595")); //11 digits doesn't -->startsWithOne
// console.log(telephoneCheck("555-555-558")); //9 digits -->hasTenDigits

//create small regex tests for each variable
let exampleTelephone = "470-272-0054";
let nondigits = /\D/g;
let digitCount = exampleTelephone.replaceAll(nondigits, "").length;
console.log(digitCount);

let one = /^1/g;
let startsWithOne = exampleTelephone.match(one);
console.log(startsWithOne);
