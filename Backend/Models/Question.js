const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    questionName: String,
    questionUrl: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    answers: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answers"
    }
    user:Object,
})

// two tables can be connected via foreign key

module.exports = mongoose.model("Questions", QuestionSchema);