//find the factorial of a number

function factorial(n){
    //The base case stops when n is 0 or 1, returning 1
    if(n === 0 || n === 1) return 1;
    //Use recursion to multiply the number n by the factorial of (n - 1).
    return n * factorial(n - 1);
}

console.log(factorial(0));