class AnaliseUrlView extends View {

	constructor(elemento) {
		super(elemento)
	}

	retornaResultado(url, variable, variableString) {

		var matching = (url.match(variable)) ? url.match(variable)[0] : variableString + ' não encontrado(a)';

		let elementP = document.createElement('p');
		elementP.append(variableString + ' ==> ' + matching);
		this._elemento.append(elementP);
	}
	
}