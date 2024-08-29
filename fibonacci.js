//calculate Fibonacci using a loop
function fibonacciLoop(n) {
    let a = 0, b = 1, temp;
    if (n <= 1) return n;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}

//calculate Fibonacci using recursion
function fibonacciRecursion(n) {
    if (n <= 1) return n;
    return fibonacciRecursion(n - 1) + fibonacciRecursion(n - 2);
}

//Test the functions
const n = 10; // You can change this value to test other cases

console.log(`Fibonacci using Loop for n=${n}: ${fibonacciLoop(n)}`);
console.log(`Fibonacci using Recursion for n=${n}: ${fibonacciRecursion(n)}`);
