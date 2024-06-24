import React, { useState } from 'react';
import './calculator.css';

function Calculator() {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');
  const [isResult, setIsResult] = useState(false);

  const handleButtonClick = (value) => {
    if (isResult) {
      setExpression(value);
      setIsResult(false);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const evaluatedResult = eval(expression);
      setResult(evaluatedResult);
      setExpression(evaluatedResult.toString());
      setIsResult(true);
    } catch (error) {
      setResult('Error');
      setIsResult(true);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Telegram Calculator</h1>
        <div className="calculator">
          <div className="display">
            <span className="expression">{expression}</span>
            <span className="result">{result}</span>
          </div>
          <div className="buttons">
            <button onClick={() => handleButtonClick('1')}>1</button>
            <button onClick={() => handleButtonClick('2')}>2</button>
            <button onClick={() => handleButtonClick('3')}>3</button>
            <button onClick={() => handleButtonClick('+')}>+</button>
            <button onClick={() => handleButtonClick('4')}>4</button>
            <button onClick={() => handleButtonClick('5')}>5</button>
            <button onClick={() => handleButtonClick('6')}>6</button>
            <button onClick={() => handleButtonClick('-')}>-</button>
            <button onClick={() => handleButtonClick('7')}>7</button>
            <button onClick={() => handleButtonClick('8')}>8</button>
            <button onClick={() => handleButtonClick('9')}>9</button>
            <button onClick={() => handleButtonClick('*')}>*</button>
            <button onClick={handleClear}>C</button>
            <button onClick={() => handleButtonClick('0')}>0</button>
            <button onClick={handleCalculate}>=</button>
            <button onClick={() => handleButtonClick('/')}>/</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Calculator;
