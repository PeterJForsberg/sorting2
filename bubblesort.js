var bubbleSort = function (array, option) {
	for (i = 0; i < array.length; i++) {
		for (j =0; j < array.length-i; j++) {
			if (compare(array[j], array[j+1])) {
				array = swap(j, j+1, array);
			}
		}
	}
	return array;
}; 

var compare = function(input1, input2) {
	return (input1 > input2);
};

var swap = function (input1, input2, array) {
	var temp = array[input1];
	array[input1] = array[input2];
	array[input2] = temp;
	return array;
};

/** for (var i = 0; i < array.length-1; i++) {
		console.log("How namy?", i)
		var first = array[i];
		var second = array[i+1];
		console.log(first,second);
		// begin with leftmost digit in array 
		// and compare that digit to the digit on its right; 
		if (array[i] > array[i+1]) {
			array[i+1] = first;
			array[i] = second;
			newArr.push(array[i]);
			newArr.push(array[i+1]);
		} else {
		// then if there is another digit on its right, compare to that one
			newArr.push(array[i]);

		}
	}

	newArr = [];
		var counter = 0;
		if (i > i+1) {
			counter ++;
		}

		

		if (counter === 0) {
			return newArr;
		}
		if (array[i] > array [i+1]) {
			newArr.push(arrayi+1);
		}
		return bubbleSort(newArr, option);
	}
	**/