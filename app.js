const express = require('express');
const filmSearchRoute = require('./routes/filmSearch');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'OPTIONS');
    next();
})

app.use(filmSearchRoute);

app.listen(8000);