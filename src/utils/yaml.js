
export function loadYaml(filepath){
	const yaml = require(`json-loader!yaml-loader!./../assets/data/${filepath}`)
	console.log(yaml)
	return yaml
}