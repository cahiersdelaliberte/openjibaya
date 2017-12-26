import React, { Component } from 'react'
import Highcharts from 'highcharts'

const ReactHighcharts = require("react-highcharts");
require("highcharts/js/highcharts-more")(ReactHighcharts.Highcharts);


function draw(salaireNetAPayer, impots, cotisations) {
	
	//Calculé : var salaireSuperBrut = 3000
	//var cotisations = 500
	//Calculé : var salaireDeBase = 2500
	//var impots = 1000
	//var salaireNetAPayer = 1500

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
	                y: impots,
	            }, {
	                name: 'Salaire De Base',
	                isIntermediateSum: true,
	                color: Highcharts.getOptions().colors[1]
	            }, {
	                name: 'Cotisations',
	                y: cotisations
	            }, {
	                name: 'Salaire Super Brut',
	                isSum: true,
	                color: Highcharts.getOptions().colors[1]
	            }],
	            dataLabels: {
	                enabled: true,
	                formatter: function () {
	                    return Highcharts.numberFormat(this.y / 1000, 0, ',') + 'k';
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
	
		return (
				//<ReactHighcharts config = {draw(salaireNetAPayer, impots, cotisations)}></ReactHighcharts>
				<ReactHighcharts config = {draw(1500, 1000, 500)}></ReactHighcharts>
				)
	}
}
