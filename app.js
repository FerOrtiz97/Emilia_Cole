const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('Servidor levantado en el puerto 3000');
});

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/index.html'))
})

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/contact.html'))
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/about.html'))
})

app.get('/music', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/views/music.html'))
})

app.use(express.static(__dirname + '/public'));