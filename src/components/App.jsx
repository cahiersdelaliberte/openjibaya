import React from 'react'
import InputSection from './InputSection.jsx'
import Results from './Results.jsx'
import Affiliation from './Affiliation.jsx'

export default class App extends React.Component {
  render() {
    var inputTouched = false
    var inputChanged = false
    return (
     <div style={{textAlign: 'center'}}>
        <h1>Hello World</h1>
        <InputSection
            inputTouched={inputTouched}
            inputChanged={inputChanged}
        />
        <Results />
        <Affiliation />
    </div>
    );
  }
}
