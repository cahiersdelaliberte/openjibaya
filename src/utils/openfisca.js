const OPENFISCA_WEB_API_URL = "https://www.openfisca.tn/api/v0.13.0/"

export function fetchCalculate(){
  console.log("fetchCalculate - test with parameters")
  return fetchJson(OPENFISCA_WEB_API_URL + "parameters", initOptions())
}

function initOptions(){
	var headers = new Headers()
	headers.append('Content-Type', 'application/json') //to send json body

	var options = {
		method: 'GET',
		//credentials: 'include', //keep session on the request
		redirect: 'follow',
		headers: headers,
		//body: jsonRequest
	}
	
	return options
}

function fetchJson(url, options) {
  return fetch(url, options) //promise
    .then(response => {
      if(response.status == 404){
          console.log("ammar")
          throw new Error(JSON.stringify({error: 'Not found'}))
      }
      if (response.status >= 200 && response.status < 300) {
        console.log("status ok")
        console.log(response)
        return response.json()
      }
        throw new Error(JSON.stringify({error: 'Unexpected return code ' + response.status}))
    }).then(data => {
      console.log(data)
      return data
        //{
          //data,
          //'country-package': response.headers.get('country-package'),
          //'country-package-version': response.headers.get('country-package-version'),
        //}
      if (data.error) {
        throw new Error(JSON.stringify(data.error))
      }
  })
}

