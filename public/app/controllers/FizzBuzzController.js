class FizzBuzzController {
	
	constructor() {
		this.numberOfLines = 100;
		this.FizzBuzzModel = new FizzBuzz();
		this.FizzBuzzView = new FizzBuzzView(document.querySelector('#display'));
	}

	loadData() {
		
		for (var x=0; x<=this.numberOfLines; x++) {
			let byThree = x % 3,
				byFive = x % 5,
				analyzed = this.FizzBuzzModel.isDivisible(x, byThree, byFive) || x;

				this.FizzBuzzView.displayAppended(analyzed);
		}

	}
}