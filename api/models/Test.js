const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testModel = {
    language: {
        type: String,
        required: true
    },
    lessonSummary:{
        en:{
            type: String
        },
        gr:{
            type: String
        },
        required: true
    },
    test: {
        en:{
            type: String
        },
        gr:{
            type: String
        },
        required: true
    },
    initialCode: {
        type: String,
        required: false
    },
    choices: {
        type: String,
        required: false
    },
    answer: {
        type: String,
        required: true
    }
};

const TestSchema = new Schema(testModel);
module.exports = mongoose.model("tests", TestSchema);