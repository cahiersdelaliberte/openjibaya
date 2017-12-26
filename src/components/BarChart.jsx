import React, { Component } from 'react'
import ReactHighcharts from 'react-highcharts' // Expects that Highcharts was loaded in the code.


function draw(salaireImposable, salaireNetAPayer, repartitionBudgetAnnuel) {
	
	// variable qui recoit le montant d'impot payé
	var salaire_imposable= salaireImposable
	var salaire_net_a_payer= salaireNetAPayer
	var impot = salaire_imposable-salaire_net_a_payer
		
	// affectation distribution impôts par dépense
	var m_education = repartitionBudgetAnnuel['m_education']['percentage'] * impot
	var m_enseignement_sup_recherche_scientifique = repartitionBudgetAnnuel['m_enseignement_sup_recherche_scientifique']['percentage'] * impot
	var m_env_developpement_durable = repartitionBudgetAnnuel['m_env_developpement_durable']['percentage'] * impot
	var m_equipement_habitat_amenagement_territoire = repartitionBudgetAnnuel['m_equipement_habitat_amenagement_territoire']['percentage'] * impot
	var m_industrie_energie_mines = repartitionBudgetAnnuel['m_industrie_energie_mines']['percentage'] * impot
	var m_argriculture_res_hydrauliques_peche = repartitionBudgetAnnuel['m_argriculture_res_hydrauliques_peche']['percentage'] * impot
	var m_interieur = repartitionBudgetAnnuel['m_interieur']['percentage'] * impot
	var m_dev_invest_coop = repartitionBudgetAnnuel['m_dev_invest_coop']['percentage'] * impot
	var m_tourisme_artisanat = repartitionBudgetAnnuel['m_tourisme_artisanat']['percentage'] * impot
	var arp = repartitionBudgetAnnuel['arp']['percentage'] * impot
	var csm = repartitionBudgetAnnuel['csm']['percentage'] * impot
	var depenses_imprevues_non_reparties = repartitionBudgetAnnuel['depenses_imprevues_non_reparties']['percentage'] * impot
	var dette_publique = repartitionBudgetAnnuel['dette_publique']['percentage'] * impot
	var ivd = repartitionBudgetAnnuel['ivd']['percentage'] * impot
	var isie = repartitionBudgetAnnuel['isie']['percentage'] * impot
	var m_defense_nationale = repartitionBudgetAnnuel['m_defense_nationale']['percentage'] * impot
	var m_finances = repartitionBudgetAnnuel['m_finances']['percentage'] * impot
	var m_tech_com_economie_numerique = repartitionBudgetAnnuel['m_tech_com_economie_numerique']['percentage'] * impot
	var m_commerce = repartitionBudgetAnnuel['m_commerce']['percentage'] * impot
	var m_culture_sauvegarde_patrimoine = repartitionBudgetAnnuel['m_culture_sauvegarde_patrimoine']['percentage'] * impot
	var m_femme_famille_enfance = repartitionBudgetAnnuel['m_femme_famille_enfance']['percentage'] * impot
	var m_formation_professionnelle_emploi = repartitionBudgetAnnuel['m_formation_professionnelle_emploi']['percentage'] * impot
	var m_jeunesse_sports = repartitionBudgetAnnuel['m_jeunesse_sports']['percentage'] * impot
	var m_justice = repartitionBudgetAnnuel['m_justice']['percentage'] * impot
	var m_sante = repartitionBudgetAnnuel['m_sante']['percentage'] * impot
	var m_affaires_etrangeres = repartitionBudgetAnnuel['m_affaires_etrangeres']['percentage'] * impot
	var m_affaires_religieuses = repartitionBudgetAnnuel['m_affaires_religieuses']['percentage'] * impot
	var m_affaires_sociales = repartitionBudgetAnnuel['m_affaires_sociales']['percentage'] * impot
	var m_domaines_etat_affaires_foncieres = repartitionBudgetAnnuel['m_domaines_etat_affaires_foncieres']['percentage'] * impot
	var m_transport = repartitionBudgetAnnuel['m_transport']['percentage'] * impot
	var presidence_republique = repartitionBudgetAnnuel['presidence_republique']['percentage'] * impot
	var presidence_gouverment = repartitionBudgetAnnuel['presidence_gouverment']['percentage'] * impot
	
	// creation du graphique
	return {
	
	    chart: {
	      type: 'bar'
	    },
	    title: {
	      text: 'Répartition du budget'
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
	    series: [{
	      name: repartitionBudgetAnnuel['presidence_gouverment']['name'],
	      data: [presidence_gouverment],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['presidence_republique']['name'],
	      data: [presidence_republique],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_transport']['name'],
	      data: [m_transport],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_domaines_etat_affaires_foncieres']['name'],
	      data: [m_domaines_etat_affaires_foncieres],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_affaires_sociales']['name'],
	      data: [m_affaires_sociales],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_affaires_religieuses']['name'],
	      data: [m_affaires_religieuses],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_affaires_etrangeres']['name'],
	      data: [m_affaires_etrangeres],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_sante']['name'],
	      data: [m_sante],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_justice']['name'],
	      data: [m_justice],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_jeunesse_sports']['name'],
	      data: [m_jeunesse_sports],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_formation_professionnelle_emploi']['name'],
	      data: [m_formation_professionnelle_emploi],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_femme_famille_enfance']['name'],
	      data: [m_femme_famille_enfance],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_culture_sauvegarde_patrimoine']['name'],
	      data: [m_culture_sauvegarde_patrimoine],
	      visible: false
	    }, {
	      name: repartitionBudgetAnnuel['m_commerce']['name'],
	      data: [m_commerce],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_tech_com_economie_numerique']['name'],
	      data: [m_tech_com_economie_numerique],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_finances']['name'],
	      data: [m_finances],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_defense_nationale']['name'],
	      data: [m_defense_nationale],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['isie']['name'],
	      data: [isie],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['ivd']['name'],
	      data: [ivd],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['dette_publique']['name'],
	      data: [dette_publique],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['depenses_imprevues_non_reparties']['name'],
	      data: [depenses_imprevues_non_reparties],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['csm']['name'],
	      data: [csm],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['arp']['name'],
	      data: [arp],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_tourisme_artisanat']['name'],
	      data: [m_tourisme_artisanat],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_dev_invest_coop']['name'],
	      data: [m_dev_invest_coop],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_interieur']['name'],
	      data: [m_interieur],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_argriculture_res_hydrauliques_peche']['name'],
	      data: [m_argriculture_res_hydrauliques_peche],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_industrie_energie_mines']['name'],
	      data: [m_industrie_energie_mines],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_equipement_habitat_amenagement_territoire']['name'],
	      data: [m_equipement_habitat_amenagement_territoire],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_env_developpement_durable']['name'],
	      data: [m_env_developpement_durable],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_enseignement_sup_recherche_scientifique']['name'],
	      data: [m_enseignement_sup_recherche_scientifique],
	      visible: true
	    }, {
	      name: repartitionBudgetAnnuel['m_education']['name'],
	      data: [m_education],
	      visible: true
	    }]
	  }
}

export default class BarChart extends Component {
	render() {
		
		console.log("BarChart : "+this.props.results)
		
		let salaireImposable = this.props.results.salaire_imposable * 1.20
		let salaireNetAPayer = this.props.results.salaire_net_a_payer
		//let salaireNetAPayer = 14700

		let repartitionBudget_2016 = this.props.repartitionBudget[2016]

		// console.log("Salaire net à payer : "+salaireNetAPayer+"Salaire imposable : "+salaireImposable)
		console.log('Salaire imposable : '+salaireImposable+' / Salaire net à payer : '+salaireNetAPayer)
		console.log('Imposition de : '+(salaireImposable - salaireNetAPayer))
		//To add break point: debugger
		
		return (
				<ReactHighcharts config = {draw(salaireImposable, salaireNetAPayer, repartitionBudget_2016)}></ReactHighcharts>
				//<ReactHighcharts config = {draw(17710, 14700)}></ReactHighcharts>
				)
	}
}