const firstNumber: number = 0;
const secondNumber: number = 1;
const lengthFib: number = 6;

function getFib(first: number, second: number, amount: number): number[] {
    let fibonacci = [first, second];
    for (let i = 2; i < amount; i++) {
        fibonacci[i] = fibonacci[i-2] + fibonacci[i-1];
    }
    return fibonacci
}

console.log(getFib(firstNumber, secondNumber, lengthFib));