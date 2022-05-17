let mockups = document.querySelectorAll('.mockup');
let mockupsArray = Array.prototype.slice.call(mockups);
let selectedMockup = document.querySelector('.mockup.selected');
let mainImage = document.querySelector('.main-img');
let arrowLeft = document.querySelector('.arrow-left-container');
let arrowRight = document.querySelector('.arrow-right-container');
let index = 0;

mainImage.src = mockups[0].src;

mockups.forEach(mockup => {
  mockup.addEventListener('mouseover', (e) => {
    if (!e.target.classList.contains('selected')) {
      changeMainImage(e.target);
      index = mockupsArray.indexOf(e.target);
    }
  });
});

arrowLeft.addEventListener('click', changeMainImagePrevious);
arrowRight.addEventListener('click', changeMainImageNext);

document.addEventListener('keydown', (e) => {
  if (e.key == 'ArrowRight') {
    e.preventDefault();
    changeMainImageNext();
  }
  if (e.key == 'ArrowLeft') {
    e.preventDefault();
    changeMainImagePrevious();
  }
});

function changeMainImage(e) {
  mainImage.src = e.src;
  changeSelectedClassImage(e);
}

function changeSelectedClassImage(e) {
  e.classList.add('selected');
  selectedMockup.classList.remove('selected');
  selectedMockup = e;
  e.focus();
}

function changeMainImagePrevious() {
  if (index) {
    index--;
    changeMainImage(mockups[index]);
  }
}

function changeMainImageNext() {
  if (index != mockups.length - 1) {
    index++;
    changeMainImage(mockups[index]);
  }
}