const hamburger = document.querySelector('.hamburger');
const dropdown = document.querySelector('.dropdown.container');

hamburger.addEventListener('click', () => {
  dropdown.classList.toggle('show');
});