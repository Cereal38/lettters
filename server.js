
const express = require('express');
const cors = require('cors');
const lettersRoutes = require('./routes/letters.routes.js');
require('dotenv').config({path: './config/.env'});
require('./config/db');

const app = express();

// Only client part of the website is allowed to do requests
const corsOptions = {

	origin: process.env.CLIENT_URL,
	credentials: true,
	'allowedHeaders': ['sessionId', 'Content-Type'],
	'exposedHeaders': ['sessionId'],
	'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
	'preflightContinue': false
}

app.use(cors(corsOptions));


// Modif req - Convert it to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/letters', lettersRoutes);


app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${ process.env.PORT }`);
});