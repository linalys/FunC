const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();

const MONGO_URI = process.env.MONGO_URI;
mongoose
    .connect(MONGO_URI, { useNewUrlParser: true })
    .then(() => console.log("Mongo Connection successful"))
    .catch(err => console.log("err"));

const passport = require("passport");
app.use(passport.initialize());
require("./middleware/passport")(passport);
require("./config/passport")(passport);



const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/user/", require("./routes/api/user"));
app.use("/api/posts/", require("./routes/api/post"));
app.use("/api/lesson/", require("./routes/lessonTest"));
app.use("/api/test/", require("./routes/test"));
app.use("/api/run", require("./routes/runCplusplus"));
app.use("/api/users", require("./routes/api/users"));


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




app.listen(PORT, () => {
    console.log(`Server up and running on port ${PORT}`);
});
