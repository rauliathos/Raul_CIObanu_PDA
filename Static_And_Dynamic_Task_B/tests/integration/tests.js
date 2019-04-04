var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;

describe('Calculator functionality:', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })

  it("the arithmetical operations should update the display with the result of the operations", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('12')
  })

  it("should chain multiple operations together", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number3')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('4')
  })

  it("should display negative numbers", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number1')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('-8')
  })

  it("should display decimal numbers", function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number4')).click();
    element(by.css('#operator_equals')).click()
    expect(running_total.getAttribute('value')).to.eventually.equal('1.5')
  })

  // it("", function(){
  //
  // })
});
