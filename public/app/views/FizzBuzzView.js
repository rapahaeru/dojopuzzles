class FizzBuzzView {
	
	constructor(element) {
		this._display = element;
	}

	displayAppended(info) {
		let p = document.createElement('p');
			p.append(info);
			this._display.append(p);			
	}
}