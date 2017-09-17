class FizzBuzz {

	isDivisible(num, byThree, byFive) {
		let returnInfo = '';

		if (byThree == 0 && num != 0){
			returnInfo = num + ': Fizz';
			
			if (byFive == 0 && num != 0)
				returnInfo += 'buzz';
		
		}else if (byFive == 0 && num != 0){
			returnInfo = num + ': Buzz';
		} else {
			return false
		}

		return returnInfo;
	}

}