const express = require('express');
const Lesson = require('../models/lesson');
const route = express.Router();


route.get("/:tit", (req, res) =>{
    const tit = req.params.tit;
    Lesson.find()
        .where("title").equals(tit)
        .select("title test")
        .exec()
        .then(doc => {
            console.log(doc);
            res.status(200).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
});


module.exports = route;