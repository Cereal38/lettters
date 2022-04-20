
const express = require('express');
require('dotenv').config({path: './config/.env'});
require('./config/db');

const lettersRoutes = require('./routes/letters.routes.js');

const app = express();


// Modif req - Convert it to json
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/api/letters', lettersRoutes);


app.listen(process.env.PORT, () => {
	console.log(`Listening on port ${ process.env.PORT }`);
});