const openBtnEl = document.querySelector('[data-action="open"]');
const closeBtnEl = document.querySelector('[data-action="close"]');
const wrapperMenuEl = document.querySelector('.wrapper-menu');

openBtnEl.addEventListener('click', () => {
  wrapperMenuEl.dataset.visible = 'open';
  document.body.style.overflow = 'hidden'; 
});

closeBtnEl.addEventListener('click', () => {
  wrapperMenuEl.dataset.visible = 'close';
  document.body.style.overflow = ''; 
});
