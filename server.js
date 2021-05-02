const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`Bonjour tout le monde`);
});

app.listen(3000, () => {
    console.log('le serveur démarre sur le port 3000')
});