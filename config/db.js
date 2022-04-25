
const mongoose = require('mongoose');
require('dotenv').config({path: './config/.env'});

mongoose
	.connect('mongodb+srv://' + process.env.DB_USER_PASS + '@lettters.w1vvt.mongodb.net/letters')
	.then(() => console.log("Connected to the DB"))
	.catch((err) => console.log("CONNECTION TO THE DB FAILED ! ", err));