
class LettersGenerator {


	static generateTotalRandomLetter() {
		/* Return a random caps letter */

		const asciiValue = Math.floor(Math.random() * 26) + 65;;
		const letter = String.fromCharCode(asciiValue);

		return letter;
	}

	static generateArrayTotalRandomLetters(arrayLength) {
		/* Return an array with 'arrayLength' letters */

		let lettersArray = [];

		for (let i = 0; i < arrayLength; i++) { lettersArray.push(this.generateTotalRandomLetter()); }

		return lettersArray;
	}

	static generateArrayRandomLettersWithUseRate(arrayLength) {
		/* Generate lettersArray using use rate of lettters in english */

		let lettersArray = [];
		const useRateArray = [
		"E", "E", "E", "E", "E", "E", "E", "E", "E", "E", "E", 
		"A", "A", "A", "A", "A", "A", "A", "A", 
		"R", "R", "R", "R", "R", "R", "R", "R", 
		"I", "I", "I", "I", "I", "I", "I", "I", 
		"O", "O", "O", "O", "O", "O", "O", 
		"T", "T", "T", "T", "T", "T", "T", 
		"N", "N", "N", "N", "N", "N", "N", 
		"S", "S", "S", "S", "S", "S", 
		"L", "L", "L", "L", "L", 
		"C", "C", "C", "C", "C", 
		"U", "U", "U", "U", 
		"D", "D", "D", 
		"P", "P", "P", 
		"M", "M", "M", 
		"H", "H", "H", 
		"G", "G", 
		"B", "B", 
		"F", "F", 
		"Y", "Y",
		"W",  
		"K", 
		"V",
		"X",
		"Z",
		"J",
		"Q"];


		for (let i = 0; i < arrayLength; i++) {

			const letter = useRateArray[Math.floor(Math.random() * useRateArray.length)];
			lettersArray.push(letter);
		}

		return lettersArray;
	}


}

export default LettersGenerator;