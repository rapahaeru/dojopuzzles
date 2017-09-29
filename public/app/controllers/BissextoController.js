class BissextoController {

	constructor() {
		this.BissextoModel = new Bissexto();
		this.BissextoView = new BissextoView(document.querySelector('#retorno'));
		
	}

	verificaAno(event) {
		event.preventDefault();

		let inputYear = document.querySelector('#year').value,
			BissextoModel = this.BissextoModel,
			BissextoView = this.BissextoView;

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