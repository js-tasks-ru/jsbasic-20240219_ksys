let friends = [
  {
      firstName: 'Artsiom',
      lastName: 'Mezin'
  },
  {
      firstName: 'Ilia',
      lastName: 'Kantor'
  },
  {
      firstName: 'Christopher',
      lastName: 'Michael'
  }
];
function makeFriendsList(friends) {

  let elUl = document.createElement('ul')
  console.log('elUl1',elUl)
  friends.map(i => {
    let elLi = document.createElement('li')
    // elLi.innerHtml(`i.firstName + ' ' + i.lastName`)
    elLi.appendChild(document.createTextNode(i.firstName + ' ' + i.lastName))
    elUl.appendChild(elLi)
  })
  return elUl
}
makeFriendsList(friends)

