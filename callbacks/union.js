const union = (arr) => {
    let results = [] /* [ 5, 10, 15, 15, 88, 1, 5, 7, 100, 15, 10, 1, 5 ]*/

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            results.push(arr[i][j])
        }
    }
    return results
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]