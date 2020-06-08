const mongoose = require('mongoose');

const lesson = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    eltitle: {
        type: String,
        required: true
    },
    eltext: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    }
});

module.exports = Lesson = mongoose.model('lesson', lesson);
