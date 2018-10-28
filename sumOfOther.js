module.exports = function sumOfOther(arr) {
	const newArr = [];
	const sum = arr.reduce((a,b) => a + b);
	for(let i=0; i<arr.length; i++) {
		newArr[i] = sum - arr[i];
	}
	return newArr;
}