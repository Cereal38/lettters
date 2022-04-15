
import React from 'react';
import '../../styles/components/home/MainContent.css';
import { Link } from 'react-router-dom';

const MainContent = () => {

	return (

		<div className="home-main-content">
			<h1 className="home-main-content__logo-box">Lettters</h1>
			<Link className="home-main-content__play-link" to="/game">Play</Link>
		</div>
	)
}

export default MainContent;
