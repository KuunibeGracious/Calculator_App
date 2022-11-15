import { useState } from 'react';
import './App.css';

function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1))
    ) {
      return;
    }
    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc+value).toString())
    }
  }

  const equal = () => {
    setCalc(eval(calc).toString())
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value)
  }

  const createDigits = () => {
    const digits = []
    for (let d = 1; d < 10; d++){
      digits.push(<button className='nums' onClick={() => updateCalc(d.toString())} key={d}>{d}</button>)
    }
    return digits
  }

  const clear = () => {
    setCalc('')
    setResult(0)
  }

  return (

    <div className="app">
      <div className="display">
        <span className="result">({result})</span>
        {calc || "0"}
      </div>

      <div className="operators">
        <button onClick={() => updateCalc('/')}>/</button>
        <button onClick={() => updateCalc('*')} >*</button>
        <button onClick={() => updateCalc('+')} >+</button>
        <button onClick={() => updateCalc('-')} >-</button>
        <button onClick={clear}>C</button>
        <button onClick={deleteLast}>DEL</button>
      </div>

      <div className="digits">
        {createDigits()}
        <button onClick={() => updateCalc('0')} >0</button>
        <button onClick={() => updateCalc('.')} >.</button>
        <button onClick={() => equal('=')} >=</button>
      </div>
    </div>
  );
}

export default App;
