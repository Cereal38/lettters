
import React, { useState, } from 'react';
import Letter from './Letter';
import '../../styles/components/game/ClassicGame.css';


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

// Define this outside the component otherwise it will reload everytime user click
const lettersArray = generateArrayRandomLetters(10);


/* COMPONENT */
const ClassicGame = () => {


	const [lettersUser, setLetters] = useState([]);

	function addLetter(event) {
		/* When user click on a letter add it to the list and show it in the user letters bar */

		const letter = event.target.textContent;

		if (lettersUser.length < 10) { setLetters([...lettersUser, letter]); }
	}


	return (

		<div className="classic-game">

			<div className="classic-game__given-letters">

				{ lettersArray.map(letter => <div onClick={addLetter} > <Letter car={ letter } /> </div>) }

			</div>

			<div className="classic-game__user-letters">

				{ lettersUser.map(letter => <Letter car={ letter } />) }

			</div>
		</div>
		)

}
	

export default ClassicGame;