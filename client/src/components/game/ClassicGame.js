
import React, { useState, } from 'react';
import Letter from './Letter';
import '../../styles/components/game/ClassicGame.css';
import LettersGenerator from '../../myModules/lettersGenerator.js';
import CheckWords from '../../myModules/checkWords.js';



/* --- CONSTANTES --- */
const bgLight = "";
const bgDark = "#BBBBBB";

// lettersArray -> Letters displayed in 1st square
const lettersArray = LettersGenerator.generateArrayRandomLettersWithUseRate(10);



/* --- COMPONENT --- */
const ClassicGame = () => {


	// letterUser = Letters displayed in 2nd square
	const [lettersUser, setLettersUser] = useState([]);

	// Array is linked to letters. Click on first letter -> clickable[0][0] = false
	// Remove first letter from second square -> clickable[0]][x] = true / clickable[1][0] -> true
	const [clickable, setClickable] = useState([[true, true, true, true, true, true, true, true, true, true],
		[false, false, false, false, false, false, false, false, false, false]]);

	//  Array is linked to letters
	const [bgColor, setBgColor] = useState([[bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight], 
		[bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark]]);



	function changeBgColor(indexRow, indexCol, lightOrDark) {
		/* Change bgColor array
		lightOrDArk can take values bgDark or bgLight */

		// Copy array to modify and replace
		let bgColorCopy = bgColor;
		bgColorCopy[indexRow][indexCol] = lightOrDark;

		setBgColor(bgColorCopy);
	}


	function changeClickable(indexRow, indexCol, isTrue) {
		/* Modify clickable array */

		// Copy clickable array
		let clickableCopy = clickable;
		clickableCopy[indexRow][indexCol] = isTrue;

		// Change old array with new values
		setClickable(clickableCopy);
	}


	function firstSquareLetterClicked(event, index) {
		/* When user click on a letter add it to the lettersUser and show it in the 2nd square
		Also modify clickable array */

		if (lettersUser.length < 10 && clickable[0][index] === true) {

			const letter = event.target.textContent;

			setLettersUser([...lettersUser, letter]);
			changeBgColor(0, index, bgDark);
			changeClickable(0, index, false);
		}
	}


	function clear() {
		/* lettersUser -> Empty array
		clickable -> Reset
		bgColor -> Reset*/

		setLettersUser([]);

		setClickable([[true, true, true, true, true, true, true, true, true, true],
		[false, false, false, false, false, false, false, false, false, false]]);

		setBgColor([[bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight, bgLight], 
		[bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark, bgDark]]);
	}

	function onClickSubmit() {

		// Check if word is valid and clear board
		if (CheckWords.checkIfWordInList(lettersUser.join(''))) {
			alert("Valid !")
			clear();
		}

		else { alert("Unvalid !"); }
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

				{ lettersArray.map((letter, index) => <div 
					key={`${letter}-${index}`}
					onClick={(event) => firstSquareLetterClicked(event, index)}
					style={{backgroundColor: bgColor[0][index]}} >
				
					<Letter car={ letter } />
				
				</div>) }

			</div>

			<div className="classic-game__user-letters">

				{ lettersUser.map((letter, index) => <div 
					key={`${letter}-${index}`}
					style={{backgroundColor: bgColor[1][index]}} >

					<Letter car={ letter } />

				</div>) }

			</div>

			<div className="classic-game__buttons-box">

				<button className="buttons-box__clear-button" onClick={ clear } > Clear </button>
				<button className="buttons-box__submit-button" onClick={ onClickSubmit } > Submit </button>

			</div>

		</div>
		)

}
	

export default ClassicGame;