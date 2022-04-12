
import React from 'react';
import '../../styles/components/game/GivenLetters.css'
import Letter from './Letter';


const GivenLetters = (props) => {

	let lettersArray = props.lettersArray;

	return(

		<div className="given-letters">
			<Letter car={ lettersArray[0] } />
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
		)
}

export default GivenLetters;
