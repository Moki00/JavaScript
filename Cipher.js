function rot13(str) {
  //26 letters, 13 is half, cut in half!
  var abc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
  var nop = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var array = str.split("");

  for (i = 0; array.length > i; i++) {
    for (j = 0; 13 > j; j++) {
      if (array[i] === abc[j]) {
        array[i] = nop[j];
      } else if (array[i] === nop[j]) {
        array[i] = abc[j];
      }
    }
  }

  return array.join("");
}

//should say "Free Code Camp"
console.log(rot13("FHCRE FRPERG!!!"));

//should say FREE PIZZA!
console.log(rot13("SERR CVMMN!"));

//should say FREE LOVE?
console.log(rot13("SERR YBIR?"));
