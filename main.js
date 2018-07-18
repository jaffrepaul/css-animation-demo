// display onboarding overlay when page loads
window.onload = () => {
  document.getElementById('overlay').style.display = 'block';
};

const overlayOff = () => {
  document.getElementById('overlay').style.display = 'none';
  document.getElementById('onboard-text').style.display = 'none';
};

const lightsabers = document.querySelectorAll(
  '.lightsaber input[type="checkbox"]'
);

lightsabers.forEach(saber => saber.addEventListener('change', playAudio));

const playAudio = e => {
  // first check to see if this checkbox is on or off
  const isOn = e.target.checked;
  if (isOn) {
    const whooshSound = document.createElement('audio');
    whooshSound.src = 'lightsaber.wav';
    whooshSound.play();
  }
};
