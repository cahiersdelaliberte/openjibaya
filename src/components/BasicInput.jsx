import React, { Component } from 'react'
//import { Field, reduxForm, formValueSelector, change } from 'redux-form'
//import initialValues from '../basicInputInitialValues'
//import './BasicInput.css'

//let selector = formValueSelector('basicInput')

export default class BasicInput extends Component {
	render() {
		let smic_tnd = 338
		let smic_tnd_an = smic_tnd *12

		//TN :
		//Je suis [un/une] [fonctionnaire/employé-e/professionnel-le libéral-e].
		//Je gagne [...] TND par [mois/an] [après/avant] paiement de l'impôt.
		//Je suis [célibataire/marié/chef de famille].
		//J'ai [0/1/2/3/plus de 4] enfant-s.

		return (
			<form className="basic-input">
				
				Je suis 
				<select name="typeEmployé" >
					<option value="employe">employé-e</option>	
					<option value="fonctionnaire">fonctionnaire</option>					
					<option value="professionnel_liberal" disabled="true">professionnel-le libéral-e</option>
				</select>
				.<br />
				
				Je touche 
				<fieldset>
					<input id="salaire" name="salaire" component="input" type="number"
					min="0" max="9999999" placeholder={smic_tnd_an} step="any" />
					<label htmlFor="salaire">
						&nbsp; Dinars Tunisiens &nbsp;
					</label>
				
					<span className="input-help">
						Rémunération totale<br/>
						<em>(min. <span data-source="smic_proratise" data-round>{smic_tnd}</span>)</em>
						, dont primes.
					</span>

					<span>par</span>	
					<select name="périodeSalaireEntré" >
						<option value="mois">mois</option>
						<option value="an">an</option>
					</select>	
					<span>net d&#39;impôts et de cotisations sociales.</span>

				</fieldset>
				<br />
				
				Je suis
				<select name="statutFamilial" >
					<option value="celibataire">célibataire</option>
					<option value="marie">marié non chef de famille</option>
					<option value="chef_de_famille">chef de famille</option>
				</select>
				.<br />
				
				J&#39;ai 
				<input id="nbEnfants" name="nbEnfants" component="input" type="number"
					min="0" max="9999999" placeholder="0" step="any" />
				enfant-s.<br />
				
			</form>
		)
	}
}
