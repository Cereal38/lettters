
import React from 'react';
import '../../styles/components/game/MainContent.css';
import GivenLetters from './GivenLetters';
import UserLetters from './UserLetters';


const generateRandomLetter = () => {
	/* Return a random caps letter */
	
	const asciiValue = Math.floor(Math.random() * 26) + 65;;
	const letter = String.fromCharCode(asciiValue);

	return letter;
}

const generateArrayRandomLetters = (arrayLength) => {
	/* Return an array with 'arrayLength' letters */

	let lettersArray = [];

	for (let i = 0; i < arrayLength; i++) { lettersArray.push(generateRandomLetter()); }

	return lettersArray;
}


/* COMPONENT */
const MainContent = () => {

	const lettersArray = generateArrayRandomLetters(10);

	return (

		<div className="main-content">
			<GivenLetters lettersArray={ lettersArray }/>
			<UserLetters />
		</div>
		)
}

export default MainContent;