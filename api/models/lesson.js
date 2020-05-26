const mongoose = require('mongoose');

const lesson = new mongoose.Schema({
    title: {
        type: String
    },
    text: {
        type: String
    }
});

module.exports = Lesson = mongoose.model('lesson', lesson);
