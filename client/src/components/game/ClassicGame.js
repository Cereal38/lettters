
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


	const [lettersUser, setLetters] = useState({0: "B", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""});
	
	function addLetter(index) {

		// Use IFs to define

		setLetters([{0: "A", 1: "", 2: "", 3: "", 4: "", 5: "", 6: "", 7: "", 8: "", 9: ""}]);

		console.log(lettersUser);

		forceUpdate();
	}


	return (

		<div className="classic-game">

			<div className="classic-game__given-letters">
				<div onClick={ () => {addLetter(0)} }> <Letter car={ lettersArray[0] } /> </div>
				<div onClick={ () => {addLetter(1)} }> <Letter car={ lettersArray[1] } /> </div>
				<div onClick={ () => {addLetter(2)} }> <Letter car={ lettersArray[2] } /> </div>
				<div onClick={ () => {addLetter(3)} }> <Letter car={ lettersArray[3] } /> </div>
				<div onClick={ () => {addLetter(4)} }> <Letter car={ lettersArray[4] } /> </div>
				<div onClick={ () => {addLetter(5)} }> <Letter car={ lettersArray[5] } /> </div>
				<div onClick={ () => {addLetter(6)} }> <Letter car={ lettersArray[6] } /> </div>
				<div onClick={ () => {addLetter(7)} }> <Letter car={ lettersArray[7] } /> </div>
				<div onClick={ () => {addLetter(8)} }> <Letter car={ lettersArray[8] } /> </div>
				<div onClick={ () => {addLetter(9)} }> <Letter car={ lettersArray[9] } /> </div>
			</div>

			<div className="classic-game__user-letters">
				<Letter car={ lettersUser[0] } />
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