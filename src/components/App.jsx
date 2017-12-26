import React from 'react'
import BasicInput from './BasicInput.jsx'
import Results from './Results.jsx'
import Affiliation from './Affiliation.jsx'
import '../assets/css/main.css'
import '../assets/css/reset.css'
import { loadYaml } from '../utils/yaml.js'



const SMIG_TND_2016 = 338
const SMIG_TND_AN_2016 = SMIG_TND_2016 * 12


export default class App extends React.Component {

  constructor(props){
    super(props)

    this.state = { 
    	// typeSalaireEntre: 'brut',
    	// salaireNetAPayer: smic_tnd,
		typeEmploye: "fonctionnaire",
		salaire: SMIG_TND_AN_2016,
		periodeSalaire: "an",
		statutFamilial: "celibataire",
		nbEnfants: 0,

		results: {
			salaire_imposable: 17710,
			salaire_net_a_payer: 14700
		}
    }
    this.handleChange = this.handleChange.bind(this)
  }

  	//see handleChange argument struct
	handleChange(partialState){
		this.setState(partialState)
	}

  render() {
    var simulatorName = "OpenJibaya"
    var inputTouched = false
    var inputChanged = false
    //inputTouched={ inputTouched } inputChanged={ inputChanged } />

    const repartition_budget = loadYaml('repartition_budget.yaml')

    return (
      <div className="widget">
        <BasicInput { ...this.state } onUserChange={ this.handleChange } />
        <Results results={ this.state.results } repartitionBudget={ repartition_budget }/>
        <Affiliation />
      </div>
    );
  }
}
