export function goToStart() {
  const docBody = document.querySelector('body')
  docBody.innerHTML = `    <header class="header">
  <div class="container">
    <div class="first_header_row">
      <div class="logo_div">
        <img class="logo" src="./assets/images/logo_quiz.png" alt="" />
      </div>
      <div class="score_div">Score: 0</div>
    </div>
    <div class="second_header_row nav">
      <div class="game_modes">
        <div class="mode_1 mode">
          <button class="active">Птицы</button>
        </div>
        <div class="mode_2 mode coming_soon">
          <button>Режим 2</button>
        </div>
        <div class="mode_3 mode coming_soon">
          <button>Режим 3</button>
        </div>
        <div class="mode_4 mode coming_soon">
          <button>Режим 4</button>
        </div>
        <div class="mode_5 mode coming_soon">
            <button>Режим 5</button>
        </div>
        <div class="mode_6 mode menu">
          <a href="./index.html">
            <button>Меню</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>
<main class="main">
  <div class="container">
    <div class="secret_bird">
      <div class="bird-image_div">
        <img
          class="secret_img"
          src="./assets/images/secret_image.png"
          alt=""
        />
      </div>
      <div class="bird-info_div">
        <div class="secret-name">******</div>
        <hr class="line" />
        <div class="audio-player">
          <audio class="audio" src="" controls></audio>
        </div>
      </div>
    </div>
    <div class="quiz-choise">
      <div class="quiz-variants">
        <ul class="quiz-list">
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 1</div>
            </div>
          </li>
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 2</div>
            </div>
          </li>
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 3</div>
            </div>
          </li>
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 4</div>
            </div>
          </li>
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 5</div>
            </div>
          </li>
          <li class="variant">
            <div class="li_btn">
              <div class="indicator"></div>
              <div class="li_text">Вариант 6</div>
            </div>
          </li>
        </ul>
      </div>
      <div class="quiz-info">
        Послушайте плеер. Выберите птицу из списка
      </div>
      <div class="next-level_div">
        <button class="next-level_btn">Next Level</button>
      </div>
    </div>
  </div>
</main>`;
}

export function removeResultPage() {
  const resultWindow = document.querySelector(".resultPage");
  const mainGame = document.querySelector(".main");
  mainGame.removeChild(resultWindow);
}

export function clearArea() {
  const secretBird = document.querySelector(".secret_bird");
  const answerVariants = document.querySelector(".quiz-variants");
  const quizInfo = document.querySelector(".quiz-info");
  secretBird.innerHTML = "";
  answerVariants.innerHTML = "";
  quizInfo.innerHTML = "Послушайте плеер. Выберите птицу из списка";
}