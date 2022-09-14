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
  swapLayout(tab);
  updateBg(tab);
}

function swapLayout(tab) {
  if (tab.classList.contains('personal-tab')) {
    personalLayout.classList.remove('hide-personal-layout');
    professionalLayout.classList.add('hide-professional-layout');
  } else {
    personalLayout.classList.add('hide-personal-layout');
    professionalLayout.classList.remove('hide-professional-layout');
  }
}

function updateBg(tab) {
  var x = tab.dataset.bgColor;
  document.querySelector('.links-container').style.backgroundColor = x;
}

var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;
var motionDirection = '';

var gesuredZone = document.querySelector('.links-container');

gesuredZone.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;

}, false);

gesuredZone.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  handleGesure();
}, false);

function handleGesure() {
  if (Math.abs(touchendX - touchstartX) > Math.abs(touchendY - touchstartY)) {
    motionDirection = 'horizontal';
    console.log('hr');
  } else {
    motionDirection = 'vertical';
    console.log('vr');
  }

  if (touchendX + 50 < touchstartX && motionDirection == 'horizontal') {
    changeTab(personalTab);
  }
  if (touchendX + 50 > touchstartX && motionDirection == 'horizontal') {
    changeTab(professionalTab);
  }
}
