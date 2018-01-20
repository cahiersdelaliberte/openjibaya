const OPENFISCA_WEB_API_URL = "https://www.openfisca.tn/api/v0.13.0/"
const OPENFISCA_WEB_API_ENDPOINT = "calculate"
const REQUEST_URL = OPENFISCA_WEB_API_URL + OPENFISCA_WEB_API_ENDPOINT


function buildQuestion(salaireNetAPayer){
	return {
		"salaire_net_a_payer": {
			"2017-12": salaireNetAPayer
		},
		"salaire_imposable" : {
			"2017-12": null
		}
	}
}

function buildJsonRequest(salaireNetAPayer){
	var jsonQuestion = {
			"individus": { 
				"openjibayiste": buildQuestion(salaireNetAPayer)
			},
			"foyers_fiscaux": {
				"foyer_fiscal_1": {
					"declarants": [
						"openjibayiste"
					]
				}
			},
			"menages": {
				"menage_1": {
					"personne_de_reference": [
						"openjibayiste"
					]
				}
			}
		}
		
	console.log(JSON.stringify(jsonQuestion))	
	return JSON.stringify(jsonQuestion)
}


export function request(salaireNetAPayer) {
	const xhr = new XMLHttpRequest();
	xhr.timeout = 2000;
	xhr.onreadystatechange = function(e) {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				// Code here for the server answer when successful
				var jsonContent = xhr.responseText
				var json = JSON.parse(jsonContent)
				console.log("successful response:")
				console.log(json)
				//return json.individus.openjibayiste.salaire_imposable['2017-12']
			} else {
				// Code here for the server answer when not successful
				console.log(xhr.status)
				var jsonContent = xhr.responseText
				var json = JSON.parse(jsonContent)
				console.log("issue response:")
				console.log(json)
			}
		} else {
			console.log(xhr.readyState)
		}
	}
	xhr.ontimeout = function () {
		// Well, it took too long do some code here to handle that
		console.log("zzz")
	}
	xhr.open('post', REQUEST_URL, true)
	xhr.send(buildJsonRequest(salaireNetAPayer));
}



/*export function askOpenFisca(){
	console.log("askOpenFisca")

	var request = new XMLHttpRequest()
	var asynchronous = false

	request.open("POST", REQUEST_URL, asynchronous)
	request.setRequestHeader('Content-Type', 'application/json')
	
	if ( asynchronous )
		request.onreadystatechange = function () {
			if (request.readyState === 4 && request.status === 200) {
				var jsonContent = request.responseText
				var json = JSON.parse(jsonContent)
				console.log("OpenFisca response:")
				console.log(json)
				return json.individus.openjibayiste.salaire_imposable['2017-12']
			}
		}
	else 
		request.timeout = 4000
		asynchronous = true
	
	var jsonQuestion = {
		"individus": { 
			"openjibayiste": {
				"salaire_net_a_payer": {
					"2017-12": 1225
				},
				"salaire_imposable" : {
					"2017-12": null
				}
			}
		},
		"foyers_fiscaux": {
			"foyer_fiscal_1": {
				"declarants": [
					"openjibayiste"
				]
			}
		},
		"menages": {
			"menage_1": {
				"personne_de_reference": [
					"openjibayiste"
				]
			}
		}
	}
	
	
	var data = JSON.stringify(jsonQuestion)
	request.send(data)
}*/
