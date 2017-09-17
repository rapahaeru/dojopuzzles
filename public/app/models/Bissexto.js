class Bissexto {

	constructor() {

	}

	isAYear(year) {
		if (year.indexOf('.') !== -1 || isNaN(year) || year.length != 4)
			return false
		return true
	}
	
	isBissextile(year) {

		if (!this.isAYear(year)) return false;
		
		let byFour = year % 4,
			byHundred = year % 100,
			byFourHundred = year % 400;

			if (byFour == 0){
				if (byHundred != 0) {
					return true;
				}else {
					if (byFourHundred == 0)	
						return true;
					 else 
						return false;
				}
			} else {
				return false;
			}
	}
}