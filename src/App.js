import React, { useState, useEffect } from 'react';
import Number from './Number';
import Operator from './Operator';
import './App.css';

function App() {
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState(null);
  const [currentOperandTextElement, setCurrentOperandTextElement] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  // Calculator should update even one of previousOperand, currentOperand, operation is updated
  useEffect(() => {
    updateDisplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [previousOperand, currentOperand, operation])

  const compute = () => {
    let computation
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (operation) {
      case '+':
        computation = prev + current
        break
      case '-':
        computation = prev - current
        break
      case 'x':
        computation = prev * current;
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }

    setCurrentOperand(computation);
    setOperation(null)
    setPreviousOperand('')
  }

  const setPlusOrMinus = () => {
    if (currentOperand.charAt(0) === "-") {
      setCurrentOperand(currentOperand.substring(1));
    } else {
      setCurrentOperand("-" + currentOperand);
    }
  };

  const setPercentageValue = () => {
    previousOperand ? setCurrentOperand(String((parseFloat(currentOperand) / 100) * previousOperand))
      : setCurrentOperand(String(parseFloat(currentOperand) / 100));
  };


  const appendNumber = (number) => {
    if (number === '.' && currentOperand.includes('.')) return
    setCurrentOperand(currentOperand.toString() + number.toString());
    console.log(number);
  }

  const chooseOperation = (newOperation) => {
    console.log('chooseOperation', newOperation);

    if (currentOperand === '') return

    if (previousOperand !== '') {
      compute()
    }
    setOperation(newOperation)
    setPreviousOperand(currentOperand)
    setCurrentOperand('')
  }

  const getDisplayNumber = (number) => {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  const updateDisplay = () => {
    setCurrentOperandTextElement(getDisplayNumber(currentOperand))
  }

  const handleNumberClick = (number) => {
    appendNumber(number);
  }

  const handleOperatorClick = (number) => {
    chooseOperation(number);
  }

  const handleEqual = () => {
    compute()
  }

  const clear = () => {
    setCurrentOperand('');
    setPreviousOperand('')
    setOperation(null);
  }

  const handleClear = () => {
    clear();
  }


  return (

    <div >
      <div className={`${darkMode ? 'dark' : 'lite'} container`}>
        <div data-testId="numberPad" className="numberPad">
          <div className="output">
            <div className={`${darkMode ? 'darkText' : 'liteText'} previousOperand`}>{previousOperand}</div>
            <div className="current-operand">{currentOperandTextElement}</div>
            <hr className="line1" />
          </div>

          <Operator operator="AC" onClick={handleClear} />
          <Operator operator="±" onClick={setPlusOrMinus} />
          <Operator operator="%" onClick={setPercentageValue} />
          <Operator operator="÷" onClick={handleOperatorClick} />
          <Number number={"7"} onClick={handleNumberClick} />
          <Number number={"8"} onClick={handleNumberClick} />
          <Number number={"6"} onClick={handleNumberClick} />
          <Operator operator="x" onClick={handleOperatorClick} />

          <Number number={"4"} onClick={handleNumberClick} />
          <Number number={"5"} onClick={handleNumberClick} />
          <Number number={"6"} onClick={handleNumberClick} />
          <Operator operator="-" onClick={handleOperatorClick} />

          <Number number={"1"} onClick={handleNumberClick} />
          <Number number={"2"} onClick={handleNumberClick} />
          <Number number={"3"} onClick={handleNumberClick} />
          <Operator operator="+" onClick={handleOperatorClick} />

          <Number number={"0"} onClick={handleNumberClick} />
          <Number number={"."} onClick={handleNumberClick} />
          <div className="data-eqaul" onClick={handleEqual}>=</div>

          {/* Footer */}
          <div className="liteModeSymbol" style={{ color: darkMode ? "grey" : "yellow" }}>☀︎</div>
          <div className="modeSelector">
            <label className="switch">
              <input type="checkbox" onChange={() => setDarkMode(!darkMode)} />
              <div test-id='theme.slider' className="slider round"> </div>
            </label>
          </div>
          <div className="modeSymbol2" style={{ color: darkMode ? "#c96dfd" : "grey" }}>☽</div>
        </div>

      </div>

    </div>


  );
}

export default App;
