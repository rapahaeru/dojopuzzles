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

		this.UrlView.retornaResultado(_url, this.UrlModel.componentesUrl('protocol'), 'Protocolo');
		this.UrlView.retornaResultado(_url, this.UrlModel.componentesUrl('domain'), 'Domínio');
		this.UrlView.retornaResultado(_url, this.UrlModel.componentesUrl('port'), 'Porta');
		this.UrlView.retornaResultado(_url, this.UrlModel.componentesUrl('queryString'), 'Query strings');

	}

}