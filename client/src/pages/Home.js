
import React from 'react';
import MainContent from '../components/home/MainContent';
import Footer from '../components/footer/Footer.js';
import '../styles/pages/Home.css';


const Home = () => {

    return (

	<>
		<div className="home-page">
			<div className="home-page__main-container">
				<MainContent />
			</div>
			<div className="home-page__footer">
				<Footer />
			</div>
		</div>
	</>

    );

};

export default Home;
