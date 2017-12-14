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
	constructor(props){
		super(props)
		let {
			themeColours,
			results,
			typeEntreprise, typeSalaireEntré,
			humanizeFigures,
			toggleSection,
			handleOnButtonClick,
		} = this.props

		// This binding is necessary to make `this` work in the callback
		this.handleOnButtonClick = this.props.handleOnButtonClick.bind(this);
	}

	handleOnButtonClick(){
		console.log("!	Summary - handleOnButtonClick")
		this.props.handleOnButtonClick()
	}

	render() {

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
						onClick={ this.handleOnButtonClick }
						style={buttonStyle} >
						{
							<span>Voir le détail<br />des prélèvements</span>
						}
					</button>
			</div>
		</section>
		)
	}
}
