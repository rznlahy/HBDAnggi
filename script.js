const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const birthdaySong = document.getElementById('birthdaySong');

function toggleMusic() {
  if (birthdaySong.paused) {
    birthdaySong.play();
    playBtn.style.display = 'none';
    pauseBtn.style.display = 'inline-block';
  } else {
    birthdaySong.pause();
    playBtn.style.display = 'inline-block';
    pauseBtn.style.display = 'none';
  }
}

function pauseMusic() {
  birthdaySong.pause();
  playBtn.style.display = 'inline-block';
  pauseBtn.style.display = 'none';
}
