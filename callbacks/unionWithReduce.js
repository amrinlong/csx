const union = (arr) => {
    return arr.reduce((acc, cur) => { // ([], [5, 10, 15])
        for (let i = 0; i < cur.length; i++) {
            if (!acc.includes(cur[i])) {
                acc.push(cur[i])
            }
        }
        return acc
    }, []) 
}

const arr1 = [5, 10, 15];
const arr2 = [15, 88, 1, 5, 7];
const arr3 = [100, 15, 10, 1, 5];
console.log(union([arr1, arr2, arr3])); // should log: [5, 10, 15, 88, 1, 7, 100]

const sumWithInital = array1.reduce((acc, cur) => { return acc + cur }, iniVal)