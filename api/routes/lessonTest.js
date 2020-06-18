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
    const lang = decodeURIComponent(req.params.lang);
    const tit = decodeURIComponent(req.params.title);
    Lesson.find()
        .where("language").equals(lang)
        .where("title").equals(tit)
        .select("title text eltitle eltext language key test _id")
        .exec()
        .then(docs => {
            res.status(200).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

route.get("/get-next/:language/:title", (req, res, next) => {
    const language = decodeURIComponent(req.params.language).toLowerCase();
    const title = decodeURIComponent(req.params.title);
    Lesson.find().where("language").equals(language)
        .select("title").sort({key: 1}).exec().then(
        doc => {
            const key = doc.findIndex(t => t.title === title);
            if (key === doc.length - 1) {
                res.status(200).send('');
            }else{
                const url = "/lesson/" + encodeURIComponent(language) + "/" + encodeURIComponent(doc[key + 1].title);
                res.status(200).send(url);
            }
        }
    ).catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
});

//get method for all lesson titles for programming language => :language
route.get("/get/titles/:language", (req, res, next) => {
    const language = decodeURIComponent(req.params.language).toLowerCase();
    Lesson.find()
        .where("language").equals(language)
        .select("title eltitle")
        .sort({key: 1})
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                lessons: doc.map(less => {
                    return {
                        title: less.title,
                        eltitle: less.eltitle,
                        url: "/lesson/" + encodeURIComponent(language) + "/" + encodeURIComponent(less.title)
                    };
                })
            };
            console.log(response);
            res.status(200).json(response);
            console.log("Titles fetched");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: err});
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
    Lesson.update({_id: id}, {$set: updateOps})
        .exec()
        .then(result => {
            res.status(200).json({
                message: 'Lesson updated',
                request: {
                    type: 'GET',
                    url: '/lesson/' + id
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
    Lesson.remove({_id: req.params.lessonId})
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