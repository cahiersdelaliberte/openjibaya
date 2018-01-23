require('core-js/fn/promise')

const OPENFISCA_WEB_API_URL = "https://www.openfisca.tn/api/v0.13.0/"
const OPENFISCA_WEB_API_ENDPOINT = "calculate"
const REQUEST_URL = OPENFISCA_WEB_API_URL + OPENFISCA_WEB_API_ENDPOINT


//old headers = 'x-OpenFisca-Extensions': 'de_net_a_brut'
export function newPromise(){
	return new Promise( 
		(resolve, reject) =>
		fetch(REQUEST_URL)
			.then(response => {
				if (!response.ok) {
					const error = new Error(response.statusText)
					error.response = response
					reject(error)
				}
				return response.json()
			})
			.then(json => resolve(json))
		.catch(reject)
	)
}

function fetchCalculate(parameterId, apiBaseUrl = config.apiBaseUrl) {
	return fetchJson(`${apiBaseUrl}/calculate`)
}

//import fetch from "isomorphic-fetch"
function fetchJson(url, options) {
  return fetch(url, options)
    .then(response => response.json()
      .then(data => {
        if (response.status >= 200 && response.status < 300) {
          return {
            data,
            'country-package': response.headers.get('country-package'),
            'country-package-version': response.headers.get('country-package-version'),
          }
        }
        if (data.error) {
          throw new Error(JSON.stringify(data.error))
        }
        throw new Error(JSON.stringify({error: 'Unexpected return code ' + response.status}))
      })
  )
}




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


function callback(event){
	alert("une erreur est survenue")
}


export function updateSalaires(salaireImposable){
	console.log("updateSalaires")
	const salaires = {
		salaire_imposable: salaireImposable,
		salaire_net_a_payer: 14700
	}
	console.log(salaires)
	return salaires
}

export function newXmlHttpRequest(){
	var xhr = new XMLHttpRequest();
	const asynchronous = true

	xhr.timeout = 2000;
	xhr.ontimeout = function () {
		// Well, it took too long do some code here to handle that
		console.log("zzz")
	}
	
	xhr.addEventListener("error", callback, false)
	return xhr
}

export function send(xhr, salaireNetAPayer){
	const asynchronous = true
	xhr.open('post', REQUEST_URL, asynchronous)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send(buildJsonRequest(salaireNetAPayer))
}


export function request(salaireNetAPayer) {
	var xhr = new XMLHttpRequest();
	const asynchronous = true

	xhr.onreadystatechange = function(event) {
		//console.log("state " + xhr.readyState)
		//console.log("status " + xhr.status)

		if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
				// Code here for the server answer when successful
				var json = JSON.parse(xhr.responseText)
				console.log("successful response:")
				console.log(json)
				var salaireImposable = json.individus.openjibayiste.salaire_imposable['2017-12']
				var results = updateSalaires(salaireImposable)
				return results['salaire_imposable']
		}

		if (xhr.status === 404) {
			// Code here for the server answer when not successful
			//var json = JSON.parse(xhr.responseText)
			console.log("issue response:")
			console.log(xhr.status)
		}
	}
	
	
	xhr.timeout = 2000;
	xhr.ontimeout = function () {
		// Well, it took too long do some code here to handle that
		console.log("zzz")
	}
	
	xhr.addEventListener("error", callback, false)
	
	
	xhr.open('post', REQUEST_URL, asynchronous)
	xhr.setRequestHeader('Content-Type', 'application/json')
	xhr.send(buildJsonRequest(salaireNetAPayer))
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
