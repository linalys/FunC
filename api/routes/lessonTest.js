const express = require('express');
const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const route = express.Router();

route.get("/", (req, res, next) => {
    Lesson.find()
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

route.post("/", (req, res, next) => {
    const lesson = new Lesson({
        title: req.body.title,
        text: req.body.text
    });
    lesson
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: "Handling POST requests to /products",
                createdProduct: result
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