import React, { Component } from 'react'
import Highcharts from 'highcharts'

const ReactHighcharts = require("react-highcharts");
require("highcharts/js/highcharts-more")(ReactHighcharts.Highcharts);


export default class WaterfallChart extends Component {

	constructor(props){
		super(props)

		// this.state = {
			// salaire_net_a_payer: 0,
		  	// salaire_imposable: 0,
        	// salaire_de_base: 0,
        	// salaire_super_brut: 0
		// }
		this.state = { hasError: false }
	}

	// componentDidUpdate(previousProps){
	// 	this.setState({salaire_net_a_payer: this.props.results['salaire_net_a_payer']})
	// }

	// componentDidMount() {
    //	let chart = this.refs.chart.getChart();
	// }

	static getDerivedStateFromError(error) {
    	// Update state so the next render will show the fallback UI.
    	return { hasError: true };
  	}

	componentDidCatch(error, info) {
    	console.log(error, info);
  	}

	render() {
		if (this.state.hasError) {
      		return <h1>Something went wrong.</h1>;
    	}

		//let salaireNetAPayer = this.props.results.salaire_net_a_payer,
		//impots = this.props.results.irpp,
		//cotisations = this.props.results.cotisations_employeur + this.props.results.cotisations_salarie 

		console.log("WaterfallChart")
		console.log(this.props.results)

		// this.props.results = props de <App>
		const primes = 0
		var salaireNetAPayer = this.props.results['salaire_net_a_payer']
		var salaireImposable = this.props.results['salaire_imposable']
		var salaireDeBasePrimes = this.props.results['salaire_de_base'] + primes
		var salaireSuperBrut = this.props.results['salaire_super_brut']
		
		console.log("Nombre ? " + Number.isInteger(salaireNetAPayer))
		console.log("Nombre ? " + Number.isInteger(salaireImposable))
		console.log("Nombre ? " + Number.isInteger(salaireDeBasePrimes))

		const config = draw(
			salaireNetAPayer, 
			salaireImposable, 
			salaireDeBasePrimes, 
			salaireSuperBrut
			)

		console.log(config.series.data)

		let chartRef = this.refs.chart
		if(chartRef) {
			console.log("Redessine moi !")
			chartRef.getChart().redraw()
		}

		return ( <ReactHighcharts config = {config} ref="chart"></ReactHighcharts> )
	}
}

function draw(salaireNetAPayer, salaireImposable, salaireDeBasePrimes, salaireSuperBrut) {
	var chartTitle = 'Impôts & Cotisations'

	// creation du graphique
	return {
		chart: {
			type: 'waterfall'
		},

		title: {
			text: chartTitle
		},

		xAxis: {
			type: 'category'
		},

		yAxis: {
			title: {
				text: 'TND'
			}
		},

		legend: {
			enabled: false
		},

		tooltip: {
			pointFormat: '<b>{point.y:,.2f}</b> TND'
		},

		series: [{
			upColor: Highcharts.getOptions().colors[2],
			color: Highcharts.getOptions().colors[3],
			data: [{
				name: 'Salaire Net Perçu',
				y: salaireNetAPayer,
				color: Highcharts.getOptions().colors[1]
			}, {
				name: 'Impôts',
				y: salaireImposable - salaireNetAPayer
			}, {
				name: 'Salaire Imposable',
				isSum: true,
				color: Highcharts.getOptions().colors[1]
			}, {
				name: 'Cotisations Salarié',
				y: salaireDeBasePrimes - salaireImposable
			}, {
				name: 'Salaire De Base & Primes',
				isSum: true,
				color: Highcharts.getOptions().colors[1]
			}, {
				name: 'Cotisations Employeur',
				y: salaireSuperBrut - salaireDeBasePrimes
			}, {
				name: 'Salaire Super Brut',
				isSum: true,
				color: Highcharts.getOptions().colors[1]
			}],

			dataLabels: {
				enabled: true,
				formatter: function () {
					return Highcharts.numberFormat(this.y, 0, ',') + 'TND';
				},
				style: {
					fontWeight: 'bold'
				}
			},
			pointPadding: 0
		}]
	} //end return
} //end function
