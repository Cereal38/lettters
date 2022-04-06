
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const index = () => {

	return (
		/* Nav */
		<Router>
			<Switch>
				<Router path="/" exact component={Home} />
				<Router path="/game" exact component={Game} />

				/* In case of unknown path */
				<Redirect to="/" />

			</Switch>
		</Router>
	)

}

export default index;
