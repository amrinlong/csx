const flow = (input, funcArr) => {
    if (funcArr.length === 0) {
        return input
    }
    const output = funcArr[0](input)

    return flow(output, funcArr.slice(1))
}

function multiplyBy2(num) { return num * 2; }
function add7(num) { return num + 7; }
function modulo4(num) { return num + 4; }
function subtract10(num) { return num - 10; }
const arrayOfFunctions = [multiplyBy2, add7, modulo4, subtract10];
console.log(flow(2, arrayOfFunctions)); // -> -7