import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = createElement(` <div class="ribbon">
    <button class="ribbon__arrow ribbon__arrow_left ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    <nav class="ribbon__inner">  </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
  </div>`)
  this.ribbonInner = this.elem.querySelector('.ribbon__inner');
  this.leftArrow = this.elem.querySelector('.ribbon__arrow_left')
  this.rightArrow = this.elem.querySelector('.ribbon__arrow_right')
  this.leftArrow.addEventListener('click', () => this.ribbonInner.scrollBy(-350, 0))
  this.rightArrow.addEventListener('click', () => this.ribbonInner.scrollBy(350, 0))
  this.ribbonInner.addEventListener('scroll', () => {
    if(this.ribbonInner.scrollLeft < 1) {
      this.leftArrow.classList.remove('ribbon__arrow_visible')
    }
    if(this.ribbonInner.scrollLeft > 1) {
      this.leftArrow.classList.add('ribbon__arrow_visible')
    }
    if(this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth < 1) {
      this.rightArrow.classList.remove('ribbon__arrow_visible')
    }
    if(this.ribbonInner.scrollWidth - this.ribbonInner.scrollLeft - this.ribbonInner.clientWidth > 1) {
      this.rightArrow.classList.add('ribbon__arrow_visible')
    }
  })

  this.categories.map(i => {
    const category = createElement(`<a href="#" class="ribbon__item" data-id="${i.id}">${i.name}</a>`)
  
    category.addEventListener('click', () => {
      const customEvent = new CustomEvent("ribbon-select", { 
        detail: i.id, 
        bubbles: true 
      })
      this.elem.dispatchEvent(customEvent)   
    })

    document.addEventListener('ribbon-select', function(event) {        
      const items = document.querySelectorAll('.ribbon__item');
      items.forEach(item => {
        item.classList.remove('ribbon__item_active');
      });
  
      const activeItem = document.querySelector(`.ribbon__item[data-id="${event.detail}"]`);
      if (activeItem) {
        activeItem.classList.add('ribbon__item_active');
      }
   });
     this.ribbonInner.appendChild(category);
  })
  }
}
