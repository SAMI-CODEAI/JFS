// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   // For calculator
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const [op, setOp] = useState('add');
//   const [calcResult, setCalcResult] = useState('');

//   // For factorial
//   const [n, setN] = useState('');
//   const [factResult, setFactResult] = useState('');

//   const handleCalculate = async () => {
//     if (a === '' || b === '') {
//       setCalcResult('Please enter both numbers.');
//       return;
//     }
    

//     try {
//       const response = await fetch(`http://localhost:5000/api/calc?a=${a}&b=${b}&op=${op}`);
//       const data = await response.text();
//       setCalcResult(data);
//     } catch (error) {
//       setCalcResult('Error contacting the server.');
//     }
//   };

//   const handleFactorial = async () => {
//     if (n === '') {
//       setFactResult('Please enter a number.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/factorial?n1=${n}`);
//       const data = await response.text();
//       setFactResult(data);
//     } catch (error) {
//       setFactResult('Error contacting the server.');
//     }
//   };

//   return (
//     <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
//       <h1>Server-Side Calculator</h1>

//       {/* Basic Calculator Section */}
//       <div style={{ marginBottom: '40px' }}>
//         <input
//           type="number"
//           value={a}
//           placeholder="Enter first number"
//           onChange={(e) => setA(e.target.value)}
//           style={{ margin: '10px', padding: '8px' }}
//         />

//         <select value={op} onChange={(e) => setOp(e.target.value)} style={{ margin: '10px', padding: '8px' }}>
//           <option value="add">+</option>
//           <option value="sub">−</option>
//           <option value="mul">×</option>
//           <option value="div">÷</option>
//         </select>

//         <input
//           type="number"
//           value={b}
//           placeholder="Enter second number"
//           onChange={(e) => setB(e.target.value)}
//           style={{ margin: '10px', padding: '8px' }}
//         />

//         <br />

//         <button onClick={handleCalculate} style={{ marginTop: '20px', padding: '10px 20px' }}>
//           Calculate
//         </button>

//         {calcResult && (
//           <div style={{ marginTop: '20px', fontSize: '18px' }}>
//             <strong>Result:</strong> {calcResult}
//           </div>
//         )}
//       </div>

//       <hr style={{ margin: '40px auto', width: '50%' }} />

//       {/* Factorial Section */}
//       <div>
//         <h2>Factorial Calculator</h2>
//         <input
//           type="number"
//           value={n}
//           placeholder="Enter a number"
//           onChange={(e) => setN(e.target.value)}
//           style={{ margin: '10px', padding: '8px' }}
//         />
//         <br />
//         <button onClick={handleFactorial} style={{ marginTop: '10px', padding: '10px 20px' }}>
//           Calculate Factorial
//         </button>

//         {factResult && (
//           <div style={{ marginTop: '20px', fontSize: '18px' }}>
//             <strong>Result:</strong> {factResult}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;




// // http://localhost:5000/?n1=10&n2=5&op=*



















// ---------------------------------------------------






// import React, { useState } from 'react';
// function App() {
//   const [a, setA] = useState('');
//   const [b, setB] = useState('');
//   const [op, setOp] = useState('add');
//   const [calcResult, setCalcResult] = useState('operation not started ');
//   const [factResult, setFactResult] = useState('fact operation not started');
//   const handleCalc = async () => {
//     if (a === '' || b === '') {
//       setCalcResult('Please enter both numbers.');
//       return;
//     }

//     try {
//       const response = await fetch(`http://localhost:5000/api/calc?a=${a}&b=${b}&op=${op}`);
//       const data = await response.text();
//       setCalcResult(data);
//     } catch (error) {
//       setCalcResult('Error contacting the server.');
//     }
//   };
//   const handleFactorial = async () => {
//     if (a === '') {
//       setFactResult('Please enter a number.');
//       return;
//     }
//     try {
//       const response = await fetch(`http://localhost:5000/api/factorial?n1=${a}`);
//       const data = await response.text();
//       setFactResult(data);
//     } catch (error) {
//       setFactResult('Error contacting the server.');
//     }
//   }
//   return (
    
//     <div style={({ textAlign: 'center', fontFamily:'Arial' })}>
//       <h3>Calculator</h3>
//       <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder='ENTER FIRST NO' />
//       <select value={op} onChange={(e) => setOp(e.target.value)}>
//         <option value ="add">+</option>
//         <option value ="sub">-</option>
//         <option value ="mul">*</option>
//         <option value ="div">/</option>
//       </select>
//       <input type="number" value={b} onChange={(e)=> setB(e.target.value)} placeholder='Enter second number' />
//       <button onClick={handleCalc}>Calculate</button>
//       <div style={{ marginTop: '20px', fontSize: '18px' }}>
//           <strong>Result:</strong> {calcResult}
//       </div>
//       <hr style={{ margin: '40px auto', width: '50%' }} />
      
//       {/* Factorial Section */}

//       <h3>Factorial Calculator</h3>
//       <input type="number" value={a} onChange={(e) => setA(e.target.value)} placeholder='Enter a number' />
//       <button onClick={handleFactorial}>Calculate Factorial</button>
//       <div style={{ marginTop: '20px', fontSize: '18px' }}>
//           <strong>Factorial Result:</strong> {factResult}
//     </div>
//     </div>

//   );
  
// }

//   export default App; 



// -----------------------------------------------------------------------------------------------------------------


import React, { useState } from 'react';

function App() {
  // State for Basic Calculator
  const [calcA, setCalcA] = useState('');
  const [calcB, setCalcB] = useState('');
  const [op, setOp] = useState('add');
  const [calcResult, setCalcResult] = useState('Operation not started');

  // State for Factorial Calculator
  const [factN, setFactN] = useState('');
  const [factResult, setFactResult] = useState('Fact operation not started');

  // State for GCD Calculator
  const [gcdA, setGcdA] = useState('');
  const [gcdB, setGcdB] = useState('');
  const [gcdResult, setGcdResult] = useState('GCD operation not started');

  const handleCalc = async () => {
    if (calcA === '' || calcB === '') {
      setCalcResult('Please enter both numbers.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/calc?a=${calcA}&b=${calcB}&op=${op}`);
      const data = await response.text();
      setCalcResult(data);
    } catch (error) {
      setCalcResult('Error contacting the server.');
    }
  };

  const handleFactorial = async () => {
    if (factN === '') {
      setFactResult('Please enter a number.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/factorial?n1=${factN}`);
      const data = await response.text();
      setFactResult(data);
    } catch (error) {
      setFactResult('Error contacting the server.');
    }
  };

  const handleGCD = async () => {
    if (gcdA === '' || gcdB === '') {
      setGcdResult('Please enter both numbers for GCD.');
      return;
    }

    try {
      const response = await fetch(`http://localhost:5000/api/gcd?n1=${gcdA}&n2=${gcdB}`);
      const data = await response.text();
      setGcdResult(data);
    } catch (error) {
      setGcdResult('Error contacting the server.');
    }
  };

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial' }}>
      {/* Basic Calculator */}
      <h3>Basic Calculator</h3>
      <input
        type="number"
        value={calcA}
        onChange={(e) => setCalcA(e.target.value)}
        placeholder="Enter first number"
      />
      <select value={op} onChange={(e) => setOp(e.target.value)}>
        <option value="add">+</option>
        <option value="sub">-</option>
        <option value="mul">*</option>
        <option value="div">/</option>
      </select>
      <input
        type="number"
        value={calcB}
        onChange={(e) => setCalcB(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleCalc}>Calculate</button>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Result:</strong> {calcResult}
      </div>

      <hr style={{ margin: '40px auto', width: '50%' }} />

      {/* Factorial Calculator */}
      <h3>Factorial Calculator</h3>
      <input
        type="number"
        value={factN}
        onChange={(e) => setFactN(e.target.value)}
        placeholder="Enter a number"
      />
      <button onClick={handleFactorial}>Calculate Factorial</button>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>Factorial Result:</strong> {factResult}
      </div>

      <hr style={{ margin: '40px auto', width: '50%' }} />

      {/* GCD Calculator */}
      <h3>GCD Calculator</h3>
      <input
        type="number"
        value={gcdA}
        onChange={(e) => setGcdA(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        value={gcdB}
        onChange={(e) => setGcdB(e.target.value)}
        placeholder="Enter second number"
      />
      <button onClick={handleGCD}>Calculate GCD</button>
      <div style={{ marginTop: '20px', fontSize: '18px' }}>
        <strong>GCD Result:</strong> {gcdResult}
      </div>
    </div>
  );
}

export default App;
