const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');

// MODELS. UnA POR CADA COLECCIÓN
const user = require('./router/pais.router.js')();

let app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ROUTERS

app.use("/m1/pais", user);

module.exports = app;