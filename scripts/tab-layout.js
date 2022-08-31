var tabs = document.querySelectorAll('.tab');
var personalTab = document.querySelector('.personal-tab');
var personalLayout = document.querySelector('.personal-layout');
var professionalTab = document.querySelector('.professional-tab');
var professionalLayout = document.querySelector('.professional-layout');

tabs.forEach(tab => {
  tab.addEventListener('click', (e) => {
    changeTab(e.target);
  });
});

function changeTab(tab) {
  document.querySelector('.active-tab').classList.remove('active-tab');
  tab.classList.add('active-tab');
  swapLayout();
  updateBg(tab);
}

function swapLayout() {
  personalLayout.classList.toggle('hide-personal-layout');
  professionalLayout.classList.toggle('hide-professional-layout');
}

function updateBg(tab) {
  var x = tab.dataset.bgColor;
  document.querySelector('.links-container').style.backgroundColor = x;
}
