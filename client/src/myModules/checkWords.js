
class CheckWords {

	static checkIfWordInList(word) {
		/* If word in list return true else false */

		const listExists = ["RA", "BA", "BE", "RE"];

		return (listExists.includes(word));
	}
}

export default CheckWords;