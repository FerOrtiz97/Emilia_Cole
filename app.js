const express = require('express');
const app = express();
const path = require('path');
const port = 3000

app.listen(port, () => {
    console.log(`Servidor levantado en http://localhost:${port}`);
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/contact.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/about.html'))
})

app.get('/music', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/music.html'))
})

app.use(express.static(__dirname + '/public'));