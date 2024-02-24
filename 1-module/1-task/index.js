function factorial(n) {
    if (n === 0) return 1
    let fact = 1
    let i = 1
    while (i <= n) {
      fact = fact * i
      i++
    }
   return fact
}
