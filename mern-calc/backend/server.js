// const express = require('express');  //importing express
// const cors = require('cors');
// const app=express(); //creating an instance of express obj of express
// app.use(cors());

// app.listen(5000, () => {
//     console.log('express js Server is running on port 5000');
// });

// app.get('/api/calc', (req, res) => {
//     // res.send('Hello from the server!');
//     const a=parseFloat(req.query.a);
//     const b=parseFloat(req.query.b);
//     let op=req.query.op;
//     // if(a==NaN || b==NaN){
//     //     res.send("Invalid URL");
//     //     exit(0);
//     // }
//     let result=0;
//     switch(op){
//         case "add": result=a+b;
//                     operator='+';
//                     break;
//         case "sub": result=a-b;
//                     operator='-';
//                     break;
//         case "mul": result=a*b;
//                     operator='*';
//                     break;
//         case "div": 
//                     // if(b === 0) {
//                     //     res.send("Cannot divide by zero.");
//                     //     return;
//                     // }
//                     result=a/b;
//                     operator='/';
//                     break;

//     }
//     result=result.toFixed(2); //to convert to 2 decimal places
//     console.log('Result: '+result);
//     if (result === Infinity || result === -Infinity) {
//         res.send("not valid ");
//         return;
//     }
//     res.send(`The sum of ${a} ${operator} ${b} is ${result}.`);
// });

// app.get('/api/factorial', (req, res) => {
//     const n = parseFloat(req.query.n1);
//     let fact = 1;

//     for (let i = 2; i <= n; i++) {
//         fact *= i;
//     }

//     console.log("Result: " + fact);
//     res.send(`Factorial of ${n} = ${fact}`);
// });


// // http://localhost:5000/?n1=10&n2=5



// -------------------------------------------------------------------------------------------------
const express = require('express');  //importing express
const cors = require('cors');
const app = express(); //creating an instance of express
app.use(cors());

app.listen(5000, () => {
    console.log('Express.js Server is running on port 5000');
});

// ------------------------- Calculator Route -------------------------
app.get('/api/calc', (req, res) => {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    let op = req.query.op;

    let result = 0;
    let operator = '';

    switch (op) {
        case "add": result = a + b;
                    operator = '+';
                    break;
        case "sub": result = a - b;
                    operator = '-';
                    break;
        case "mul": result = a * b;
                    operator = '*';
                    break;
        case "div": result = a / b;
                    operator = '/';
                    break;
        default:
            res.send("Invalid operation");
            return;
    }

    result = result.toFixed(2); // round to 2 decimal places
    console.log('Result: ' + result);

    if (result === Infinity || result === -Infinity) {
        res.send("Division by zero is not valid");
        return;
    }

    res.send(`The result of ${a} ${operator} ${b} is ${result}.`);
});

// ------------------------- Factorial Route -------------------------
app.get('/api/factorial', (req, res) => {
    const n = parseInt(req.query.n1);

    if (isNaN(n) || n < 0) {
        res.send("Please provide a non-negative integer.");
        return;
    }

    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    console.log("Result: " + fact);
    res.send(`Factorial of ${n} = ${fact}`);
});

// ------------------------- GCD Route -------------------------
app.get('/api/gcd', (req, res) => {
    const a = parseInt(req.query.n1);
    const b = parseInt(req.query.n2);

    if (isNaN(a) || isNaN(b)) {
        res.send("Please provide two valid integers.");
        return;
    }

    // Euclidean Algorithm for GCD
    function gcd(x, y) {
        while (y !== 0) {
            let temp = y;
            y = x % y;
            x = temp;
        }
        return x;
    }

    const result = gcd(Math.abs(a), Math.abs(b));
    console.log("GCD Result: " + result);
    res.send(`GCD of ${a} and ${b} = ${result}`);
});
