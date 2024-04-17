'use strict';

import { tweet } from "./tweet.js";
import { showBtn, hideBtn } from "./btn.js";
import { showRating, hideRating } from "./rating.js";

let startTime;
let elapsedMs;
let elapsedTime;
let timerId;
let s = 0;
let ms = 0;
let msg = "";

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const rating = document.getElementById("rating");
const tweetBtn = document.getElementById("tweetBtn");

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

startBtn.addEventListener("click", () => {
  startTime = Date.now();  // タイムスタンプを取得

  countUp();

  hideBtn(startBtn);
  showBtn(stopBtn);

  timer.classList.add("fade-out");
});

stopBtn.addEventListener("click", () => {
  clearTimeout(timerId);

  if (9050 <= elapsedMs && elapsedMs < 10050) {
    msg = "Incredible 👀";
  } else if (9100 <= elapsedMs && elapsedMs < 10100) {
    msg = "Excellent 🎉";
  } else if (9250 <= elapsedMs && elapsedMs < 10250) {
    msg = "Great 🌟";
  } else if (9500 <= elapsedMs && elapsedMs < 10500) {
    msg = "Good 👍";
  } else if (elapsedMs < 9500) {
    msg = "Too fast 🐇"
  } else {
    msg = "Too slow 🐢";
  }
  rating.textContent = msg;
  timer.classList.remove("fade-out");

  hideBtn(stopBtn);
  showBtn(resetBtn);
  showBtn(tweetBtn);
  showRating(rating);
});

resetBtn.addEventListener("click", () => {
  startTime = 0;
  elapsedTime = 0;
  timer.textContent = "00:00";

  hideBtn(resetBtn);
  hideBtn(tweetBtn);
  showBtn(startBtn);
  hideRating(rating);
});

tweetBtn.addEventListener("click", () => {
  tweet(s, ms);
});