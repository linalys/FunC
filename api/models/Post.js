const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = {
   title: {
      type: {
         en: String,
         gr: String
      },
      required: true
   },
   lesson: {
      type: {
         en: String,
         gr: String
      },
      required: true
   },
   language: {
      type: String,
      required: true
   },
   hasTest: {
      type: Boolean,
      required: true
   },
   lessonSummary: {
      type : {
         en: String,
         gr: String
      },
      required: false
   },
   test: {
      type : {
         en: String,
         gr: String
      },
      required: false
   },
   initialCode: {
      type: String,
      required: false
   },
   answer: {
      type: String,
      required: false
   },
   author: {
      type: String,
      required: true
   },
   date: {
      type: Date,
      default: Date.now
   }
};

const PostSchema = new Schema(post);

module.exports = mongoose.model("posts", PostSchema);
