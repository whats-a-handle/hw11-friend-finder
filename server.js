const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const htmlRoutes = require('./app/routing/htmlRoutes.js');
const apiRoutes = require('./app/routing/apiRoutes.js');
const publicDirectory = './app/public/';



createServer = ()=>{
	const Server = {
		PORT : 8080,
		app : undefined,
	}

	Server.app = express();
	Server.app.use(htmlRoutes);
	Server.app.use(express.static(publicDirectory));
	Server.app.use(bodyParser.urlencoded({ extended: true }));
	Server.app.use(bodyParser.json());
	Server.app.use(apiRoutes)
	return Server;
}


const Server = createServer();

Server.app.listen(process.env.PORT || Server.PORT);
