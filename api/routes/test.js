const express = require('express');
const Test = require('../models/Test');
const route = express.Router();

//get method for a specific lesson
route.get("/:lang/:title", (req, res, next) => {
    const language = decodeURIComponent(req.params.lang);
    const title = decodeURIComponent(req.params.title);
    console.log("retrieving test...");
    Test.find()
        .where("language").equals(language)
        .where("title").equals(title)
        .select('+facts')
        .exec()
        .then(docs => {
            console.log(docs);
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


route.post("/", (req, res, next) => {
    const test = new Test({
        language: req.body.language,
        title: req.body.title,
        lessonSummary: req.body.lessonSummary,
        test: req.body.test,
        initialCode: req.body.initialCode,
        choices: req.body.choices,
        answer: req.body.answer
    });
    test
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Test posted successfully!",
                createdTest: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

route.patch("/:testId", (req, res, next) => {
    const id = req.params.testId;
    const updateOps = {};
    updateOps['language'] = req.body.language;
    updateOps['title'] = req.body.title;
    updateOps['lessonSummary'] = req.body.lessonSummary;
    updateOps['test'] = req.body.test;
    updateOps['initialCode'] = req.body.initialCode;
    updateOps['choices'] = req.body.choices;
    updateOps['answer'] = req.body.answer;

    Test.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Test updated',
                request: {
                    type: 'GET',
                    url: '/test/' + id
                }
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

route.delete("/:testId", (req, res, next) => {
    Test.remove({ _id: req.params.testId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Test deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


module.exports = route;