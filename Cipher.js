function rot13(str) {
  var alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

  var output = alpha[str];

  return output;
}


//Use String.charCodeAt() to convert the English character to ASCII.
//Use String.fromCharCode() to convert ASCII to English character.

//should say "Free Code Camp"
console.log(rot13(6));

//should say FREE PIZZA!
console.log(rot13("SERR CVMMN!"));

//should say FREE LOVE?
console.log(rot13("SERR YBIR?"));