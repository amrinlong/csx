const shuffleCards = (topHalf, bottomHalf) => {
    let results = []
    let finalResults = results.filter((x) => {
        return x !== undefined
    })
    let obj = {}
    let count = 0

    for (let k in topHalf) {
        obj[k] = [topHalf[k]].concat([bottomHalf[k]])
        count++
    }

    for (let i = 0; i < count; i++) {
            results.push(obj[i])
    }

    // for (let j = 0; j < results.length; j++) {
    //     console.log(results.length)
    // }
    
    return results
}

const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
    /*-> ['Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
        ]
    */