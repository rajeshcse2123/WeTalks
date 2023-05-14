const express = require('express');
const router = express.Router();
const questionRouter = require('./Question');
const answerRouter = require('./Answer');

router.get('/', ((req, res) => {
    res.send("Api Reserved in index.js");
}));

router.use('/questions', questionRouter); // connection for posting questions
router.use('/answers', answerRouter);

module.exports = router