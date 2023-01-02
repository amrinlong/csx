const groupBy = (arr, cb) => {
    let obj = {}
    
    for (let i = 0; i < arr.length; i++) {
        let floor = cb(arr[i])

        if (!obj[floor]) {
            obj[floor] = [arr[i]]
        } else { 
            obj[floor] = [obj[floor], arr[i]].flat()
        }
    }
    return obj
}

const decimals = [1.3, 2.1, 2.4];
const floored = function(num) { return Math.floor(num); };
console.log(groupBy(decimals, floored)); // should log: { 1: [1.3], 2: [2.1, 2.4] }
