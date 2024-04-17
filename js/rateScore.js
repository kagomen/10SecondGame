'use strict';

export function rateScore(elapsedMs) {

  let msg;

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

  return msg;
}
