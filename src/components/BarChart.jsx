import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts' // Expects that Highcharts was loaded in the code.


function calculateRepartition(repartitionBudgetAnnuel, impot){
	var series = []
	for (var part in repartitionBudgetAnnuel){
		series.push({
			name: repartitionBudgetAnnuel[part]['name'],
			data: [repartitionBudgetAnnuel[part]['percentage'] * impot],
			visible: true
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