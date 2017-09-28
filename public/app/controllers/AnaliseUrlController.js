class AnaliseUrlController {

	constructor() {
		this.UrlModel = new AnaliseUrl();
		this.UrlView = new AnaliseUrlView(document.querySelector('#retorno'));
	}

	VerificaUrl(event) {
		
		event.preventDefault();
		this.UrlView.limpaAreaParaRetorno();

		let _url = document.querySelector('#url').value;

		if (!this.UrlModel.urlEValida(_url)) {
			this.UrlView.retornaMensagem("Url inválida")
			return;
		}

		this.UrlView.retornaResultado(this.UrlModel.componentesUrl(_url, 'protocol'), 'Protocolo');
		this.UrlView.retornaResultado(this.UrlModel.componentesUrl(_url, 'domain'), 'Domínio');
		this.UrlView.retornaResultado(this.UrlModel.componentesUrl(_url, 'port'), 'Porta');
		this.UrlView.retornaResultado(this.UrlModel.componentesUrl(_url, 'queryString'), 'Query strings');

	}

}