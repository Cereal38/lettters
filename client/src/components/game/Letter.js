
import React, { useState,} from 'react';
import '../../styles/components/game/Letter.css';


const Letter = (props) => {

	const bgLight = "";
	const bgDark = "";

	const car = props.car;
	let clickable = props.clickable;
	
	// If letter is clickable   -> Transparent background color
	// If not 				    -> Dark background color
	const [bgColor, setBgColor] = useState(() => {

		if (clickable == true) { return bgLight }
		else if (clickable == false) { return bgDark }		
	});

	function switchColor() {

		if (clickable == true) {
			if (bgColor == bgLight) { setBgColor(bgDark); }
			else if (bgColor == bgDark) { setBgColor(bgLight); }
		}
	}


	return (

		<div className="letter"	onClick={switchColor} style={{backgroundColor: bgColor}} >
			{car}
		</div>
		)	
}

export default Letter;