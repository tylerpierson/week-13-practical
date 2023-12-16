const express = require('express') // Imported express from node modules
const app = express()

app.get('/greeting', (req, res) => {
    res.send(`<h1>Howdy, partner!</h1>`)
})

app.get('/greeting/:name', (req, res) => {
    res.send(`<h1>Howdy, ${req.params.name}!</h1>`)
})

app.listen(3000, () => {
    console.log('Port is now ACTIVE')
})