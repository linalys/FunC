const express = require('express');
const mongoose = require('mongoose');
const Lesson = require('../models/lesson');
const route = express.Router();

route.get("/", (req, res, next) => {
    Lesson.find()
        .select("title text language _id")
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

//get method for a specific lesson
route.get("/:lang/:title", (req, res, next) => {
    const lang = req.params.lang;
    const tit = req.params.title;
    Lesson.find()
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

//get method for all lesson titles ENGLISH
route.get("/titles", (req, res, next) => {
    Lesson.find()
        .where("language").equals("c++")
        .select("title")
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                lessons: doc.map(less => {
                    return {
                        title: less.title,
                        url: "lesson/" + less.title.replace(/ /g, "-")
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
        .select("title eltitle")
        .exec()
        .then(doc => {
            const response = {
                count: doc.length,
                lessons: doc.map(less => {
                    return {
                        title: less.eltitle,
                        url: "lesson/" + less.title.replace(/ /g, "-")
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

const axios = require('axios');

state = {
    title: '',
    text: '',
    language: '',
    posts: []
};

getBlogPost = () => {
    axios.get('/abc')
        .then((response) => {
            const data = response.data;
            this.setState({ posts: data });
            console.log('Data has been received!!');
        })
        .catch(() => {
            alert('Error retrieving data!!!');
        });
}


getState = () =>{
    return this.posts;

}




module.exports = route;