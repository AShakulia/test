export function initializeHeader() {
  const burgerButton = document.querySelector('.icon-btn-burger');
  const header = document.querySelector('.header');

  burgerButton.addEventListener('click', () => {
    const isExpanded = header.classList.toggle('expanded');
    if (isExpanded) {
      burgerButton.classList.remove('icon-btn-burger');
      burgerButton.classList.add('icon-btn-close');
    } else {
      burgerButton.classList.remove('icon-btn-close');
      burgerButton.classList.add('icon-btn-burger');
    }
  });
}