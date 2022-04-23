
const LettersModel = require('../models/letters.model.js');
const ObjectID = require('mongoose').Types.ObjectId;


// Add one letters object
module.exports.addLetters = async (req, res) => {

	// Destructuring
	const { date, letters, possibleWords } = req.body;

	try {

		const user = await LettersModel.create({date, letters, possibleWords});
		res.status(201).json({ letters: letters._id });
	}
	catch(err) { res.status(200).send({ err }); console.log(err) }
}


// Get all letters objects in DB
module.exports.getAllLetters = async(req, res) => {

	const letters = await LettersModel.find();

	res.status(200).json(letters);
}


// Get one letters object (find by date)
module.exports.getOneLetters = async(req, res) => {

	try {

		const resultJson = await LettersModel.findOne({ date: req.params.date });
		res.status(200).json(resultJson);
	}
	catch(err) { res.status(200).send({ err }); console.log(err) }
}