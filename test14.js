//fibonacci sequence

function fibonacci(n){
    //The base case stops when n is 0 or 1, returning n
    if(n <= 1) return n;
    //Use recursion to calculate the result by calling the function with the two previous numbers, n-1 and n-2.
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(6));