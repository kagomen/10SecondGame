'use strict';

let startTime, elapsedMs, elapsedTime, formattedTime, timerId, highlightedEl;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const tweetBtn = document.getElementById("tweetBtn");

const sound = document.getElementById('sound');
sound.volume = 0.025;

function countUp() {
  elapsedMs = Date.now() - startTime;  // 経過時間を取得
  elapsedTime = new Date(elapsedMs); // Dateオブジェクトに変換
  const s = elapsedTime.getSeconds();
  const ms = elapsedTime.getMilliseconds();

  // 表示内容を整形
  formattedTime = `${String(s).padStart(2, "0")}.${String(ms).padStart(3, "0").slice(0, 2)}`;
  timer.textContent = formattedTime;

  timerId = setTimeout(countUp, 16);
}

startBtn.addEventListener("click", () => {

  sound.play();

  startTime = Date.now();

  countUp();
  setBtnStarted(startBtn, stopBtn, resetBtn, tweetBtn);
  timer.classList.add("fade-out");
});

stopBtn.addEventListener("click", () => {

  sound.play();

  clearTimeout(timerId);
  highlightedEl = rateScore(elapsedMs);

  timer.classList.remove("fade-out");

  setBtnStopped(startBtn, stopBtn, resetBtn, tweetBtn);
});

resetBtn.addEventListener("click", () => {

  sound.play();

  startTime = 0;
  elapsedTime = 0;
  timer.textContent = "00.00";

  setBtnInit(startBtn, stopBtn, resetBtn, tweetBtn);
  highlightedEl.classList.remove("highlighted", 'result-item');
});

tweetBtn.addEventListener("click", () => {
  sound.play();
  tweet(formattedTime);
});