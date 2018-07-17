const lightsabers = document.querySelectorAll(
  '.lightsaber input[type="checkbox"]'
);
lightsabers.forEach(saber => saber.addEventListener('change', playAudio));

function playAudio(e) {
  // first check to see if this checkbox is on or off
  const isOn = e.target.checked;
  if (isOn) {
    const whooshSound = document.createElement('audio');
    whooshSound.src = 'lightsaber.wav';
    whooshSound.play();
  }
}

function on() {
  document.getElementById('overlay').style.display = 'block';
}

function off() {
  document.getElementById('overlay').style.display = 'none';
}
