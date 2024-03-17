function initCarousel() {
  let slideIndex = 0  
  const rightArrow = document.querySelector('.carousel__arrow_right')
  const leftArrow = document.querySelector('.carousel__arrow_left')
  leftArrow.style.display = 'none'
  rightArrow.addEventListener('click', () => {slideIndex++; render()})
  leftArrow.addEventListener('click', () => {slideIndex--; render()})
  
  function render() {   
    slideIndex === 0 ? leftArrow.style.display = 'none' : leftArrow.style.display = '';
    slideIndex === 3 ? rightArrow.style.display = 'none' : rightArrow.style.display = '';
    let offset = document.querySelector('.carousel__inner').offsetWidth    
    document.querySelector('.carousel__inner').style.transform = `translateX(${-slideIndex * offset}px)`    
  }  
}
