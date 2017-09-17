class BissextoController {

	constructor() {
		this._Bissexto = new Bissexto();
		this._BissextoView = new BissextoView(document.querySelector('#retorno'));
		
	}

	verificaAno(event) {
		event.preventDefault();

		let inputYear = document.querySelector('#year').value,
			BissextoModel = this._Bissexto,
			BissextoView = this._BissextoView;

		BissextoView.limpaAreaParaRetorno();

		if (BissextoModel.isAYear(inputYear)) {
			
			if (BissextoModel.isBissextile(inputYear)){
				BissextoView.retornaMensagem('Bissexto!');	
			} else {
				BissextoView.retornaMensagem('Não é bissexto!');	
			}
			
		} else {
			BissextoView.retornaMensagem('Tem algo errado');
		}
	}

}