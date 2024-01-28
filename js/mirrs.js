const playButton1 = document.getElementById('button button1');
const playButton2 = document.getElementById('button button2');
const playButton3 = document.getElementById('button button3');
const playButton4 = document.getElementById('button button4');
const playButton5 = document.getElementById('button button5');

const audio1 = document.getElementById('audio1');
const audio2 = document.getElementById('audio2');
const audio3 = document.getElementById('audio3');
const audio4 = document.getElementById('audio4');
const audio5 = document.getElementById('audio5');

let isAudio1Playing = false;
let isAudio2Playing = false;
let isAudio3Playing = false;
let isAudio4Playing = false;
let isAudio5Playing = false;

playButton1.addEventListener('click', () => {
  if (isAudio2Playing) {
    audio2.pause();
    audio2.currentTime = 0;
    isAudio2Playing = false;
  }

  if (isAudio3Playing) {
    audio3.pause();
    audio3.currentTime = 0;
    isAudio3Playing = false;
  }

  if (isAudio4Playing) {
    audio4.pause();
    audio4.currentTime = 0;
    isAudio4Playing = false;
  }

  if (isAudio5Playing) {
    audio5.pause();
    audio5.currentTime = 0;
    isAudio5Playing = false;
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

  if (isAudio3Playing) {
    audio3.pause();
    audio3.currentTime = 0;
    isAudio3Playing = false;
  }

  if (isAudio4Playing) {
    audio4.pause();
    audio4.currentTime = 0;
    isAudio4Playing = false;
  }

  if (isAudio5Playing) {
    audio5.pause();
    audio5.currentTime = 0;
    isAudio5Playing = false;
  }
  
  if (!isAudio2Playing) {
    audio2.play();
    isAudio2Playing = true;
  } else {
    audio2.pause();
    isAudio2Playing = false;
  }
});

playButton3.addEventListener('click', () => {
  if (isAudio1Playing) {
    audio1.pause();
    audio1.currentTime = 0;
    isAudio1Playing = false;
  }

  if (isAudio2Playing) {
    audio2.pause();
    audio2.currentTime = 0;
    isAudio2Playing = false;
  }

  if (isAudio4Playing) {
    audio4.pause();
    audio4.currentTime = 0;
    isAudio4Playing = false;
  }

  if (isAudio5Playing) {
    audio5.pause();
    audio5.currentTime = 0;
    isAudio5Playing = false;
  }
  
  if (!isAudio3Playing) {
    audio3.play();
    isAudio3Playing = true;
  } else {
    audio3.pause();
    isAudio3Playing = false;
  }
});

playButton4.addEventListener('click', () => {
  if (isAudio1Playing) {
    audio1.pause();
    audio1.currentTime = 0;
    isAudio1Playing = false;
  }

  if (isAudio2Playing) {
    audio2.pause();
    audio2.currentTime = 0;
    isAudio2Playing = false;
  }

  if (isAudio3Playing) {
    audio3.pause();
    audio3.currentTime = 0;
    isAudio3Playing = false;
  }

  if (isAudio5Playing) {
    audio5.pause();
    audio5.currentTime = 0;
    isAudio5Playing = false;
  }
  
  if (!isAudio4Playing) {
    audio4.play();
    isAudio4Playing = true;
  } else {
    audio4.pause();
    isAudio4Playing = false;
  }
});

playButton5.addEventListener('click', () => {
  if (isAudio1Playing) {
    audio1.pause();
    audio1.currentTime = 0;
    isAudio1Playing = false;
  }

  if (isAudio2Playing) {
    audio2.pause();
    audio2.currentTime = 0;
    isAudio2Playing = false;
  }

  if (isAudio4Playing) {
    audio4.pause();
    audio4.currentTime = 0;
    isAudio4Playing = false;
  }

  if (isAudio3Playing) {
    audio3.pause();
    audio3.currentTime = 0;
    isAudio3Playing = false;
  }
  
  if (!isAudio5Playing) {
    audio5.play();
    isAudio5Playing = true;
  } else {
    audio5.pause();
    isAudio5Playing = false;
  }
});

audio1.addEventListener('ended', () => {
  isAudio1Playing = false;
  audio1.currentTime = 0;
});

audio2.addEventListener('ended', () => {
  isAudio2Playing = false;
  audio2.currentTime = 0;
});

audio3.addEventListener('ended', () => {
  isAudio3Playing = false;
  audio3.currentTime = 0;
});

audio4.addEventListener('ended', () => {
  isAudio4Playing = false;
  audio4.currentTime = 0;
});

audio5.addEventListener('ended', () => {
  isAudio5Playing = false;
  audio5.currentTime = 0;
});
