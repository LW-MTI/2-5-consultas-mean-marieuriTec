/**
 * Created by desarrollo-001 on 31/08/17.
 */
const mongoose = require('mongoose');

const paisSchema = new mongoose.Schema({
    nombrepais: {
        type: String,
        required: true
    }
});

const paisModel = mongoose.model('Pais', paisSchema, 'pais');

module.exports = paisModel;