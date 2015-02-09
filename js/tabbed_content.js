var buttons = document.getElementsByTagName('button');
var tabInfos = document.getElementsByClassName('tabInfo');
var infoSpot = document.getElementById('info');

for (var i = 0; i < buttons.length; i++) {
  addListener(buttons[i], tabInfos[i]);
}

function addListener(button, tab) {
  button.addEventListener('click', function() {
    infoSpot.innerHTML = tab.innerHTML;
  });
}