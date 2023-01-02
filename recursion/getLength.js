const getLength = (array, i = 0) => {
	if (array[0] === undefined) {
        return i
    }
    i++;
    return getLength(array.slice(1), i)
}

console.log(getLength([1])); // -> 1
console.log(getLength([1, 2])); // -> 2
console.log(getLength([1, 2, 3, 4, 5])); // -> 5
console.log(getLength([])); // -> 0
