const calculator = (function() {

  function add(a, b)  {
    return a + b
  }

  function substract(a, b) {
    return a - b
  }

  function multiply(a, b) {
    return a * b
  }

  function divide(a, b){
    return a / b
  }

  return { add, substract, multiply, divide }
}())

module.exports = calculator