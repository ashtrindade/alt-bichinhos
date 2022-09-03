const PORT = process.env.PORT || 8000
const express = require('express')
const app = express()
const data = require('./data/data').data

// API Homepage
app.get('/', (req, res) => {
    res.json('Welcome to the Alt Pets API! A collection of pet images with alt text!')
})

// All languages Endpoint
app.get('/all', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let portuguese = data[pet].altPT
    let english = data[pet].altEN

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        portuguese: portuguese,
        english: english,
    })

    res.json(random)
})

// Portuguese Endpoint
app.get('/pt', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let alt = data[pet].altPT

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: alt,
    })

    res.json(random)
})

// English Endpoint
app.get('/en', (req, res) => {
    // Get random id
    let id = data[Math.floor(Math.random() * data.length)].id
    let pet = data.findIndex((img) => img.id == id)

    // Get random file + alt text from id
    let file = data[pet].file
    let alt = data[pet].altEN

    // Push itens to front-end
    let random = []
    random.push({
        id: id,
        file: file,
        alt: alt,
    })

    res.json(random)
})

// Run app
app.listen(PORT, () => console.log(`server running on PORT ${PORT}`))