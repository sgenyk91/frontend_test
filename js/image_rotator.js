var katarinaSet = document.getElementsByClassName('katarina');

var rotatorBlock = document.getElementById('rotator');

var count = 0;

rotatorBlock.innerHTML = transition(katarinaSet);

setInterval(function() {
  window.requestAnimationFrame(step);
}, 5000);

var start = null;
var duration = 1500;
var once = false;

function step(timestamp) {
  if (!start) {
    start = timestamp;
  }
  var progress = timestamp - start;
  if (progress < 1500) {
    if (!once) {
      once = true;
    }
    rotatorBlock.style.opacity = 1 - progress/duration;
    window.requestAnimationFrame(step);
  } else if (progress < 3000) {
    if (once) {
      rotatorBlock.innerHTML = transition(katarinaSet);
      once = false;
    }
    console.log(progress/duration - 1);
    rotatorBlock.style.opacity = progress/duration - 1;
    window.requestAnimationFrame(step);
  } else {
    start = null;
  }
}

function transition(katarinaSet) {
  var index = count % 4;
  count++;
  console.log(katarinaSet, count, index, katarinaSet[index]);
  return katarinaSet[index].innerHTML;
}
