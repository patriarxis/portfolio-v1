let imgs = document.querySelectorAll('.gallery');
let display = document.querySelector('.display');
let displayImg = document.querySelector('.display-img');
let displayContainer = document.querySelector('.display-container');

imgs.forEach(img => {
  img.addEventListener('click', function () {
    displayImg.src = img.dataset.src;
    displayContainer.style.display = 'block';
  });
});

displayContainer.addEventListener('click', function () {
  displayImg.src = '';
  displayContainer.style.display = 'none';
});

display.addEventListener('click', function (e) {
  e.stopPropagation();
});