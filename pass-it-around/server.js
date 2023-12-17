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