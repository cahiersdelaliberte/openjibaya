import React, { Component } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'


console.log("Summary.jsx")


let Figure = ({figure, title, textColour}) =>
	<ReactCSSTransitionGroup
			transitionName="flash"
			transitionEnterTimeout={100}
			transitionLeaveTimeout={100}
			>
			<span key={figure} className="figure" title={title} style={{color: textColour}} >
				{figure} €
			</span>
		</ReactCSSTransitionGroup>

let defaultColour = '#4A89DC'
console.log(defaultColour)
let defaultTextColour = '#ffffff',
	lightenTextColour = defaultTextColour => defaultTextColour === '#ffffff' ? 'rgba(255, 255, 255, .85)' : '#333'
console.log(defaultTextColour)

export default class Summary extends Component {
	render() {

		// let colour = '#4A89DC',
		// textColour = '#000000',
		// lighterTextColour = '#4A89DC'	
		/*
		let
			{
				themeColours: {
					colour = defaultColour, 
					textColour, 
					lighterTextColour
				},
				results,
				results: {
					salaire_super_brut, cout_du_travail,
				},
				typeEntreprise, typeSalaireEntré,
				humanizeFigures: humanize,
				toggleSection,
				showDetails,
			} = this.props
		*/

		let
		{
			themeColours,
			results,
			typeEntreprise, typeSalaireEntré,
			humanizeFigures,
			toggleSection,
			showDetails,
		} = this.props


		/*
		let labelTypeEntreprise = {
				'entreprise_est_association_non_lucrative': 'association',
				'entreprise': 'entreprise',
			}[typeEntreprise],
			correspondanceSalaires = {
				'net': [ 'brut', 'Salaire brut', 'salaire_de_base' ],
				'brut': [ 'net', 'Salaire net', 'salaire_net_a_payer' ],
			}[typeSalaireEntré],
			[ salaireTitle, salaireDescription, salaireVariable ] = correspondanceSalaires,
			salaireFigure = results[salaireVariable],
			paragraphBorderStyle = {borderColor: textColour},
			buttonStyle = {borderColor: textColour, color: textColour}
		*/
		let paragraphBorderStyle = {borderColor: defaultTextColour},
			buttonStyle = {borderColor: defaultTextColour, color: defaultTextColour}

		return (
			<section className="simulation-summary">
				<div className="content" style={{background: defaultColour, color: defaultTextColour}}>
					<div className="figures">
						<p style={paragraphBorderStyle}>
						
							Tunisie
							<br />
							Où va votre impôt ?
							<br />
						
						</p>
					</div>
					<button	type="button"
						className="action show-details" autoComplete="off"
						onClick={toggleSection}
						style={buttonStyle} >
						{showDetails ?
							<span>Revenir à la saisie</span> :
							<span>Voir le détail<br />des prélèvements</span>
						}
					</button>
			</div>
		</section>
		)
	}
}
