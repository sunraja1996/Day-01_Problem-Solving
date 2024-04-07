function findNthFibonacci(n) {
    if (n <= 0) {
        return "Invalid input";
    }

    let fibPrev = 0;
    let fibCurrent = 1;

    for (let i = 2; i <= n; i++) {
        let temp = fibCurrent;
        fibCurrent = fibPrev + fibCurrent;
        fibPrev = temp;
    }

    return fibCurrent;
}

const n = 8;
console.log(`The ${n}th Fibonacci number is:`, findNthFibonacci(n));
