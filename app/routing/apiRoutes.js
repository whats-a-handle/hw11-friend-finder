const Express = require('express');
const Path = require('path');
const Router = Express.Router();
const Users = require('../data/user.js');

Router.post('/api/friends', function (req, res) {
	console.log('Posting to Survey');
	console.log(req.body);
	//Users.userList.push(req.body);

	const newUser = req.body;
	let matchedUser = {};
	newUser.score = newUser.answerArray.reduce((a,b)=>{return parseInt(a)+ parseInt(b);});

	if(Users.userList.length > 0){
		matchedUser = Users.findMatch(newUser);
		res.json(matchedUser);
	}
	else{
		res.end();
	}

	Users.userList.push(newUser);
});

Router.get('/api/friends', function(req,res){
	res.send(Users);
})



module.exports = Router;