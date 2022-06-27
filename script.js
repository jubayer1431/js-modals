'use strict';

// Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnShowModals = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');

// Callback Functions
const showModal = () => {
  // We can remove multiple classes like modal.classList.remove('class1', 'class2');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = () => {
  // We can add multiple classes like modal.classList.remove('class1', 'class2');
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

// Event Listeners
for (let i = 0; i < btnShowModals.length; i++) {
  btnShowModals[i].addEventListener('click' , showModal);
}
btnCloseModal.addEventListener('click' , closeModal);
overlay.addEventListener('click' , closeModal);

// Keyboard events only happens in DOM
document.addEventListener('keydown', event => {
  if ((event.keyCode === 27 || event.key === 'Escape') && !modal.classList.contains('hidden') ) {
    closeModal();
  }
});
