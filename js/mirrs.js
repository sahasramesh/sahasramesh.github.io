const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("play-pause-btn");

playPauseBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    playPauseBtn.classList.remove("play");
    playPauseBtn.classList.add("pause");
  } else {
    audio.pause();
    playPauseBtn.classList.remove("pause");
    playPauseBtn.classList.add("play");
  }
});

audio.addEventListener("ended", function () {
  playPauseBtn.classList.remove("pause");
  playPauseBtn.classList.add("play");
});
