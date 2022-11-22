export function writeFullInfo(name, image, species, audio, desctiption) {
  const quizInfo = document.querySelector('.quiz-info')
  quizInfo.innerHTML = `<div class="quiz-info_first-row">
                          <div class="quiz-info_image">
                            <img src="${image}" alt="">
                          </div>
                          <div class="quiz-info-more">
                            <div class="info-name">${name}</div>
                            <div class="info-species">${species}</div>
                            <div class="info-audio"><audio class="audio2" src="${audio}" controls></audio></div>
                          </div>
                        </div>
                        <div class="quiz-info_second-row">
                          <div class="info-text">${desctiption}</div>
                        </div>`;
}