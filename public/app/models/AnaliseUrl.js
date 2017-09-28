class AnaliseUrl {

	constructor() {

	}

	urlEValida(url) {
		let pattern = new RegExp(this.parametrosRegEx.protocol + // protocolo
			this.parametrosRegEx.domain // dominio
		,'i');
		return pattern.test(url);
	}


	componentesUrl(RegExpName) {
		return new RegExp(this.parametrosRegEx[RegExpName]);
	}

	get parametrosRegEx() {
		return  {
				protocol: '(^http(s)?:\/\/)',
				domain: '((([a-z\\d-]*[a-z\\d])\\.)+[a-z]{2,})',
				path: '((\\:\\d+)?(\\/[-a-z\\d%.]*)*)',
				port: '(\\:\\d+)',
				queryString: '(\\?[;&#~a-zA-Z._-\\d%=]*)'
			};
	}
}