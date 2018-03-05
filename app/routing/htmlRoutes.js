const Express = require('express');
const Path = require('path');
const Router = Express.Router();
const index = '/../public/home.html';
const survey = '/../public/survey.html';

Router.get('/', function (req, res) {
  	res.sendFile(Path.join(__dirname + index));
});


Router.get('/survey', function (req, res) {	
  	res.sendFile(Path.join(__dirname + survey));
});



module.exports = Router;