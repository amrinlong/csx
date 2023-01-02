// ADD CODE HERE
const cycleIterator = arr => {
    let counter = 0
    
    return () => {
      if (counter === arr.length) {  
        counter = 0 
      }
      return arr[counter++]
    } 
  }
  
  const threeDayWeekend = ['Fri', 'Sat', 'Sun'];
  const getDay = cycleIterator(threeDayWeekend);
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'
  console.log(getDay()); // should log: 'Fri'
  console.log(getDay()); // should log: 'Sat'
  console.log(getDay()); // should log: 'Sun'