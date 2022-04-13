
import React, { useState, } from 'react';
import Letter from './Letter';
import '../../styles/components/game/ClassicGame.css';


const ClassicGame = () => {

	const [lettersClicked, setLetters] = useState([]);
	
	function addLetter(index) {

		setLetters([...lettersClicked, lettersArray[index]]);
		console.log(lettersClicked);
	}


	function generateRandomLetter() {
	/* Return a random caps letter */
	
	const asciiValue = Math.floor(Math.random() * 26) + 65;;
	const letter = String.fromCharCode(asciiValue);

	return letter;
	}

	function generateArrayRandomLetters(arrayLength) {
		/* Return an array with 'arrayLength' letters */

		let lettersArray = [];

		for (let i = 0; i < arrayLength; i++) { lettersArray.push(generateRandomLetter()); }

		return lettersArray;
	}

	const lettersArray = generateArrayRandomLetters(10);

	return (

		<div className="classic-game">		

			<div className="classic-game__given-letters">
				<Letter car={ lettersArray[0] } onClick={() => {addLetter(0)} } />
				<Letter car={ lettersArray[1] } />
				<Letter car={ lettersArray[2] } />
				<Letter car={ lettersArray[3] } />
				<Letter car={ lettersArray[4] } />
				<Letter car={ lettersArray[5] } />
				<Letter car={ lettersArray[6] } />
				<Letter car={ lettersArray[7] } />
				<Letter car={ lettersArray[8] } />
				<Letter car={ lettersArray[9] } />
			</div>

			<div className="classic-game__user-letters">
				<Letter car={ lettersClicked[0] } />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
				<Letter />
			</div>
		</div>
		)

}
	

export default ClassicGame;