const playButton1 = document.getElementById('button button1');
const playButton2 = document.getElementById('button button2');
const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');

let isAudio1Playing = false;
let isAudio2Playing = false;

playButton1.addEventListener('click', () => {
  if (isAudio2Playing) {
    audio2.pause();
    audio2.currentTime = 0;
    isAudio2Playing = false;
  }
  
  if (!isAudio1Playing) {
    audio1.play();
    isAudio1Playing = true;
  } else {
    audio1.pause();
    isAudio1Playing = false;
  }
});

playButton2.addEventListener('click', () => {
  if (isAudio1Playing) {
    audio1.pause();
    audio1.currentTime = 0;
    isAudio1Playing = false;
  }
  
  if (!isAudio2Playing) {
    audio2.play();
    isAudio2Playing = true;
  } else {
    audio2.pause();
    isAudio2Playing = false;
  }
});

audio1.addEventListener('ended', () => {
  isAudio1Playing = false;
  playButton1.textContent = 'Play Audio 1';
  audio1.currentTime = 0;
});

audio2.addEventListener('ended', () => {
  isAudio2Playing = false;
  playButton2.textContent = 'Play Audio 2';
  audio2.currentTime = 0;
});
