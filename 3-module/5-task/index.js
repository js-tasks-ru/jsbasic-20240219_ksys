function getMinMax(str) {
  const numbersArray = str.split(' ').filter(i => !isNaN(i))
  
  return {
    min: Math.min(...numbersArray),
    max: Math.max(...numbersArray),
  }
}
