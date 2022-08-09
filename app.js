'use strict';

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

// Configuración de archivos de rutas
var project_routes = require('./routes/project');

// Middlewares. Una capa o método que se ejecutan ANTES de ejecutar 
// la acción de un controlador.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// Configuración de rutas
app.use('/api', project_routes);

// Exportar
module.exports = app;