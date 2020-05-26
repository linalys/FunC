const mongoose = require('mongoose');

const URI ="mongodb+srv://fun:123@func-s6jf5.gcp.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;