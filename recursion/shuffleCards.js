const shuffleCards = (topHalf, bottomHalf, shuffled = []) => {

    if (topHalf.length === 0) {
        let results = shuffled.concat(bottomHalf);
        return results;
    } else if (bottomHalf.length === 0) {
        let results = shuffled.concat(topHalf);
        return results;
    }

    shuffled.push(topHalf[0], bottomHalf[0])
    return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), shuffled)
}

const topHalf = ['Queen of Diamonds', 'Five of Hearts', 'Ace of Spades', 'Eight of Clubs'];
const bottomHalf = ['Jack of Hearts', 'Ten of Spades'];
console.log(shuffleCards(topHalf, bottomHalf));
    /*-> [
        'Queen of Diamonds',
        'Jack of Hearts',
        'Five of Hearts',
        'Ten of Spades',
        'Ace of Spades',
        'Eight of Clubs',
        ]
    */