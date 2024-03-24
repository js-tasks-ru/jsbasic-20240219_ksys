import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = createElement(`
    <div class="carousel">    
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>
  
      <div class="carousel__inner">    
        
      </div>
    </div>    
  `)
  this.carouselInner = this.elem.querySelector('.carousel__inner');

    this.slides.map(i => {
    const slide = createElement(`<div class="carousel__slide" data-id="chicken-cashew">
    <img src="/assets/images/carousel/${i.image}" class="carousel__img" alt="slide">
    <div class="carousel__caption">
      <span class="carousel__price">€${i.price.toFixed(2)}</span>
      <div class="carousel__title">${i.name}</div>
      <button type="button" class="carousel__button">
        <img src="/assets/images/icons/plus-icon.svg" alt="icon">
      </button>
    </div>
  </div>`)

  this.button = slide.querySelector('.carousel__button')
    this.button.addEventListener('click', () => {
      const customEvent = new CustomEvent("product-add", { 
        detail: i.id, 
        bubbles: true 
      })
      this.elem.dispatchEvent(customEvent)   
    })

    this.carouselInner.appendChild(slide)
    }     
    )
    this.slideIndex = 0  
    this.rightArrow = this.elem.querySelector('.carousel__arrow_right')
    this.leftArrow = this.elem.querySelector('.carousel__arrow_left')
    this.leftArrow.style.display = 'none'
    this.rightArrow.addEventListener('click', () => {this.slideIndex++; this.render()})
    this.leftArrow.addEventListener('click', () => {this.slideIndex--; this.render()})
    
     

    

  }
  render = () => {   
    this.slideIndex === 0 ? this.leftArrow.style.display = 'none' : this.leftArrow.style.display = '';
    this.slideIndex === this.slides.length - 1 ? this.rightArrow.style.display = 'none' : this.rightArrow.style.display = '';
    let offset = this.elem.querySelector('.carousel__inner').offsetWidth    
    this.elem.querySelector('.carousel__inner').style.transform = `translateX(${-this.slideIndex * offset}px)`    
  }  
}
