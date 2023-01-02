const factorial = (num, total = 1) => {
    //base case = when num countsdown and hits 0 
    if (num === 0) return total
    total = num * total
    num--
    return factorial(num, total)
    }

    console.log(factorial(4)); // -> 24
    console.log(factorial(6)); // -> 720
    console.log(factorial(0)); // -> 1