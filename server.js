const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

//set port
const PORT = process.env.PORT || 3000;

const app = express();

//use logger
app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//use static files
app.use(express.static("public"));

mongoose.connect(precess.env.MONGODB_URI || "mongodb://localhost/fitness_track", {useNewUrlParser: true});

require()