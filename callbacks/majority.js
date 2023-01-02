const majority = (arr, cb) => { // [1, 2, 3, 4, 5], isOdd()
    let count = 0; // count = 1

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {       // isOdd(1) = true
            count = count + 1   // count = 0 + 1
        }
    }
    return (count > arr.length - count)
}

const isOdd = num => { 
    return num % 2 === 1; 
};

console.log(majority([1, 2, 3, 4, 5], isOdd)); // should log: true
console.log(majority([2, 3, 4, 5], isOdd)); // should log: false