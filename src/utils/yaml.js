
export function loadYaml(filepath){
	//Load yaml file and return JS Object with yaml content
	return require(`json-loader!yaml-loader!./../assets/data/${filepath}`)
}