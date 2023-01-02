function after(counter, cb) {
    let storage = 0;
    
    const innerFunc = str => {
      if (storage < counter - 1) {
        storage++;
        return
      } else {
        return cb(str);
      }
    }
    
    return innerFunc;
  }
  
  const called = string => { return('hello ' + string); };
  const afterCalled = after(3, called);
  
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> undefined is printed
  console.log(afterCalled('world')); // -> 'hello world' is printed