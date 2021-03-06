const express = require('express');
const app = express();
const port = 8000;
let models = require("./models")
let bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(express.static('api/static'));


let quizRoutes = require("./api/quizRoutes")
let courseRoutes = require("./api/courseRoutes")

app.use('/course', courseRoutes(models))
app.use('/quiz', quizRoutes(models))

let AuthController = require('./auth/AuthController');
app.use('/api/auth', AuthController(models));

models.sequelize.sync().then(function () {
  app.listen(port, () => {
    console.log("App running on port: " + port)
  });
});
