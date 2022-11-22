export function rightAnswer(boolean, name, image, audio) {
  const nextLevelButton = document.querySelector(".next-level_btn");
  const secretBird = document.querySelector(".secret_bird");
  if (boolean == true) {
    secretBird.innerHTML = `<div class="bird-image_div">
    <img
      data-name="${name}"
      data-image="${image}"
      data-audio="${audio}"
      class="secret_img"
      src="${image}"
      alt=""
    />
  </div>
  <div class="bird-info_div">
    <div class="secret-name">${name}</div>
    <hr class="line" />
    <div class="audio-player">
    <div class="controller_button stop">
      <div class="stop_container">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
      </div>
    </div>
    <div class="progress_container">
      <div class="progress"></div>
      <audio class="audio" src="${audio}"></audio>
    </div>
  </div>`;
  }
  nextLevelButton.classList.add("allow_next-level");
  return boolean;
}