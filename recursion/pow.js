const pow = (base, exponent) => {
    if (exponent === 1) {
        return base
    }
    return base * pow(base, exponent - 1)
    }

console.log(pow(2, 4)); // -> 16
console.log(pow(3, 5)); // -> 243