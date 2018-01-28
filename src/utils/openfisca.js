const OPENFISCA_WEB_API_URL = "https://www.openfisca.tn/api/v0.13.0/"


export function fetchCalculate(salaireNetAPayer){
  console.log(salaireNetAPayer)
  return fetchJson(OPENFISCA_WEB_API_URL + "calculate", 
           initOptions(buildJsonRequest(salaireNetAPayer)))
}

function initOptions(jsonRequest){
	var headers = new Headers()
	headers.append('Content-Type', 'application/json') //to send json body

	var options = {
		method: 'POST',
		//credentials: 'include', //keep session on the request
		redirect: 'follow',
		headers: headers,
		body: jsonRequest
	}
	
	return options
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


function fetchJson(url, options) {
  return fetch(url, options) //promise
    .then(response => {
      if(response.status == 404){
          throw new Error(JSON.stringify({error: 'Not found'}))
      }
      if (response.status >= 200 && response.status < 300) {
        console.log("status ok")
        console.log(response)
        console.log(response.headers.get('country-package'))
        console.log(response.headers.get('country-package-version'))
        return response.json()
      }
      throw new Error(JSON.stringify({error: 'Unexpected return code ' + response.status}))

    }).then(data => {
      console.log(data)
      return data
      if (data.error) {
        throw new Error(JSON.stringify(data.error))
      }
  })
}
