
/* Tutorial is deprecated about Switch
Need to replace Switch with Routes in import
Also need to change code in return*/

/* Also deprecated about Redirect
Need to import Navigate
Then proceed like in the last Route*/


import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from '../../pages/Home';
import Game from '../../pages/Game';

const index = () => {

	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/game" element={<Game />} />
				<Route path = "*" element={<Navigate to="/" replace />}/>
			</Routes>
		</Router>
	)

}

export default index;
