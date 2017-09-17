class FizzBuzzController {
	
	constructor() {
		this._numberOfLines = 100;
		this._FizzBuzzModel = new FizzBuzz();
		this._FizzBuzzView = new FizzBuzzView(document.querySelector('#display'));
	}

	loadData() {
		
		for (var x=0; x<=this._numberOfLines; x++) {
			let byThree = x % 3,
				byFive = x % 5,
				analyzed = this._FizzBuzzModel.isDivisible(x, byThree, byFive) || x;

				this._FizzBuzzView.displayAppended(analyzed);
		}

	}
}