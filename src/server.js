'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const basicAuth = require('./auth/router')
app.use(basicAuth);

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=> {
    res.status(200).json('hi')
})

function start (port) {
    app.listen((port), () => {
        console.log(`listen to port${port}`);
    });
}

module.exports = {
    start: start,
    app: app
}