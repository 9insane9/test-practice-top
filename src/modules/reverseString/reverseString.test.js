const reverseString = require('./reverseString');

it('reverses string', () => {
  expect(reverseString('abcd')).toBe('dcba')
})

it('is not a string or empty string', () => {
  expect(reverseString({})).toBeNull()
})