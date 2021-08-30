//express use to make the ROUTING and REQUEST HANDLING and responding easier to write
const express = require('express');

//mongoose use to interract witn mongoDB.
const mongoose = require('mongoose');

//body-parser use to parse incoming REQUEST bodies to middleware
const bodyParser = require('body-parser');

const app = express(); //initialize our app

//BodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI

//Connect to MongoDB
mongoose.connect(db, { userNewUrlParser: true })
    .then(() => console.log('MongoDB successfully connected'))
    .catch(err => console.log('MongoDB error'));

const port = process.env.PORT || 5000; //process.env.port is Heroku's port if you choose to deploy the app.

app.listen(port, () => console.log('Server up and running on port ${port}!'));