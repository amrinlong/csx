const saveOutput = (cb, pw) => {
    const log = {} // to add to an object use dot notation or bracket notation (key = value)
    
    return input => { 
      if (pw === input ) {
        return log
      }
      
      log[input] = cb(input)
      return log[input]
    }
  }
  
  const multiplyBy2 = function(num) { return num * 2; };
  const multBy2AndLog = saveOutput(multiplyBy2, 'boo');
  console.log(multBy2AndLog(2)); // should log: 4
  console.log(multBy2AndLog(9)); // should log: 18
  console.log(multBy2AndLog('boo')); // should log: { 2: 4, 9: 18 }