const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const testModel = {
    language: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    lessonSummary: {
        type : {
            en: String,
            gr: String
        },
        required: false
    },
    test: {
        type : {
            en: String,
            gr: String
        },
        required: false
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
        required: false
    }
};

const TestSchema = new Schema(testModel);
module.exports = mongoose.model("tests", TestSchema);