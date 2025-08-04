const express = require('express');  //importing express
const cors = require('cors');
const app=express(); //creating an instance of express obj of express
app.use(cors());

app.listen(5000, () => {
    console.log('express js Server is running on port 5000');
});

app.get('/api/calc', (req, res) => {
    // res.send('Hello from the server!');
    const a=parseFloat(req.query.a);
    const b=parseFloat(req.query.b);
    let op=req.query.op;
    // if(a==NaN || b==NaN){
    //     res.send("Invalid URL");
    //     exit(0);
    // }
    let result=0;
    switch(op){
        case "add": result=a+b;
                    operator='+';
                    break;
        case "sub": result=a-b;
                    operator='-';
                    break;
        case "mul": result=a*b;
                    operator='*';
                    break;
        case "div": 
                    // if(b === 0) {
                    //     res.send("Cannot divide by zero.");
                    //     return;
                    // }
                    result=a/b;
                    operator='/';
                    break;

    }
    result=result.toFixed(2); //to convert to 2 decimal places
    console.log('Result: '+result);
    if (result === Infinity || result === -Infinity) {
        res.send("not valid ");
        return;
    }
    res.send(`The sum of ${a} ${operator} ${b} is ${result}.`);
});

app.get('/api/factorial', (req, res) => {
    const n = parseFloat(req.query.n1);
    let fact = 1;

    for (let i = 2; i <= n; i++) {
        fact *= i;
    }

    console.log("Result: " + fact);
    res.send(`Factorial of ${n} = ${fact}`);
});


// http://localhost:5000/?n1=10&n2=5