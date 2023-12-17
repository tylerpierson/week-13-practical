const express = require('express') // Imported express from node modules
const app = express()

app.get('/greeting', (req, res) => {
    res.send(`<h1>Howdy, partner!</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Howdy, ${req.params.name}!</h1>`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    res.send(`<h1>${req.params.total * (req.params.tipPercentage * .01)}</h1>`)
})

const responses = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]

app.get('/magic/:question', (req, res) => {
    res.send(`
    <h2>${req.params.question}</h2>
    <h1>${responses[Math.floor(Math.random() * responses.length)]}</h1>
    `)
})

app.listen(3000, () => {
    console.log('Port is now ACTIVE')
})