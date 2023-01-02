console.log('Hello, world!');

const repeater = char => {
    if (char.length === 5) {
        return char
    }
    return repeater(char + char[0] )
}

console.log(repeater('g'));
console.log(repeater('j'));

