import createElement from "../../assets/lib/create-element.js";

export default class StepSlider {
 constructor({ steps, value = 0 }) {    
    this.value = value;
    this.elem = createElement(`<div class="slider">
      <div class="slider__thumb" style="left: 50%;">
        <span class="slider__value">${this.value}</span>
      </div>
      <div class="slider__progress" style="width: 0%;"></div>
      <div class="slider__steps"></div>
    </div>`);
    this.sliderSteps = this.elem.querySelector('.slider__steps');
    for (let i = 0; i < steps; i++) {
      let step = (i === this.value) ? createElement(`<span class="slider__step-active"></span>`) : createElement(`<span></span>`);
      this.sliderSteps.appendChild(step);
    }

    this.elem.addEventListener('click', (event) => {
     
      this.value = Math.round((event.clientX - this.elem.getBoundingClientRect().left) * (steps - 1) / this.elem.offsetWidth);
      this.leftPercent = this.value * 100 / (steps - 1);

      this.elem.querySelector('.slider__thumb').style.left = `${this.leftPercent}%`;
      this.elem.querySelector('.slider__progress').style.width = `${this.leftPercent}%`;
      this.elem.querySelector('.slider__value').textContent = this.value;

      this.sliderSteps.querySelectorAll('.slider__step-active').forEach(step => step.classList.remove('slider__step-active'));
      this.sliderSteps.children[this.value].classList.add('slider__step-active');

      const customEvent = new CustomEvent('slider-change', {
        detail: this.value,
        bubbles: true
      });
      this.elem.dispatchEvent(customEvent);
    });
 }
}
