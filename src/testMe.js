import { useState } from 'react';
import './App.css';
import Number from './Number';
import Operator from './Operator';

function App() {
  
  const [previousOperand, setPreviousOperand] = useState('');
  const [currentOperand, setCurrentOperand] = useState('');
  const [operation, setOperation] = useState(null);
  const [currentOperandTextElement, setCurrentOperandTextElement] = useState('');
  const [previousOperandTextElement, setPreviousOperandTextElement] = useState('');

useEffect(() => {
    updateDisplay();
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
      case '*':
        computation = prev * current
        break
      case '÷':
        computation = prev / current
        break
      default:
        return
    }

    // this.currentOperand = computation
    // this.operation = undefined
    // this.previousOperand = ''
    setCurrentOperand(computation);
    setOperation(null)
    setPreviousOperand('')
  } 

  const appendNumber = (number) => {

    // if (number === '.' && this.currentOperand.includes('.')) return
    // this.currentOperand = this.currentOperand.toString() + number.toString()

    if (number === '.' && currentOperand.includes('.')) return
    setCurrentOperand( currentOperand.toString() + number.toString() );

  }

  const chooseOperation = (newOperation) => {
    console.log('chooseOperation', newOperation);
    
    if (currentOperand === '') return    
    
    if (previousOperand !== '') {
      compute()
    }

    // operation = newOperation
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
    setCurrentOperandTextElement( getDisplayNumber(currentOperand) )
    
    if (operation != null) {
      setPreviousOperandTextElement(`${getDisplayNumber(previousOperand)} ${operation}` )
        
    } else {
      // this.previousOperandTextElement.innerText = ''
      setPreviousOperandTextElement('')
    }
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
    // this.currentOperand = ''
    // this.previousOperand = ''
    // this.operation = undefined

    setCurrentOperand('');
    setPreviousOperand('')
    setOperation(null);
  }

  const handleClear = () => {
    clear();
   
  }

  return (
    <div className="App">
      <Number number={"1"} onClick={handleNumberClick} />
      <Number number={"2"} onClick={handleNumberClick} />
      <Number number={"3"} onClick={handleNumberClick} />
      <Operator operator="+" onClick={handleOperatorClick} />
      <div onClick={handleEqual}>=</div>
      <div onClick={handleClear}>Clear</div>

      <div>previousOperand : {previousOperand}</div>
      <div>currentOperandTextElement : {currentOperandTextElement}</div>
      <div>previousOperandTextElement : {previousOperandTextElement}</div>
    </div>
  );
}

export default App;