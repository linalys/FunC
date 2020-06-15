const express = require('express');
const Lesson = require('../models/lesson');
const route = express.Router();

route.get("/:lang/:key", (req, res, next) => {
    const lang = req.params.lang;
    const key = req.params.key;
    Lesson.find()
        .where("language").equals(lang)
        .where("key").equals(key)
        .select("title language key _id")
        .exec()
        .then(doc => {
            const response = {
                lessons: doc.map(less => {
                    return {
                        url: less.language + '/' + less.title.replace(/ /g, "-")
                    };
                })
            };
            res.status(200).json(response);
            console.log("Titles fetched");
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = route;