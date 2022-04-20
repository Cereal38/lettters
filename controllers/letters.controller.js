
const LettersModel = require('../models/letters.model.js');
const ObjectID = require('mongoose').Types.ObjectId;


// Add one letters object
module.exports.addLetters = async (req, res) => {

	// Destructuring
	const { date, letters, possibleWords } = req.body;

	try {

		const letters = await LettersModel.create({ date, letters, possibleWords });
		res.status(201).json({ letters: letters._id });
	}
	catch(err) { res.status(200).send({ err }); }
}


// Get all letters objects in DB
module.exports.getAllLetters = async(req, res) => {

	const letters = await LettersModel.find();

	res.status(200).json(letters);
}


// Get one letters object (find by date)
module.exports.getOneLetters = async(req, res) => {

	// ObjectID return true if ID in DB
	if (!ObjectID.isValid(req.params.id)) { return res.status(400).send("ID unknown : " + req.params.id); }
	else {
		LettersModel.findById(req.params.id, (err, docs) => {

			if (!err) { res.send(docs); }
			else { console.log("ID unknown : " + req.params.id); }
		});
	}
}