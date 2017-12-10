import React from 'react'
import InputSection from './InputSection.jsx'
import Results from './Results.jsx'
import Affiliation from './Affiliation.jsx'


let smic_tnd = 338


export default class App extends React.Component {

  constructor(props){
    super(props)
    this.state = { 
      // typeSalaireEntre: 'brut',
      // salaireNetAPayer: smic_tnd,
      results: {
        salaire_imposable: 17710,
        salaire_net_a_payer: 14700
      }
    }
  }

  render() {
    console.log("App state.results: " + this.state.results.salaire_imposable + " " + this.state.results.salaire_net_a_payer)
    var simulatorName = "OpenJibaya"
    var inputTouched = false
    var inputChanged = false

    return (
     <div style={{ textAlign: 'center' }}>
        <InputSection inputTouched={ inputTouched } inputChanged={ inputChanged } />
        <Results results={ this.state.results }/>
        <Affiliation />
    </div>
    );
  }
}
