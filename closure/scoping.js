const outer = (counter = 0) => {
    const incrementCounter = () => {
      counter++;
      console.log('counter', counter);
    }
    return incrementCounter;
  }
  
  const willCounter = outer();
  const jasCounter = outer();
  
  // Uncomment each of these lines one by one.
  // Before your do, guess what will be logged from each function call.
  
  willCounter();
  willCounter();
  willCounter();
  
  jasCounter();
  willCounter();