'use strict';

import { SITE_URL } from "../lib/constants.js";

let startTime;
let elapsedMs;
let elapsedTime;
let timerId;
let s = 0;
let ms = 0;
let message = "";

const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
const result = document.getElementById("result");
const tweet = document.getElementById("tweet");

function hideButton(btn) {
  btn.classList.remove("display");
  btn.classList.add("display-none");
}

function showButton(btn) {
  btn.classList.remove("display-none");
  btn.classList.add("display");
}

function hideText(result) {
  result.classList.remove("visibility");
  result.classList.add("visibility-hidden");
}

function showText(result) {
  result.classList.remove("visibility-hidden");
  result.classList.add("visibility");
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

function shareAtTweet(s, ms) {
  let formattedTimeForTweet = `${s}.${String(ms).padStart(3, "0").slice(0, 2)}`;
  let text = `❤️⏱️ Played the 10-second game and scored ${formattedTimeForTweet} seconds 🐇♣️ #10SecondGame\n`;

  let url = encodeURIComponent(SITE_URL);
  text = encodeURIComponent(text);

  const tweetUrl = `https://twitter.com/intent/tweet?url=${url}&text=${text}`;

  window.open(tweetUrl, '_blank');
}

start.addEventListener("click", () => {
  startTime = Date.now();  // タイムスタンプを取得

  countUp();

  hideButton(start);
  showButton(stop);

  timer.classList.add("fade-out");
});

stop.addEventListener("click", () => {
  clearTimeout(timerId);

  if (9050 <= elapsedMs && elapsedMs < 10050) {
    message = "Incredible 👀";
  } else if (9100 <= elapsedMs && elapsedMs < 10100) {
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
  showButton(tweet);
  showText(result);
  timer.classList.remove("fade-out");
});

reset.addEventListener("click", () => {
  startTime = 0;
  elapsedTime = 0;
  timer.textContent = "00:00";
  hideText(result);
  hideButton(reset);
  hideButton(tweet);
  showButton(start);
});

tweet.addEventListener("click", () => {
  shareAtTweet(s, ms);
});