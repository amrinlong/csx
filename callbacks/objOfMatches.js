const objOfMatches = (a1, a2, cb) => {
    let obj = {}

    for (let i = 0; i < a1.length; i++) {
        if (cb(a1[i]) === a2[i]) {
            obj[a1[i]] = a2[i]
        }
    }

    return obj
}

// Uncomment these to check your work!
const arr1 = ['hi', 'howdy', 'bye', 'later', 'hello'];
const arr2 = ['HI', 'Howdy', 'BYE', 'later', 'HELLO'];
function uppercaser(str) { return str.toUpperCase(); }
console.log(objOfMatches(arr1, arr2, uppercaser)); // should log: { hi: 'HI', bye: 'BYE', hello: 'HELLO' }


// arr1Obj = { 0: 'hi', 1: 'howdy', 2: 'bye', 3: 'later', 4: 'hello'; length: 5}
// arr1[0] = 'all'