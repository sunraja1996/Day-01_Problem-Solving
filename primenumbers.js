// A prime number is a number that is divisible only by 1 and itself, and it has no other divisors. 

function isPrime(num) {
    if(num == 2) return true;
    if(num % 2 == 0) return false;
    for(let i = 3; i*i <= num; i+=2){
        if(num % i === 0){
            return [false];
        }
    }
    return [true];
}

console.log(isPrime(101));
