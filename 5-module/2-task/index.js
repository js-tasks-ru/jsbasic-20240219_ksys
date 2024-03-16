function toggleText() {
  let hiddenButton = document.querySelector('.toggle-text-button')
  hiddenButton.addEventListener('click', () => {text.hidden === true ? text.hidden = false : text.hidden = true})
}
