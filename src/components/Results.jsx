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
			buttonClicked: false,
			plusClicked: false
		}

		// This binding is necessary to make `this` work in the callback
		this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
		this.handleOnPlusClick = this.handleOnPlusClick.bind(this);
	}

	handleOnButtonClick(){
		console.log("!	Results - handleOnButtonClick")
		this.setState({ buttonClicked: true })
	}

	handleOnPlusClick(){
		console.log("!	Results - handleOnPlusClick")
		this.setState({ plusClicked: true })
	}

	render() {
		console.log("Results.jsx")
		console.log("props: " + this.props.results.items)
		console.log("state: " + this.state)
		let defaultTextColour = '#ffffff',
			defaultColour = '#4A89DC',
			buttonStyle = {background: defaultColour, borderColor: defaultTextColour, color: defaultTextColour}
		return (
			<div>
				<Summary handleOnButtonClick={ this.handleOnButtonClick } />

				{ this.state.buttonClicked ?
					<div>
						<br />
						<WaterfallChart />
						<br />
						<br />
						<div className="figures" align="center">
							<button type="button"
								className="action" autoComplete="off"
								onClick={ this.handleOnPlusClick }
								style={buttonStyle} >
								{
									<span>Et si la Loi de Finances n&#39;avait pas changé ?</span>
								}
							</button>
							{ this.state.plusClicked ?
								<div>
									<span>Comparez les Lois de Finances 2016 / 2017 / 2018.</span>
								</div>
								:
								<div/>
							}
						</div>
						<br />
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
