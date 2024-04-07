function calculateFactorial(n) {
    if (n < 0) {
        return "Factorial is not defined for negative numbers";
    }

    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }

    return factorial;
}

const number = 5;
console.log(`Factorial of ${number} is:`, calculateFactorial(number));
