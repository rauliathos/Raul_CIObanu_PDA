var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })


  // test: calculator.add()
  it(' can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 1
    calculator.add(4)
    assert.equal(calculator.runningTotal, 5)
  })

  //test: calculator.subtract()
  it('can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(calculator.runningTotal, 3)
  })

  // test: calculator.multiply()
  it("can multiply 3 by 5 and get 15", function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(calculator.runningTotal, 15)
  })

  // test: calculator.divide()
  it("can divide 21 by 7 and get 3", function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(calculator.runningTotal, 3)
  })

  // test: calculator.numberClick()
  it("can concatenate multiple number button clicks", function(){
    calculator.numberClick(7)
    calculator.numberClick(7)
    assert.equal(calculator.runningTotal, 77)
  })

  // test:calculator.operatorClick()
  it("can chain multiple operations together", function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 5)
  })

  // test: calculator.clearClick()
  it("can clear the running total without affecting the calculation", function(){
    calculator.numberClick(7)
    calculator.operatorClick('+')
    calculator.numberClick(2)
    calculator.operatorClick('-')
    calculator.numberClick(4)
    calculator.clearClick()
    calculator.numberClick(8)
    calculator.operatorClick('=')
    assert.equal(calculator.runningTotal, 1)
  })
});
