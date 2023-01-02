const shuffleCards = (topHalf, bottomHalf) => {
    let results = []
    let longestArr = []
    let shortestArr = []

    if (topHalf.length > bottomHalf.length) {
        longestArr = topHalf
        shortestArr = bottomHalf
    } else {
        longestArr = bottomHalf
        shortestArr = topHalf
    }

    for (let i = 0; i < longestArr.length; i++) { // QofD
        for (let j = 0; j < shortestArr.length; j++) { // JofH
            
        }
    }
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