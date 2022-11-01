import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="calculator-container">
        <div className="input-field">
          <p>0</p>
        </div>
        <div className="calculator-box">
          <p>AC</p>
          <p>+/-</p>
          <p>%</p>
          <p className="orange-box">/</p>
          <p>7</p>
          <p>8</p>
          <p>9</p>
          <p className="orange-box">X</p>
          <p>4</p>
          <p>5</p>
          <p>6</p>
          <p className="orange-box">-</p>
          <p>1</p>
          <p>2</p>
          <p>3</p>
          <p className="orange-box">+</p>
        </div>
        <div className="buttons">
          <p className="p-0">0</p>
          <p>.</p>
          <p className="orange-box">=</p>
        </div>
      </div>
    );
  }
}

export default Calculator;
