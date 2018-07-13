const lightsaber = document.querySelector('.lightsaber input[type="checkbox"]');
lightsaber.addEventListener('change', playAudio);

function playAudio(e) {
  // first check to see if this checkbox is on or off
  const isOn = e.target.checked;
  if (isOn) {
    const whooshSound = document.createElement('audio');
    whooshSound.src = 'https://scotch.io/audio/lightsaber.wav';
    whooshSound.play();
  }
}
