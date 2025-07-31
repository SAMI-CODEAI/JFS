const express = require('express');  //importing express
const cors = require('cors');
const app=express(); //creating an instance of express obj of express
app.use(cors());

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

app.get('/', (req, res) => {
    const a = parseFloat(req.query.n1);
    const b = parseFloat(req.query.n2);
    const op = req.query.op || '+'; // Default to '+' if not provided

    let result;
    let operationSymbol;

    switch (op) {
        case '+':
            result = a + b;
            operationSymbol = '+';
            break;
        case '-':
            result = a - b;
            operationSymbol = '-';
            break;
        case '*':
            result = a * b;
            operationSymbol = '*';
            break;
        case '/':
            result = a / b;
            operationSymbol = '/';
            break;
        default:
            return res.status(400).send(`Invalid operation: ${op}`);
    }

    console.log(`Result: ${result}`);
    res.send(`The result of ${a} ${operationSymbol} ${b} = ${result}`);
});
// http://localhost:5000/?n1=10&n2=5
// http://localhost:5000/?n1=10&n2=5&op=*