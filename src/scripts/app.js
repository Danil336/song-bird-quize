import {
  controleAudio,
  rightChoiseSound,
  falseChoiseSound,
  setProgress,
  updateProgress,
} from "./audioPlayer.js";
import { goToStart, removeResultPage, clearArea } from "./goToStart.js";
import { rightAnswer } from "./rightAnswer.js";
import { writeFullInfo } from "./fullInfo.js"

const urlJson = "./assets/birds.json";

let secretBird,
  answerVariants,
  quizInfo,
  nextLevelButton,
  scoreIndicator,
  docBody,
  mainGame,
  playButton,
  audio,
  progress,
  progressContainer,
  stop_container;

let fixedArray = [];
let birdInfo = [];
let knownAnswer = false;
let score = 5;
let finalScore = 0;
let falseAnswers = 0;
let questionOrder = 0;
let ifFirstTime = true;

new Promise((resolve) => {
  resolve(fetch(urlJson));
})
  .then((data) => data.json())
  .then((data) => randomDataOrder(data))
  .then((data) => renderQuestion(data))
  .then((data) => {
    renderChoiseVariants(data);
    renderAverything();
  });

function randomDataOrder(arrays) {
  secretBird = document.querySelector(".secret_bird");
  answerVariants = document.querySelector(".quiz-variants");
  quizInfo = document.querySelector(".quiz-info");
  nextLevelButton = document.querySelector(".next-level_btn");
  scoreIndicator = document.querySelector(".score_div");
  docBody = document.querySelector("body");
  mainGame = document.querySelector(".main");
  fixedArray = arrays;

  return arrays.sort(() => Math.random() - 0.5);
}


function renderQuestion(info) {
  birdInfo = info[questionOrder];
  questionOrder++;
  const correct = birdInfo[Math.floor(Math.random() * 6)];
  clearArea();
  secretBird.innerHTML = `<div class="bird-image_div">
                            <img
                              data-name="${correct.name}"
                              data-image="${correct.image}"
                              data-audio="${correct.audio}"
                              class="secret_img"
                              src="./assets/images/secret_image.png"
                              alt=""
                            />
                          </div>
                          <div class="bird-info_div">
                            <div class="secret-name">******</div>
                            <hr class="line" />
                            <div class="audio-player">
                              <div class="controller_button stop">
                                <div class="stop_container">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"/></svg>
                                </div>
                              </div>
                              <div class="progress_container">
                                <div class="progress"></div>
                              </div>
                              <audio class="audio" src="${correct.audio}"></audio>
                            </div>
                          </div>`;
  return birdInfo;
}


function renderChoiseVariants(BirdsObjects) {
  const answerVariantsList = document.createElement('ul')
  answerVariantsList.classList.add('quiz-list')
  answerVariants.appendChild(answerVariantsList)
  for(let i = 0; i < BirdsObjects.length; i++){
    let li = document.createElement('li')
    li.innerHTML = `<li data-name="${BirdsObjects[i].name}" data-image="${BirdsObjects[i].image}" data-audio="${BirdsObjects[i].audio}" data-desctiption="${BirdsObjects[i].description}" data-species="${BirdsObjects[i].species}" class="variant">
    <div class="li_btn">
      <div class="indicator"></div>
      <div class="li_text">${BirdsObjects[i].name}</div>
    </div>
  </li>`
    answerVariantsList.appendChild(li)
  };
}



function writeScore(score) {
  score = score - falseAnswers;
  finalScore += score;
  falseAnswers = 0;
  scoreIndicator.innerText = `Score: ${finalScore}`;
}

function renderAverything() {
  progressContainer = document.querySelector(".progress_container");
  progress = document.querySelector(".progress");
  audio = document.querySelector(".audio");
  playButton = document.querySelector(".controller_button");
  stop_container = document.querySelector(".stop_container");
  let variants = document.querySelectorAll(".variant");
  let birdImage = document.querySelector(".secret_img");
  audio.volume = 0.1;
  playButton.addEventListener("click", controleAudio);
  audio.addEventListener("timeupdate", updateProgress);
  progressContainer.addEventListener("click", setProgress);
  for (let variant of variants) {
    variant.addEventListener("click", function abc() {
      let trueName = birdImage.getAttribute("data-name");
      let trueImage = birdImage.getAttribute("data-image");
      let trueAudio = birdImage.getAttribute("data-audio");

      let nameForInfo = variant.getAttribute("data-name");
      let imageForInfo = variant.getAttribute("data-image");
      let speciesForInfo = variant.getAttribute("data-species");
      let audioForInfo = variant.getAttribute("data-audio");
      let desctiptionForInfo = variant.getAttribute("data-desctiption");

      writeFullInfo(
        nameForInfo,
        imageForInfo,
        speciesForInfo,
        audioForInfo,
        desctiptionForInfo
      );

      const Indicator = variant.childNodes[1].childNodes[1];
      const name = variant.childNodes[1].childNodes[3].innerText;
      if (
        Indicator.classList.contains("true") ||
        Indicator.classList.contains("wrong")
      ) {
        return;
      }
      if (name == trueName && !knownAnswer) {
        variant.childNodes[1].childNodes[1].classList.add("true");
        rightChoiseSound();
        knownAnswer = true;
        rightAnswer(true, trueName, trueImage, trueAudio);
        const indicatorCollection = document.querySelectorAll(".indicator");
        for (let indicator of indicatorCollection) {
          if (indicator.classList.contains("wrong")) {
            falseAnswers++;
          }
        }
        writeScore(score);
        nextLevelButton.addEventListener("click", render);
      } else {
        if (knownAnswer == true && !Indicator.classList.contains("wrong")) {
          Indicator.classList.add("neutral");
        } else {
          Indicator.classList.add("wrong");
          falseChoiseSound();
        }
      }
    });
  }
}

function render() {
  if (questionOrder >= 6) {
    mainGame.innerHTML = "";
    renderResultPage(finalScore);
    const restartButton = document.querySelector(".result_button");
    restartButton.addEventListener("click", (event) => {
      questionOrder = 0;
      knownAnswer = false;
      removeResultPage();
      finalScore = 0
      goToStart();
      new Promise((resolve) => {
        resolve(fetch(urlJson));
      })
        .then((data) => data.json())
        .then((data) => randomDataOrder(data))
        .then((data) => renderQuestion(data))
        .then((data) => {
          renderChoiseVariants(data);
          renderAverything();
        });
    });
    return;
  }
  clearArea();
  renderQuestion(fixedArray);
  renderChoiseVariants(birdInfo);
  renderAverything();
  nextLevelButton.classList.remove("allow_next-level");
  nextLevelButton.removeEventListener("click", render);
  knownAnswer = false;
}

function renderResultPage() {
  const resultWindow = document.createElement("div");
  resultWindow.innerHTML = `            <div class="container">
                                          <div class="result_window">
                                            <div class="resuilt_title">Поздравляю!</div>
                                            <div class="result_text">Вы прошли викторину набрав ${finalScore} из 30 возможных баллов</div>
                                            <button class="result_button">Попробовать еще раз!</button>
                                          </div>
                                        </div>`;
  resultWindow.classList.add("resultPage");
  mainGame.appendChild(resultWindow);
}
