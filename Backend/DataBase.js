// connecting with the DB
const mongoose = require("mongoose");
require('dotenv').config();

const url = `${process.env.DB_Url}`;

module.exports.connect = () => {
    mongoose.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => {
        console.log("MongoDB connected Successfully");
    }).catch((err) => {
        console.log(`The error while connecting mongodb: error: ${err}`);
    })
}