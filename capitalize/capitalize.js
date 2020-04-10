function capitalize(string) {
  letters = string.split("");
  letters[0] = letters[0].toUpperCase();
  return letters.join("");
}

module.exports = capitalize;
