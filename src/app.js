//require
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//const postModel = require('./api/models/postModel');
//const commentsModel = require('./api/models/commentsModel');

const postRoute = require('./api/routes/postRoute');

const mongooseParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
};
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://9c3b0b56dd21/BlogApi',mongooseParams);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

postRoute(app);

const hostname = '0.0.0.0';
const port = 3000;
app.listen(port, hostname);

