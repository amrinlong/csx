const countBy = (arr, cb) => {
    // let obj = {}
///////////////////////////////////////////////////////////
    // for (let i = 0; i < arr.length; i++) {
    //     const key = cb(arr[i])
        // if (!obj[key]) {
        //     obj[key] = 1
        // } else {
        //     obj[key] = obj[key] + 1
        // }
    // }
///////////////////////////////////////////////////////////
    // arr.forEach((item) => {
    //     let key = cb(item)
    //     if (!obj[cb(item)]) {
    //         obj[cb(item)] = 1
    //     } else {
    //         obj[cb(item)] = obj[key] + 1
    //     }
    // })
///////////////////////////////////////////////////////////
    return arr.reduce((acc, cur) => { // obj = {}, 1
        let key = cb(cur)
        if (!acc[key]) {
          acc[key] = 1
        } else {
          acc[key] = acc[key] + 1
        }
        return acc
    }, {})

    // return obj
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