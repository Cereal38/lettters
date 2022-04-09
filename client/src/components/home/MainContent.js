
import React from 'react';
import '../../styles/components/home/MainContent.css';
import { Link } from 'react-router-dom';

const MainContent = () => {

	return (

		<div className="main-content">
			<div className="main-content__logo-box"></div>
			<Link className="main-content__play-link" to="/game">Play</Link>
		</div>
	)
}

export default MainContent;
