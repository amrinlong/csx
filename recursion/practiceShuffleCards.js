const shuffleCards = (topHalf, bottomHalf, shuffled = []) => {
  // let results = []
  
  // for (let i = 0; i < Math.max(topHalf.length, bottomHalf.length); i++) {
  //   if (topHalf[i]) {
  //     results.push(topHalf[i]);
  //   }
  //   if (bottomHalf[i]) {
  //     results.push(bottomHalf[i]);
  //   }
  // }

  // return results

  // if (topHalf.length) {
  //   results.push(topHalf[0])
  //   } 
  // if (bottomHalf.length) {
  //     results.push(bottomHalf[0])
  //   }

  // return results.concat(shuffleCards(topHalf.slice(1), bottomHalf.slice(1)));

  if (topHalf.length === 0) {
		let result = shuffled.concat(bottomHalf);
		return result;
  } else if (bottomHalf.length === 0) {
		let result = shuffled.concat(topHalf);
		return result;
	}
	shuffled.push(topHalf[0], bottomHalf[0]);
  // recursive case, call shuffleCards 
  return shuffleCards(topHalf.slice(1), bottomHalf.slice(1), shuffled)

  
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