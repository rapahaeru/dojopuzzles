class AnaliseUrlController {

	constructor() {
		this.UrlModel = new AnaliseUrl();
		this.UrlView = new AnaliseUrlView(document.querySelector('#retorno'));
	}

	VerificaUrl(event) {
		
		event.preventDefault();
		this.UrlView.limpaAreaParaRetorno();

		let _url = document.querySelector('#url').value,
			_regEx = this.UrlModel.parametrosRegEx;

		if (!this.UrlModel.urlEValida(_url)) {
			this.UrlView.retornaMensagem("Url inválida")
			return;
		}

		let protocol = new RegExp(_regEx.protocol),
			domain = new RegExp(_regEx.domain),
			queryString = new RegExp(_regEx.queryString),
			port = new RegExp(_regEx.port);

		if (domain.test(_url)) {
			this.UrlView.retornaResultado(_url, protocol, 'protocolo');
			this.UrlView.retornaResultado(_url, domain, 'Dominio');
			this.UrlView.retornaResultado(_url, port, 'porta');
			this.UrlView.retornaResultado(_url, queryString, 'query strings');
		}		

	}

}