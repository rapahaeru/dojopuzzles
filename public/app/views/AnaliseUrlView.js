class AnaliseUrlView extends View {

	constructor(elemento) {
		super(elemento)
	}

	retornaResultado(variable, variableString) {

		let elementP = document.createElement('p');
		elementP.append(variableString + ' ==> ' + ((variable) ? variable : 'não encontrado (a)'));
		this._elemento.append(elementP);
	}
	
}