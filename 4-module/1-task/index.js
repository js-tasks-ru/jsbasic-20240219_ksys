function makeFriendsList(friends) {
  let elUl = document.createElement('ul')
  
  friends.map(i => {
    let elLi = document.createElement('li')    
    elLi.appendChild(document.createTextNode(i.firstName + ' ' + i.lastName))
    elUl.appendChild(elLi)
  })
  return elUl
}
makeFriendsList(friends)
