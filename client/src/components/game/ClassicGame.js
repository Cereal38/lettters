
import React, { useState, useReducer, } from 'react';
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



/* COMPONENT */
const ClassicGame = () => {

	// lettersArray -> Letters displayed in 1st square
	const[lettersArray, setLettersArray] = useState(generateArrayRandomLetters(10));

	// letterUser = Letters displayed in 2nd square
	const [lettersUser, setLettersUser] = useState([]);

	// Array is linked to first square. Click on first letter -> clickable[0] = false
	// Remove first letter from second square -> clickable[0] = true
	const [clickable, setClickable] = useState([true, true, true, true, true, true, true, true, true, true]);



	function changeClickable(index, isTrue) {
		/* Modify clickable array */

		// Copy clickable array
		let clickableCopy = clickable;
		clickableCopy[index] = isTrue;

		// Change old array with new values
		setClickable(clickableCopy);
	}


	function firstSquareLetterClicked(event, index) {
		/* When user click on a letter add it to the lettersUser and show it in the 2nd square
		Also modify clickable array */

		if (lettersUser.length < 10 && clickable[index] == true) {

			const letter = event.target.textContent;

			setLettersUser([...lettersUser, letter]);
			changeClickable(index, false);
		}
	}


	function clearLettersUser() {
		/* lettersUser -> Empty array
		clickable -> All true*/

		setLettersUser([]);
		setClickable([true, true, true, true, true, true, true, true, true, true]);
	}


	function showInfos() {
		/* TEMP FUNC : Display some infos */

		console.log("LettersArray : ", lettersArray);
		console.log("LettersUser : ", lettersUser);
		console.log("Clickable : ", clickable);
	}



	return (

		<div className="classic-game">

			<button onClick={showInfos} > Show infos </button>

			<div className="classic-game__given-letters">

				{ lettersArray.map((letter, index) => <div key={`${letter}-${index}`} onClick={(event) => firstSquareLetterClicked(event, index)} >
				
					<Letter car={ letter } clickable={ clickable[index] } />
				
				</div>) }

			</div>

			<div className="classic-game__user-letters">

				{ lettersUser.map((letter, index) => <div key={`${letter}-${index}`} >

					<Letter car={ letter } clickable={ false } />

				</div>) }

			</div>

			<div className="classic-game__buttons-box">

				<button className="buttons-box__clear-button" onClick={ clearLettersUser } > Clear </button>
				<button className="buttons-box__submit-button" > Submit </button>

			</div>

		</div>
		)

}
	

export default ClassicGame;