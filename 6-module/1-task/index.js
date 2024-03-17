/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.rows = rows;
    this.elem = document.createElement('table')
    this.elem.innerHTML =`<table>
    <thead>
      <tr>
        <th>Имя</th>
        <th>Возраст</th>
        <th>Зарплата</th>
        <th>Город</th>
        <th></th>
      </tr>
    </thead>
    <tbody> 
    ${this.rows.map(i => `
    <tr>
      <td>${i.name}</td>
      <td>${i.age}</td>
      <td>${i.salary}</td>
      <td>${i.city}</td>
      <td><button class="delete-btn">X</button></td>
    </tr>
  `).join('')}      
    </tbody>
  </table>`
  this.elem.addEventListener('click', (event) => {
    if (event.target.classList.contains('delete-btn')) {
      event.target.closest('tr').remove()
    }
  })
  }
}
