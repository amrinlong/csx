const countBy = (arr, cb) => {

    return arr.reduce((acc, cur) => {
        const key = cb(cur)
        
        acc[key] = acc[key] + 1 || 1

        

        return acc
    }, {})
}

const evenOdd = n => {
    if (n % 2 === 0) {
      return 'even';
    } else {
      return 'odd';
    }
  }
  const nums = [1, 2, 3, 4, 5];
  console.log(countBy(nums, evenOdd)); // should log: { odd: 3, even: 2 }