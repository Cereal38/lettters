
import React, { Component } from 'react';
import '../../styles/components/game/Letter.css';


class Letter extends Component {

	constructor() {
		super();
		this.state = {
			bgColor: "",
		}
	}

	letterClick = (event) => {
		this.setState({
			bgColor: "#777777",
		});
		event.preventDefault();
	}


	render() {
		return (

			<div className="letter"
				style={{backgroundColor: this.state.bgColor}}
				onClick={this.letterClick} >
				
				{this.props.car}
			</div>
			)
	}	
}

export default Letter;