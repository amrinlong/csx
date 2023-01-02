const multiMap = (a1, a2) => {
  let obj = {}
  
  for (let i = 0; i < a1.length; i++) { // i = 0 ; 'catfood'
    let innerArr = []
    for (let j = 0; j < a2.length; j++) { // j = 0; uppercaser()
        innerArr.push(a2[j](a1[i]))  // 
    }
    obj[a1[i]] = innerArr
  }
  return obj
}

const uppercaser = str => { 
    return str.toUpperCase(); 
}
const capitalize = str => { 
    return str[0].toUpperCase() + str.slice(1).toLowerCase(); 
}
const repeater = str => { 
    return str + str; 
}
const items = ['catfood', 'glue', 'beer'];
const functions = [uppercaser, capitalize, repeater];
console.log(multiMap(items, functions)); 
// should log: 
/* 
{ 
    catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], 
    glue: ['GLUE', 'Glue', 'glueglue'], 
    beer: ['BEER', 'Beer', 'beerbeer'] 
}
*/
