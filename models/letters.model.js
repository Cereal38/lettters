
const mongoose = require('mongoose');

// Create letters schema (Contain a 10 car list and a list with all possibles words)
const lettersSchema = new mongoose.Schema({

	date: { type: String, require: true, unique: true },

	letters: { type: [String], require: true, unique: true, minLength: 10, maxLength: 10 },

	possibleWords: { type: [String], require: true }
},

{
	timestamps: true,
});


// Export
const LettersModel = mongoose.model('LettersModel', lettersSchema);
module.exports = LettersModel;