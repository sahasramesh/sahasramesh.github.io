const playButtons = [
  document.getElementById('button1'),
  document.getElementById('button2'),
  document.getElementById('button3'),
  document.getElementById('button4'),
  document.getElementById('button5')
];

const audios = [
  document.getElementById('audio1'),
  document.getElementById('audio2'),
  document.getElementById('audio3'),
  document.getElementById('audio4'),
  document.getElementById('audio5')
];

let isAudioPlaying = [false, false, false, false, false];

playButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    audios.forEach((audio, audioIndex) => {
      if (isAudioPlaying[audioIndex] && audioIndex !== index) {
        audio.pause();
        audio.currentTime = 0;
        isAudioPlaying[audioIndex] = false;
      }
    });

    if (!isAudioPlaying[index]) {
      audios[index].play();
      isAudioPlaying[index] = true;
    } else {
      audios[index].pause();
      isAudioPlaying[index] = false;
    }
  });
});

audios.forEach((audio, index) => {
  audio.addEventListener('ended', () => {
    isAudioPlaying[index] = false;
    audio.currentTime = 0;
  });
});