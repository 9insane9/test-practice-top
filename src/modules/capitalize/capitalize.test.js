const capitalize = require('./capitalize');

it('capitalize first letter of string', () => {
  expect(capitalize("string")).toBe("String");
});

it('not a string or empty string', () => {
  expect(capitalize({})).toBeNull()
})