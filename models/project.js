'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    description: String,
    category: String,
    year: Number,
    langs: String,
    image: String
});

// Project guarda los documentos en la colección projects de mongodb
module.exports = mongoose.model('Project', ProjectSchema);