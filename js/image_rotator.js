var katarinaSet = document.getElementsByClassName('katarina');

var rotatorBlock = document.getElementById('rotator');

var count = 0;

//Sets inital image
rotatorBlock.innerHTML = transition(katarinaSet);

setInterval(function() {
  window.requestAnimationFrame(step);
}, 5000);

var start = null;
var duration = 1500;
var once = false;

// Fades out the current image in 1.5 seconds and fades in the next one
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
    rotatorBlock.style.opacity = progress/duration - 1;
    window.requestAnimationFrame(step);
  } else {
    start = null;
  }
}

// Cycles through the katarina images
function transition(katarinaSet) {
  var index = count % 4;
  count++;
  return katarinaSet[index].innerHTML;
}
