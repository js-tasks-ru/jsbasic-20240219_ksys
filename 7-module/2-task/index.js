import createElement from '../../assets/lib/create-element.js';

export default class Modal {
  constructor() {    
    this.modal = createElement(`
    
    <div class="modal">
    <!--Прозрачная подложка перекрывающая интерфейс-->
    <div class="modal__overlay"></div>

    <div class="modal__inner">
      <div class="modal__header">
        <!--Кнопка закрытия модального окна-->
        <button type="button" class="modal__close">
          <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
        </button>

        <h3 class="modal__title">
          Вот сюда нужно добавлять заголовок
        </h3>
      </div>

      <div class="modal__body">
        A сюда нужно добавлять содержимое тела модального окна
      </div>
    </div>
    
  </div>`)

  this.addEventListeners();
  }
  open = () => {
    document.body.appendChild(this.modal)
    document.body.classList.add('is-modal-open')
  }
  setTitle = (title) => {
    this.modalTitle = this.modal.querySelector('.modal__title');
    this.modalTitle.innerText = title;
  }
  setBody = (modalBody) => {
    this.modalBody= this.modal.querySelector('.modal__body');       
    this.modalBody.innerHTML = '';
    this.modalBody.appendChild(modalBody);    
  }
  close = () => {
    document.body.classList.remove('is-modal-open')
    this.modal.remove()
  }
  addEventListeners = () => {
    document.body.addEventListener('keydown', this.handleKeyDown);
    this.modal.querySelector('.modal__close').addEventListener('click', this.close) 
  }
  handleKeyDown = (e) => {
    if (e.code === 'Escape') {
      this.close();
    }
 };
}
