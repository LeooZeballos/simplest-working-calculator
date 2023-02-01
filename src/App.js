import { useState } from 'react';
import './App.css';

function App() {

  const [result, setResult] = useState(0);
  const [input, setInput] = useState(0);

  const add = () => {
    setResult((result) => result + input);
  };

  const subtract = () => {
    setResult((result) => result - input);
  };

  const multiply = () => {
    setResult((result) => result * input);
  };

  const divide = () => {
    setResult((result) => result / input);
  };

  const clearInput = () => {
    setInput(0);
  };

  const clearResult = () => {
    setResult(0);
  };

  return (
    <div className="App">
      <h1 className="title">Simplest Working Calculator</h1>
      <div className="calculator">
        <label className="label">Result</label>
        <div className="display"> {result} </div>
        <label className="label">Input</label>
        <input type="number" className="input" value={input} onChange={e => setInput(parseInt(e.target.value))} />
        <div className="buttons">
          <button className="button" onClick={add}>Add</button>
          <button className="button" onClick={subtract}>Subtract</button>
          <button className="button" onClick={multiply}>Multiply</button>
          <button className="button" onClick={divide}>Divide</button>
          <button className="button" onClick={clearInput}>Clear input</button>
          <button className="button" onClick={clearResult}>Clear result</button>
        </div>
      </div>
    </div>
  );
}

export default App;
