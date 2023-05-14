const express = require("express");
const router = express.Router();
const questionDB = require("../Models/Question.js");

// request to post the questions on DB
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    await questionDB
      .create({
        questionName: req.body.questionName,
        questionUrl: req.body.questionUrl,
        user: req.body.user
      })
      .then(() => {
        res.status(201).send({
          status: true,
          message: "Question added successfully",
        });
      })
      .catch((e) => {
        res.status(400).send({
          status: false,
          message: "Not authorized, Qusetion not added",
        });
      });
  } catch (e) {
    res.status(500).send({
      status: false,
      message: "Sever side problem occured, Error in adding question",
    });
  }
});
// request to get the question from DB

router.get("/", async (req, res) => {
  /*
  There is a feature in mongoDB used to join two tables
  use to join questions with answers
  but we have only reference of the answers
  to join two collections or tables in mongoDB, we will use
  1. mongoDB aggregration with pipeline
  2. mongoDB aggregration with lookup
  */
  try {
    await questionDB.aggregate([
      {
        $lookup: {
          from: "answers", // collection to join
          localField: "_id", // field from input
          foreignField: "questionId", //questionId: { type: mongoose.Schema.Types.ObjectId, ref: "questions",} : in AnswerSchema of models directory
          as: "allAnswers" // output array field
        },
      },
    ]).exec().then((doc) => {
      res.status(200).send(doc);
    }).catch((e) => {
      res.status(500).send({
        status: false,
        message: "Unable to get the Question"
      })
    })
  } catch (e) {
    res.send((err) => {
      res.status(500).send({
        status: false,
        message: "Unexpected error from DB"
      })
    })
  }
});

module.exports = router;
