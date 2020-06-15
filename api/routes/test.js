const express = require('express');
const Test = require('../models/Test');
const route = express.Router();

//get method for a specific lesson
route.get("/test/:lang/:title", (req, res, next) => {
    const lang = req.params.lang;
    const tit = req.params.title;

    Test.find()
        .where("language").equals(lang)
        .where("title").equals(tit)
        .select("title text eltitle eltext language _id")
        .exec()
        .then(docs => {
            console.log(docs);
            //   if (docs.length >= 0) {
            res.status(200).json(docs);
            //   } else {
            //       res.status(404).json({
            //           message: 'No entries found'
            //       });
            //   }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


route.post("/test/", (req, res, next) => {
    const test = new Test({
        title: req.body.title,
        text: req.body.text,
        language: req.body.language
    });
    test
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /lesson",
                createdLesson: result
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
    updateOps['title'] = req.body.title;
    updateOps['text'] = req.body.text;
    updateOps['language'] = req.body.language;
    Test.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Lesson updated',
                request: {
                    type: 'GET',
                    url: 'http://localhost:5000/lesson/' + id
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

route.delete("/:lessonId", (req, res, next) => {
    Test.remove({ _id: req.params.testId })
        .exec()
        .then(result => {
            res.status(200).json({
                message: "Lesson deleted"
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