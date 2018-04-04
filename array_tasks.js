var arrayTasks = {

	concat: function (arr1, arr2) {
		for(let element of arr2) {
			arr1.push(element);
		}
		const newArray = arr1;
		return arr1;
	},

	insertAt: function (arr, itemToAdd, index) {
		let newArray = [];
		for(let i = 0; i < arr.length; i++) {
			if(i === index) {
				newArray.push(itemToAdd);
				newArray.push(arr[i]);
			}
			else {
				newArray.push(arr[i]);
			}
		}
		return newArray;
	},

	square: function (arr) {
		let newArray = [];
		for(let element of arr) {
			newArray.push(element ** 2)}
		return newArray;
	},

	sum: function (arr) {
		let total = arr.reduce(function(x, y) {return x + y}, 0);
		return total;
	},

	findDuplicates: function (arr) {
		var duplicates = [];
    for (element of arr) {
			if (arr.indexOf(element) !== arr.lastIndexOf(element)) {
        if (!duplicates.includes(element)){
            duplicates.push(element);
        }
      }
    }
        return duplicates;
    },

	removeAndClone: function (arr, valueToRemove) {
		let newArray = [];
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] !== valueToRemove) {
				newArray.push(arr[i]);
			}
		}
		return newArray;
	},

	findIndexesOf: function (arr, itemToFind) {
		let newArray = [];
		for(let i = 0; i < arr.length; i++) {
			if(arr[i] === itemToFind) {
				newArray.push(i);
			}
		}
		return newArray;
	},

	sumOfAllEvenNumbersSquared: function (arr) {
		// find all even numbers, put in an array
		// square them all
		// calculate the sum
		let evens = [];
		for(let number of arr) {
			if(number % 2 === 0) {
				evens.push(number);
			}
		}
		let result = this.sum(this.square(evens));
		return result;
	}

}

module.exports = arrayTasks
