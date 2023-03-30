function getFirstNPrimes (n) {
    let primes = []
    let num = 2

    while (primes.length < n) {
        if (isPrime(num)) {
            primes.push(num)
        }
        num++
    }
    return primes
}

function isPrime(num) {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false
    return num !== 1 && num !== 0
}

console.time()
const n = process.argv[2]
const result = getFirstNPrimes(n)
console.log(result)
console.timeEnd()