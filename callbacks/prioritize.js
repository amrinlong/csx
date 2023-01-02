const prioritize = (arr, cb) => {
    let results = []
    let garbage = []

    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i])) {
            results.push(arr[i])
        } else {
            garbage.push(arr[i])
        }

    }
    return results.concat(garbage)
}

const startsWithS = str => { 
    return str[0].toLowerCase() === 's'; 
}
const tvShows = ['curb', 'rickandmorty', 'seinfeld', 'sunny', 'friends']
console.log(prioritize(tvShows, startsWithS)); // should log: ['seinfeld', 'sunny', 'curb', 'rickandmorty', 'friends']