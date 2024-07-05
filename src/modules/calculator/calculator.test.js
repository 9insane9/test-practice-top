const calculator = require('./calculator');

it('adds two numbers', () => {
  expect(calculator.add(2, 5)).toBe(7)
})

it('substracts second number from first number', () => {
  expect(calculator.substract(2, 5)).toBe(-3)
})

it('multiplies two numbers', () => {
  expect(calculator.multiply(3, 12)).toBe(36)
})

it('divides first number by second number', () => {
  expect(calculator.divide(21, 7)).toBe(3)
})