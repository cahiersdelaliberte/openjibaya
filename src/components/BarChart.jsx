import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts' // Expects that Highcharts was loaded in the code.

const MINISTERE_NAME_PREFIX = 'MINISTERE'
const MINIMAL_PERCENTAGE = 0.01


function formatNumber(number){
	return Math.round(number * 100)/100
}


function calculateRepartition(repartitionBudgetAnnuel, impot){
	var series = []
	var partName, partPercentage	
	for (var part in repartitionBudgetAnnuel){
		partName = repartitionBudgetAnnuel[part]['name']
		partPercentage = repartitionBudgetAnnuel[part]['percentage']

		series.push({
			name: partName,
			data: [formatNumber(partPercentage * impot)],
			visible: (partPercentage >= MINIMAL_PERCENTAGE) || (! partName.startsWith(MINISTERE_NAME_PREFIX))
		})
	}
	return series
}


function draw(year, repartitionBudgetAnnuel, impot) {
	// affectation distribution impôts par dépense
	var repartition = calculateRepartition(repartitionBudgetAnnuel, impot)
	
	// creation du graphique
	return {
	
	    chart: {
	      type: 'bar'
	    },
	    title: {
	      text: 'Répartition du budget ' + year
	    },
	    xAxis: {
	      categories: ['Vos impôts contribuent au']
	    },
	    yAxis: {
	      min: 0,
	      title: {
	        text: 'Utilisation de vos impôts en dinars'
	      }
	    },
	    legend: {
	      reversed: true
	    },
	    tooltip: {
	      valueSuffix: ' dinars'
	    },
	    plotOptions: {
	      series: {
	        stacking: 'normal'
	      }
	    },
	    series: repartition
	  }
}

export default class BarChart extends Component {
	render() {
		console.log('BarChart ' + this.props.year)
		// montant d'impot payé
		let salaireImposable = this.props.results.salaire_imposable * 1.20
		let salaireNetAPayer = this.props.results.salaire_net_a_payer //let salaireNetAPayer = 14700
		let impot = salaireImposable - salaireNetAPayer

		// console.log("Salaire net à payer : "+salaireNetAPayer+"Salaire imposable : "+salaireImposable)
		console.log('Salaire imposable : '+salaireImposable+' / Salaire net à payer : '+salaireNetAPayer)
		console.log('Imposition de : '+(salaireImposable - salaireNetAPayer))
		//To add break point: debugger
		
		return (
				<ReactHighcharts config = {draw(this.props.year, this.props.repartitionBudget[this.props.year], impot)}></ReactHighcharts>
				//old: <ReactHighcharts config = {draw(17710, 14700)}></ReactHighcharts>
				)
	}
}