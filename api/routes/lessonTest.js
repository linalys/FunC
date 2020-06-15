const express = require('express');
const Lesson = require('../models/lesson');
const route = express.Router();

route.get("/", (req, res, next) => {
    Lesson.find()
        .select("title text language _id")
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

//give programming language and title and get everything
//get method for a specific lesson
route.get("/:lang/:title", (req, res, next) => {
    const lang = req.params.lang;
    const tit = req.params.title;
    Lesson.find()
        .where("language").equals(lang)
        .where("title").equals(tit)
        .select("title text eltitle eltext language key test _id")
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

//get method for all lesson titles ENGLISH
route.get("/titles", (req, res, next) => {
    Lesson.find()
        .where("language").equals("c++")
        .select("title language")
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                lessons: doc.map(less => {
                    return {
                        title: less.title,
                        url: less.title.replace(/ /g, "-")
                    };
                })
            };
            //   if (docs.length >= 0) {
            res.status(200).json(response);
            console.log("Titles fetched");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});
//get method for all lesson titles GREEK
route.get("/eltitles", (req, res, next) => {
    Lesson.find()
        .where("language").equals("c++")
        .select("title eltitle language")
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                lessons: doc.map(less => {
                    return {
                        title: less.eltitle,
                        url: less.language + '/' + less.title.replace(/ /g, "-")
                    };
                })
            };
            //   if (docs.length >= 0) {
            res.status(200).json(response);
            console.log("Titles fetched");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});

route.post("/", (req, res, next) => {
    const lesson = new Lesson({
        title: req.body.title,
        text: req.body.text,
        language: req.body.language
    });
    lesson
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
//give lesson id for update
route.patch("/:lessonId", (req, res, next) => {
    const id = req.params.lessonId;
    const updateOps = {};
    updateOps['title'] = req.body.title;
    updateOps['text'] = req.body.text;
    updateOps['language'] = req.body.language;
    Lesson.update({ _id: id }, { $set: updateOps })
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
    Lesson.remove({ _id: req.params.lessonId })
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

//give only title, get key and id
//give programming language and title and get everything
//get method for a specific lesson


module.exports = route;