'use strict';

import { tweet } from "./tweet.js";
import { showBtn, hideBtn, showRating, hideRating } from "./utils.js";
import { rateScore } from "./rateScore.js";

let startTime, elapsedMs, elapsedTime, formattedTime, timerId;

const timer = document.getElementById("timer");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
const rating = document.getElementById("rating");
const tweetBtn = document.getElementById("tweetBtn");

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
  startTime = Date.now();  // タイムスタンプを取得

  countUp();
  hideBtn(startBtn);
  showBtn(stopBtn);

  timer.classList.add("fade-out");
});

stopBtn.addEventListener("click", () => {
  clearTimeout(timerId);
  rating.textContent = rateScore(elapsedMs);

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
  tweet(formattedTime);
});