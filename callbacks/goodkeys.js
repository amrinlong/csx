const goodKeys = (obj, cb) => {
    let results = []

    for (let key in obj) {
        if (cb(obj[key])) {
            results.push(key)
        } 
    }
    return results
}

const sunny = { mac: 'priest', dennis: 'calculator', charlie: 'birdlaw', dee: 'bird', frank: 'warthog' };
const startsWithBird = str => { 
    return str.slice(0, 4).toLowerCase() === 'bird'; 
};
console.log(goodKeys(sunny, startsWithBird)); // should log: ['charlie', 'dee']