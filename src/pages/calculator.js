import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../components/calculator.css';

const Calculator = () => {
  const [count, setCount] = useState({
    total: 0,
    next: null,
    operation: null,
  });
  const onClickHandler = (e) => {
    const data = e.target.innerHTML;
    const result = calculate(count, data);
    setCount(result);
  };

  const { total, next, operation } = count;
  return (
    <div className="big-container">
      <div className="main-container">
        <h3>Let&apos;s do some math!</h3>
        <div className="calculator-container">
          <div className="input-field">
            <h2>
              {total}
              {operation}
              {next}
            </h2>
          </div>
          <div className="calculator-box">
            <button onClick={onClickHandler} type="button">AC</button>
            <button onClick={onClickHandler} type="button">+/-</button>
            <button onClick={onClickHandler} type="button">%</button>
            <button onClick={onClickHandler} type="button" className="orange-box">÷</button>
            <button onClick={onClickHandler} type="button">7</button>
            <button onClick={onClickHandler} type="button">8</button>
            <button onClick={onClickHandler} type="button">9</button>
            <button onClick={onClickHandler} type="button" className="orange-box">x</button>
            <button onClick={onClickHandler} type="button">4</button>
            <button onClick={onClickHandler} type="button">5</button>
            <button onClick={onClickHandler} type="button">6</button>
            <button onClick={onClickHandler} type="button" className="orange-box">-</button>
            <button onClick={onClickHandler} type="button">1</button>
            <button onClick={onClickHandler} type="button">2</button>
            <button onClick={onClickHandler} type="button">3</button>
            <button onClick={onClickHandler} type="button" className="orange-box">+</button>
          </div>
          <div className="buttons">
            <button onClick={onClickHandler} type="button" className="p-0">0</button>
            <button onClick={onClickHandler} type="button">.</button>
            <button onClick={onClickHandler} type="button" className="orange-box">=</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
