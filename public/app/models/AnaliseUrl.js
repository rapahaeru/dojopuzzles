class AnaliseUrl {

	constructor() {

	}

	urlEValida(url) {
		let pattern = new RegExp(this.parametrosRegEx.protocol + // protocolo
			this.parametrosRegEx.domain // dominio
		,'i');
		return pattern.test(url);
	}


	componentesUrl(url, RegExpName) {
		let regEx = new RegExp(this.parametrosRegEx[RegExpName]);
		return (url.match(regEx)) ? url.match(regEx)[0] : false;
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