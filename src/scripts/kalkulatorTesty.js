import {Calculator} from './kalkulatorLogika.js';

function assertEquals(expected, actual)
{
    if (expected !== actual) 
    {
      console.error(`Test failed! Expected: ${expected}, but ${actual} was given`);
    }
};
  
export const tests = 
  [
    // 1
    function shouldGetZeroAsFirstInput() 
    {
      assertEquals('0', new Calculator().text());
    },
    // 2
    function shouldTypeOne() 
    {
      // given
      const calculator = new Calculator();
      // when
      calculator.type('1');
      // then
      assertEquals('1', calculator.text());
    },
    // 3
    function shouldTypeOnePlus() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.plus();
        // then
        assertEquals('1+', calculator.text());
    },
    // 4
    function shouldTypeOneMinus() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.minus();
        // then
        assertEquals('1-', calculator.text());
    },
    // 5
    function shouldTypeOneMinusAfterPlus() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.plus();
        calculator.minus();
        // then
        assertEquals('1-', calculator.text());
    },
    // 6
    function shouldTypeTwoDigitNumber() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.type('2');
        // then
        assertEquals('12', calculator.text());
    },
    // 7
    function shouldTypeTwoNumbers() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.type('2');
        calculator.plus();
        calculator.type('3');
        calculator.type('4');
        // then
        assertEquals('12+34', calculator.text());
    },
    // 8
    function shouldAdd() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.plus();
        calculator.type('7');
        calculator.calculate();
        // then
        assertEquals('11', calculator.text());
    },
    // 9
    function shouldAddTwoNumbersAndTypePlus() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.plus();
        calculator.type('7');
        calculator.plus();
        // then
        assertEquals('11+', calculator.text());
    },
    // 10
    function shouldAddThreeNumbers() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.plus();
        calculator.type('7');
        calculator.calculate();
        calculator.plus();
        calculator.type('2');
        calculator.calculate();
        // then
        assertEquals('13', calculator.text());
    },
    // 11
    function shouldSubtract() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.minus();
        calculator.type('7');
        calculator.calculate();
        // then
        assertEquals('-3', calculator.text());
    },
    // 12
    function shouldTypeMultiplication() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.multiply();
        calculator.type('7');
        // then
        assertEquals('4*7', calculator.text());
    },
    // 13
    function shouldTypeDivision() 
    {
        // given
        const calculator = new Calculator();;
        // when
        calculator.type('21');
        calculator.divide();
        calculator.type('7');
        // then
        assertEquals('21/7', calculator.text());
    },
    // 14
    function shouldMultiply() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('4');
        calculator.multiply();
        calculator.type('7');
        calculator.calculate();
        // then
        assertEquals('28', calculator.text());
    },
    // 15
    function shouldDivide() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('21');
        calculator.divide();
        calculator.type('7');
        calculator.calculate();
        // then
        assertEquals('3', calculator.text());
    },
    // 16
    function shouldCalculateAutomaticallyPlus() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('21');
        calculator.divide();
        calculator.type('7');
        calculator.plus();
        // then
        assertEquals('3+', calculator.text());
    },
    // 17
    function shouldCalculateAutomaticallySubtract() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('21');
        calculator.divide();
        calculator.type('7');
        calculator.minus();
        // then
        assertEquals('3-', calculator.text());
    },
    // 18
    function shouldResultRealValue() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.divide();
        calculator.type('2');
        calculator.calculate();
        // then
        assertEquals('0.5', calculator.text());
    },
    // 19
    function shouldOperateOnRealValues() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.type('.');
        calculator.type('5');
        calculator.plus();
        calculator.type('2');
        calculator.type('.');
        calculator.type('5');
        calculator.calculate();
        // then
        assertEquals('4', calculator.text());
    },
    // 20
    function shouldCalculateAutomaticallySubtract() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('0');
        calculator.type('0');
        calculator.type('1');
        // then
        assertEquals('1', calculator.text());
      },
    // 21
    function shouldGiveZero() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.insertMinus();
        calculator.plus();
        calculator.type('1');
        calculator.calculate();
        // then
        assertEquals('0', calculator.text());
      },
    // 22
    function shouldMultiplyMinusNumers() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.insertMinus();
        calculator.multiply();
        calculator.type('3');
        calculator.insertMinus();
        calculator.calculate();
        // then
        assertEquals('3', calculator.text());
      },
    // 23
    function shouldNotInsertMinusTwice() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.insertMinus();
        calculator.insertMinus();
        // then
        assertEquals('-1', calculator.text());
    },
    // 24
    function shouldReturnErrorAfterDivideByZero() 
    {
        // given
        const calculator = new Calculator();
        // when
        calculator.type('1');
        calculator.divide();
        calculator.type('0');
        calculator.calculate();
        // then
        assertEquals("Can't divide by 0!", calculator.text());
    }
  ];