function isEmpty(obj) {
  let length = 0
  for (let key in obj) {
    length++
  }
  return !!length ? false : true
}
