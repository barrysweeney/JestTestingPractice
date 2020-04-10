const capitalize = require("./capitalize");

test("capitalizes string", () => {
  expect(capitalize("hello")).toBe("Hello");
});
