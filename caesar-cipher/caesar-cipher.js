function caesarCipher(string, offset) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  characters = string.split("");
  for (let i = 0; i < characters.length; i++) {
    // check if character is not a letter
    if (characters[i].match(/[^a-z|^A-Z]/)) {
      // don't modify it, move on to next character
      continue;
    } else {
      // character is a letter
      // check if letter was initially uppercase
      if (characters[i].toUpperCase() === characters[i]) {
        let index = alphabet.indexOf(characters[i].toLowerCase());
        // array wrapping logic
        myNewIndex = index + offset;
        if (myNewIndex >= alphabet.length) {
          myNewIndex %= alphabet.length;
        } else if (myNewIndex < 0) {
          myNewIndex += alphabet.length;
        }
        // set letter to next uppercase letter in the alphabet
        characters[i] = alphabet[myNewIndex].toUpperCase();
      } else {
        // letter was intially lowercase
        // array wrapping logic
        let index = alphabet.indexOf(characters[i]);
        myNewIndex = index + offset;
        if (myNewIndex >= alphabet.length) {
          myNewIndex %= alphabet.length;
        } else if (myNewIndex < 0) {
          myNewIndex += alphabet.length;
        }
        // set letter to next lowercase letter in the alphabet
        characters[i] = alphabet[myNewIndex];
      }
    }
  }
  return characters.join("");
}

module.exports = caesarCipher;
