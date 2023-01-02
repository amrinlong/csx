const createFunction = () => {
    return () => {
      return 'hello world'
    }
  }
  
  const myFunction = createFunction();
  console.log(myFunction()); //should log: 'hello world'