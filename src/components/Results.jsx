import React, { Component } from 'react'
import Summary from './Summary.jsx'
import BarChart from './BarChart.jsx'
//import WaterfallChart from '../components/WaterfallChart'
import '../assets/css/Results.css'

let fmt = new Intl.NumberFormat('fr-FR').format

export default class Results extends Component {

	render() {
		console.log("Results.jsx")
		console.log("props: " + this.props.results.items)
		console.log("state: " + this.state)
		
		return (
			<div>
				<Summary />
				<div>
					<BarChart results={this.props.results} />

					<br />
					
				</div>
			</div>
		)
	}

}