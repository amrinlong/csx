const addByX = x => {
    const innerFunc = input => { return x + input }
    return innerFunc
  }
  
  const addByTwo = addByX(2);
  const addByFive = addByX(5) // innerFunc(input) { return 5 + input }
  
  // Now call addByTwo with an input of 1 and log the output
  console.log(addByTwo(1))
  console.log(addByFive(1))
  // Now call addByTwo with an input of 2 and log the output
  