//modulos
const express = require('express');
const routes = express.Router();

//Controlers
const home = require('./src/controllers/homeController');

routes.get("/", home.get);
routes.post('/', home.post);

module.exports = routes;

