const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");

// Load input validation
const validateRegisterInput = require("../../uservalidation/register");
const validateLoginInput = require("../../uservalidation/login");

// Load User model
const User = require("../../models/UserModel");

router.post("/register", (req, res) => {
    // Form validation

    const {errors, isValid} = validateRegisterInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    User.findOne({email: req.body.email}).then(user => {
        if (user) {
            return res.status(400).json({email: "Email already exists"});
        } else {
            const newUser = new User({
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                isPremium: false
            });

            // Hash password before saving in database
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                    newUser
                        .save()
                        .then(user => res.json(user))
                        .catch(err => console.log(err));
                });
            });
        }
    });
});

router.post("/login", (req, res) => {
    // Form validation

    const {errors, isValid} = validateLoginInput(req.body);

    // Check validation
    if (!isValid) {
        return res.status(400).json(errors);
    }

    const email = req.body.email;
    const password = req.body.password;

    // Find user by email
    User.findOne({email}).then(user => {
        // Check if user exists
        if (!user) {
            return res.status(404).json({emailnotfound: "Email not found"});
        }

        // Check password
        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {
                // User matched
                // Create JWT Payload
                const payload = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    isPremium: user.isPremium
                };

                // Sign token
                jwt.sign(
                    payload,
                    keys.secretOrKey,
                    {
                        expiresIn: 31556926 // 1 year in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token
                        });
                    }
                );
            } else {
                return res
                    .status(400)
                    .json({passwordincorrect: "Password incorrect"});
            }
        });
    });
});

router.patch("/patch/:id", (req, res) => {
        const id = req.params.id;
        const updateOps = {};

        if (req.body.name !== undefined) {
            updateOps['name'] = req.body.name;
        } else if (req.body.email !== undefined) {
            updateOps['email'] = req.body.email;
        } else if (req.body.password !== undefined && req.body.oldPassword !== undefined) {
            User.findById(id).select("password").exec().then(doc => {
                if (doc.password === req.body.oldPassword) {
                    updateOps['password'] = req.body.password;
                    User.updateOne({_id: id}, {$set: updateOps}).exec()
                        .then(() => res.status(200))
                        .catch(err => res.status(400).json({error: err}))
                } else {
                    res.status(400).json({error: "Old password is incorrect."})
                }
            })
        } else if (req.body.isPremium !== undefined) {
            updateOps['isPremium'] = req.body.isPremium;
        }
        User.updateOne({_id: id}, {$set: updateOps})
            .exec()
            .then(result => {
                res.status(200).json({
                    result: result,
                    message: 'User updated',
                });
            })
            .catch(err => {
                console.log(err);
                res.status(500).json({
                    error: err
                });
            });
    }
);

router.delete("/delete/:id", (req, res) => {
    User.deleteOne({_id: req.params.id}).exec()
        .then(() => {
            res.status(200).json({
                message: "User deleted"
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;
