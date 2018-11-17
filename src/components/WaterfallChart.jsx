import React, { Component } from 'react'
import Highcharts from 'highcharts'

const ReactHighcharts = require("react-highcharts");
require("highcharts/js/highcharts-more")(ReactHighcharts.Highcharts);

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
				name: 'Salaire Net A Payer',
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

export default class WaterfallChart extends Component {
	render() {
		//let salaireNetAPayer = this.props.results.salaire_net_a_payer,
		//impots = this.props.results.irpp,
		//cotisations = this.props.results.cotisations_employeur + this.props.results.cotisations_salarie 

		var salaireNetAPayer = this.props.results['salaire_net_a_payer']
		var salaireImposable = salaireNetAPayer + 500
		var salaireDeBasePrimes = salaireImposable + 500
		var salaireSuperBrut = salaireDeBasePrimes + 500

		return (
				<ReactHighcharts config = {
					draw(
						salaireNetAPayer, 
						salaireImposable, 
						salaireDeBasePrimes, 
						salaireSuperBrut
						)}>
				</ReactHighcharts>
				)
	}
}
