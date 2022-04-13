
import React, { Component } from 'react';
import '../../styles/components/game/Letter.css';


class Letter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bgColor: "",
			statusClick: false,
			car: this.props.car,
		}
	}

	letterClick = (event) => {
		if (this.state.statusClick == true) {
			this.setState({
				bgColor: "",
				statusClick: false,
			});
		}
		else {
			this.setState({
				bgColor: "#777777",
				statusClick: true,
			});
		}

		event.preventDefault();
	}


	render() {
		return (

			<div className="letter"
				style={{backgroundColor: this.state.bgColor}}
				onClick={this.letterClick} >
				
				{this.state.car}
			</div>
			)
	}	
}

export default Letter;