const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");


const userRoutes = require('./routes/user');
const runCplusplusRouter = require('./routes/runCplusplus');
app.use('/api/run', runCplusplusRouter);


var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb://func:func@func-shard-00-00-6awtr.mongodb.net:27017,func-shard-00-01-6awtr.mongodb.net:27017,func-shard-00-02-6awtr.mongodb.net:27017/test?ssl=true&replicaSet=FunC-shard-0&authSource=admin&retryWrites=true&w=majority";
MongoClient.connect(uri, function(err, client) {
    console.log("CONNECTED");
    // perform actions on the collection object
    client.close();
});
mongoose.Promise = global.Promise;

app.use(morgan("dev"));
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

// Routes which should handle requests
app.use("/user", userRoutes);

app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;