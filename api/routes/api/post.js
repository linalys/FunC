const express = require("express");
const router = express.Router();
const Post = require("../../models/Post");
const passport = require("passport");
const validatePostInput = require("../../validation/post");


router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        Post.find()
            .then(posts => res.status(200).json(posts))
            .catch(err =>
                res
                    .status(400)
                    .json({ user: "Error fetching posts of logged in user" })
            );
    }
);

router.get("/post/:id", (req, res) => {
    Post.find({ _id: req.params.id })
        .then(post => res.status(200).json(post))
        .catch(err => res.status(400).json({ id: "Error fetching post by id" }));
});


router.get("/author/:author", (req, res) => {
    Post.find({ author: req.params.author })
        .then(posts => res.status(200).json(posts))
        .catch(err =>
            res
                .status(400)
                .json({ author: "Error fetching posts of specific author" })
        );
});

router.post(
    "/create",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const { errors, isValid } = validatePostInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const author = req.user.username;
        const post = {
            title: {
                en: req.body.title,
                gr: req.body.titleGR
            },
            lesson: {
                en: req.body.lesson,
                gr: req.body.lessonGR
            },
            language: req.body.language,
            hasTest: req.body.hasTest,
            lessonSummary:{
                en: req.body.lessonSummary,
                gr: req.body.lessonSummaryGR
            },
            test:{
                en: req.body.testExercise,
                gr: req.body.testExerciseGR
            },
            initialCode: req.body.initialCode,
            answer: req.body.answer
        };

        post.author = author;
        const newPost = new Post(post);
        newPost
            .save()
            .then(doc => res.json(doc))
            .catch(err => console.log({ create: "Error creating new post " + err }));
    }
);

router.patch(
    "/update/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        //const author = req.user.username;
        const { errors, isValid } = validatePostInput(req.body);
        if (!isValid) {
            return res.status(400).json(errors);
        }
        const post = {
            title: {
                en: req.body.title,
                gr: req.body.titleGR
            },
            lesson: {
                en: req.body.lesson,
                gr: req.body.lessonGR
            },
            language: req.body.language,
            hasTest: req.body.hasTest,
            lessonSummary:{
                en: req.body.lessonSummary,
                gr: req.body.lessonSummaryGR
            },
            test:{
                en: req.body.testExercise,
                gr: req.body.testExerciseGR
            },
            initialCode: req.body.initialCode,
            answer: req.body.answer
        };
        Post.update(
            { _id : req.params.id},
            { $set: post },
            { new: true }
        )
            .then(doc => {
                doc._id = req.params.id;
                console.log(doc);
                res.status(200).json(doc)
            })
            .catch(() =>
                res.status(400).json({ update: "Error updating existing post" })
            );
    }
);

router.delete(
    "/delete/:id",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
        const author = req.user.username;
        Post.findOneAndDelete({ author, _id: req.params.id })
            .then(doc => res.status(200).json(doc))
            .catch(err =>
                res.status(400).json({ delete: "Error deleting a post" })
            );
    }
);

module.exports = router;