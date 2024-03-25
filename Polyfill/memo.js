function memoize(func) {
    const cache = {}; // Cache to store computed results

    return function (...args) {
        const key = JSON.stringify(args); // Generate a unique key based on function arguments

        if (!cache[key]) {
            cache[key] = func.apply(this, args); // Compute and cache the result if not already cached
        }

        return cache[key]; // Return the cached result
    };
}





// Example of a function to be memoized
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoize the fibonacci function
const memoizedFibonacci = memoize(fibonacci);

// Call the memoized function
console.log(memoizedFibonacci(10)); // Output: 55
console.log(memoizedFibonacci(5));  // Output: 5
console.log(memoizedFibonacci(10)); // Output: 55 (Retrieved from cache)
