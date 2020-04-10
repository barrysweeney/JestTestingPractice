const caesarCipher = require("./caesar-cipher");

test("offsets each letter of string", () => {
  expect(caesarCipher("A Hello Worldz!", -1)).toBe("Z Gdkkn Vnqkcy!");
});
