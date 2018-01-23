import React, { Component } from 'react'
import Summary from './Summary.jsx'

import BarChart from './BarChart.jsx'
import WaterfallChart from './WaterfallChart.jsx'

import { request, askOpenFisca, newXmlHttpRequest, send, updateSalaires } from '../utils/openfisca.js'

import '../assets/css/Results.css'


let numberFormat = new Intl.NumberFormat('fr-FR').format

export default class Results extends Component {
	constructor(props){
		super(props)

		let {
			typeEmploye,
			salaire,
			periodeSalaire,
			statutFamilial,
			nbEnfants,
			repartitionBudget,
		} = this.props
		
		//console.log("typeEmploye " + typeEmploye)
		
		// This binding is necessary to make `this` work in the callback
		this.handleOnButtonClick = this.handleOnButtonClick.bind(this)
		this.handleOnPlusClick = this.handleOnPlusClick.bind(this)
		
		this.state = {
			buttonClicked: false,
			plusClicked: false
		}
	}

	updateSalaireImposable(salaireImposable){
		console.log("updateSalaireImposable")
		this.props.results['salaire_imposable'] = salaireImposable
	}
	
	handleOnButtonClick(){
		console.log("!	Results - handleOnButtonClick")

		//OK console.log(this.props.results.salaire_imposable)
		//OK console.log(this.props.results['salaire_imposable'])
		var xhr = newXmlHttpRequest()
		
		xhr.onreadystatechange = function(event) {
			if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				var json = JSON.parse(xhr.responseText)
				console.log("successful response:")
				console.log(json)
				//updateSalaires(10)
				//updateSalaireImposable(json.individus.openjibayiste.salaire_imposable['2017-12'])
				//this.props.results['salaire_imposable'] = json.individus.openjibayiste.salaire_imposable['2017-12']
				//var results = updateSalaires(salaireImposable)
				//this.props.results['salaire_imposable'] = results['salaire_imposable']

				this.setState({ buttonClicked: true })
			}

			if (xhr.status === 404) {
				console.log("issue response: " + xhr.status)
			}
		}
		
		send(xhr, 1225)
		//var requestResult = request(1225)
		//console.log("requestResult " + requestResult)
		//this.props.results['salaire_imposable'] = requestResult
		//console.log(this.props.results)

		//request(1225, updateSalaires) //request(salaire)//askOpenFisca()
		//var salaireImposable = this.props.results.salaire_imposable
		//console.log("salaire_imposable: " + salaireImposable)
		//if(salaireImposable){
		//	this.setState({ buttonClicked: true })
		//} else {
		//	console.log("...waiting for salaire imposable")
		//}
	}

	handleOnPlusClick(){
		console.log("!	Results - handleOnPlusClick")
		this.setState({ plusClicked: true })
	}

	render() {
		let defaultTextColour = '#ffffff',
			defaultColour = '#4A89DC',
			buttonStyle = {background: defaultColour, borderColor: defaultTextColour, color: defaultTextColour}
		return (
			<div>
				<Summary {...this.props} handleOnButtonClick={ this.handleOnButtonClick } />

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
									<span>Quelles différences entre Lois de Finances ?</span>
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
						<BarChart year="2017" results={ this.props.results } repartitionBudget={ this.props.repartitionBudget }/>
					</div>
					:
					<div/>
				}
			</div>
		)
	}

}
