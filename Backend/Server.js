const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const db = require('./DataBase');
const router = require('./Routes/Index');
require('dotenv').config();
const app = express();
let port = process.env.PORT || 80;

db.connect();

// middle ware: 
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({extended: true, limit: "50mb"}));

// cors: resolve cross origin
app.use((req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Headers", "*");
    next();
});

// routes: 
app.use("/api", router);

app.use('/uploads', express.static(path.join(__dirname, "/../uploads")));
app.use(express.static(path.join(__dirname, "/../frontend/build")));

app.get("*", (req, res) => {
    try{
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
    }catch(e){
        res.send("Unreached!....");
    }
});

app.use(cors());

app.listen(port, () => {
    console.log(`The site is runing on ${port}`)
})