'use strict';

let startTime;
let elapsedMs;
let elapsedTime;
let timerId;
let s;
let ms;
let message = "";

const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const result = document.getElementById("result");

function hideButton(btn) {
  btn.classList.remove("display");
  btn.classList.add("display-none");
}

function showButton(btn) {
  btn.classList.remove("display-none");
  btn.classList.add("display");
}

function countUp() {
  elapsedMs = Date.now() - startTime;  // 経過時間を取得
  elapsedTime = new Date(elapsedMs); // Dateオブジェクトに変換
  s = elapsedTime.getSeconds();
  ms = elapsedTime.getMilliseconds();

  // 表示内容を整形
  const formattedTime = `${String(s).padStart(2, "0")}:${String(ms).padStart(3, "0").slice(0, 2)}`;
  timer.textContent = formattedTime;

  timerId = setTimeout(() => {
    countUp();
  }, 16);
}

start.addEventListener("click", () => {
  startTime = Date.now();  // タイムスタンプを取得

  countUp();

  hideButton(start);
  showButton(stop);
});

stop.addEventListener("click", () => {
  clearTimeout(timerId);

  if (elapsedMs == 10000) {
    message = "Excellent 🎉";
  } else if (9250 <= elapsedMs && elapsedMs < 10250) {
    message = "Great 🌟";
  } else if (9500 <= elapsedMs && elapsedMs < 10500) {
    message = "Good 👍";
  } else if (elapsedMs < 9500) {
    message = "Too fast 🐇"
  } else {
    message = "Too slow 🐢";
  }
  result.textContent = message;
  hideButton(stop);
  showButton(reset);
});

reset.addEventListener("click", () => {
  startTime = 0;
  elapsedTime = 0;
  timer.textContent = "00:00";
  result.textContent = "";

  hideButton(reset);
  showButton(start);
});
