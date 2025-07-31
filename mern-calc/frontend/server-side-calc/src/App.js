import React, { useState } from 'react';
import './App.css';

function App() {
  // For calculator
  const [a, setA] = useState('');
  const [b, setB] = useState('');
  const [op, setOp] = useState('add');
  const [calcResult, setCalcResult] = useState('');

  // For factorial
  const [n, setN] = useState('');
  const [factResult, setFactResult] = useState('');

  const handleCalculate = async () => {
    if (a === '' || b === '') {
      setCalcResult('Please enter both numbers.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/calc?a=${a}&b=${b}&op=${op}`);
      const data = await response.text();
      setCalcResult(data);
    } catch (error) {
      setCalcResult('Error contacting the server.');
    }
  };

  const handleFactorial = async () => {
    if (n === '') {
      setFactResult('Please enter a number.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/factorial?n1=${n}`);
      const data = await response.text();
      setFactResult(data);
    } catch (error) {
      setFactResult('Error contacting the server.');
    }
  };

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Server-Side Calculator</h1>

      {/* Basic Calculator Section */}
      <div style={{ marginBottom: '40px' }}>
        <input
          type="number"
          value={a}
          placeholder="Enter first number"
          onChange={(e) => setA(e.target.value)}
          style={{ margin: '10px', padding: '8px' }}
        />

        <select value={op} onChange={(e) => setOp(e.target.value)} style={{ margin: '10px', padding: '8px' }}>
          <option value="add">+</option>
          <option value="sub">−</option>
          <option value="mul">×</option>
          <option value="div">÷</option>
        </select>

        <input
          type="number"
          value={b}
          placeholder="Enter second number"
          onChange={(e) => setB(e.target.value)}
          style={{ margin: '10px', padding: '8px' }}
        />

        <br />

        <button onClick={handleCalculate} style={{ marginTop: '20px', padding: '10px 20px' }}>
          Calculate
        </button>

        {calcResult && (
          <div style={{ marginTop: '20px', fontSize: '18px' }}>
            <strong>Result:</strong> {calcResult}
          </div>
        )}
      </div>

      <hr style={{ margin: '40px auto', width: '50%' }} />

      {/* Factorial Section */}
      <div>
        <h2>Factorial Calculator</h2>
        <input
          type="number"
          value={n}
          placeholder="Enter a number"
          onChange={(e) => setN(e.target.value)}
          style={{ margin: '10px', padding: '8px' }}
        />
        <br />
        <button onClick={handleFactorial} style={{ marginTop: '10px', padding: '10px 20px' }}>
          Calculate Factorial
        </button>

        {factResult && (
          <div style={{ marginTop: '20px', fontSize: '18px' }}>
            <strong>Result:</strong> {factResult}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
