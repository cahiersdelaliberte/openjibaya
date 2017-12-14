import React, { Component } from 'react'
import Summary from './Summary.jsx'

import BarChart from './BarChart.jsx'
import WaterfallChart from './WaterfallChart.jsx'

import '../assets/css/Results.css'


let fmt = new Intl.NumberFormat('fr-FR').format

export default class Results extends Component {
	constructor(props){
		super(props)
		this.state = {
			buttonClicked: false
		}

		// This binding is necessary to make `this` work in the callback
		this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
	}

	handleOnButtonClick(){
		console.log("!	Results - handleOnButtonClick")
		this.setState({ buttonClicked: true })
	}

	render() {
		console.log("Results.jsx")
		console.log("props: " + this.props.results.items)
		console.log("state: " + this.state)
		
		return (
			<div>
				<button	type="button"
				onClick={ this.handleOnButtonClick }>CLICK</button>
				

				{ this.state.buttonClicked ?
					<div>
						<WaterfallChart />
						<br />
						<BarChart results={this.props.results} />
					</div>
					:
					<div/>
				}
			</div>
		)
	}

}
