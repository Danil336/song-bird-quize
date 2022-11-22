export function controleAudio() {
  const playButton = document.querySelector(".controller_button");
  const audio = document.querySelector(".audio");
  const stop_container = document.querySelector(".stop_container");
  if (playButton.classList.contains("stop")) {
    audio.play();
    stop_container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"/></svg>`;
    playButton.classList.remove("stop");
    playButton.classList.add("play");
  } else {
    audio.pause();
    stop_container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
    playButton.classList.remove("play");
    playButton.classList.add("stop");
  }
}

export function updateProgress(e) {
  const audio = document.querySelector(".audio");
  const progress = document.querySelector(".progress");
  const { duration, currentTime } = e.srcElement;
  const progressRecent = (currentTime / duration) * 100;
  progress.style.width = `${progressRecent}%`;
  if(currentTime == duration) {
    audio.pause();
    stop_container.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>`;
    playButton.classList.remove("play");
    playButton.classList.add("stop");
  }
}

export function setProgress(e) {
  const audio = document.querySelector(".audio");
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

export function rightChoiseSound() {
  const rightAudio = new Audio();
  rightAudio.src = "./assets/images/rihgtSound.mp3";
  rightAudio.volume = 0.02;
  rightAudio.autoplay = true;
  return true;
}

export function falseChoiseSound() {
  const falseAudio = new Audio();
  falseAudio.src = "./assets/images/falseAnswer.mp3";
  falseAudio.volume = 0.03;
  falseAudio.autoplay = true;
  return true;
}


