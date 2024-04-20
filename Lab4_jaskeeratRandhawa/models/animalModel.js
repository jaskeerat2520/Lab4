const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    Zoo: {
        type: String,
        required: true
    },
 scientificName: {
        type: String,
        required: true
    },
    commonName: {
        type: String,
        required: true
    },
    givenName: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    
    dateOfBirth: {
        type: Date,
        required: true
    }
    , Age: {
        type: Number,
        required: true
    }
    , IsTransportable: {
        type: Boolean,
        required: true
    }
});

const animalModel = new mongoose.model('Animal', animalSchema);

module.exports = animalModel;