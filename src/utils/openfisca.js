const OPENFISCA_WEB_API_URL = "https://www.openfisca.tn/api/v0.13.0/"
const OPENFISCA_WEB_API_ENDPOINT = "calculate"
const REQUEST_URL = OPENFISCA_WEB_API_URL + OPENFISCA_WEB_API_ENDPOINT


export function askOpenFisca(){
	console.log("askOpenFisca")

	var request = new XMLHttpRequest()
	var asynchronous = false

	request.open("POST", REQUEST_URL, asynchronous)
	request.setRequestHeader('Content-Type', 'application/json')
	
	request.onreadystatechange = function () {
		if (request.readyState === 4 && request.status === 200) {
			var jsonContent = request.responseText
			var json = JSON.parse(jsonContent)
			console.log("OpenFisca response:")
			console.log(json)
			return json.individus.openjibayiste.salaire_imposable['2017-12']
		}
	}
	
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
}
