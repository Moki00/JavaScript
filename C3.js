function rot13(str) {
  // LBH QVQ VG!
  return str.replace(/[A-Z]/g, L =>
    String.fromCharCode((L.charCodeAt(0) % 26) + 65)
  );
}

console.log(rot13("i love you"));
console.log(rot13("V YBIR LBH"));