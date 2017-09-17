class View {

	constructor(elemento) {
		this._elemento = elemento;
	}

	limpaAreaParaRetorno() {
		this._elemento.innerHTML = "";
	}

	retornaMensagem(mensagem) {
		this._elemento.innerHTML = mensagem;
	}
}