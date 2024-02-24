function ucFirst(str) {
  if (!str.length)  return str
  if (str.length === 1)  return str.toUpperCase()
  const firstSymbol = str[0].toUpperCase()
  return firstSymbol + str.slice(1)
}
