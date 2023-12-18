const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send(`
        <h1>99 bottles of beer on the wall</h1>
        <h1>99 bottles of beer</h1>
        <a href='/98'><h2>Take one down, pass it around</h2></a>
        <h1>98 bottles of beer on the wall</h1>
        `)
})

// Fibonacci Number

app.get('/fibonacci/:num', (req, res) => {
    const inputNumber = parseInt(req.params.num)

    function isPerfectSquare(n) {
    const sqrt = Math.sqrt(n);
    return sqrt === Math.floor(sqrt);
    }

    function isFibonacciNumber(number) {
    return (
        isPerfectSquare(5 * number ** 2 + 4) ||
        isPerfectSquare(5 * number ** 2 - 4)
    );
    }


    if (isFibonacciNumber(inputNumber)) {
        res.send(`
        <h1>Very good. It is Fibonacci.</h1>
        `)
    } else {
        res.send(`
        <h1>I can tell this is not a Fibonacci number</h1>
        `)
    }
})

app.get('/:number_of_bottles', (req, res) => {
    const numBottles = parseInt(req.params.number_of_bottles)
    let nextBottle = numBottles - 1

    if(nextBottle > 0) {
        res.send(`
        <h1>${req.params.number_of_bottles} bottles of beer on the wall</h1>
        <h1>${req.params.number_of_bottles} bottles of beer</h1>
        <a href='/${nextBottle}'><h2>Take one down, pass it around</h2></a>
        <h1>${req.params.number_of_bottles - 1} bottles of beer on the wall</h1>
        `)
    } else {
        res.send(`
        <h1>${req.params.number_of_bottles} bottle of beer on the wall</h1>
        <h1>${req.params.number_of_bottles} bottle of beer</h1>
        <a href='/'><h2>Take one down, pass it around</h2></a>
        <h1>${req.params.number_of_bottles - 1} bottles of beer on the wall</h1>
        `)
    }
})

app.listen(3000, () => {
    console.log('Port is now ACTIVE')
})