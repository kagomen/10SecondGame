'use strict';

let incredible = document.getElementById('incredible');
let excellent = document.getElementById('excellent');
let great = document.getElementById('great');
let good = document.getElementById('good');
let bad = document.getElementById('bad');

function rateScore(elapsedMs) {

  // returnで該当結果のDOM要素を返す => リセットボタン押下時にクラスを排除する
  if (9950 <= elapsedMs && elapsedMs <= 10050) {
    incredible.classList.add('highlighted', 'result-item');
    return incredible;
  } else if (9900 <= elapsedMs && elapsedMs <= 10100) {
    excellent.classList.add('highlighted', 'result-item');
    return excellent;
  } else if (9750 <= elapsedMs && elapsedMs <= 10250) {
    great.classList.add('highlighted', 'result-item');
    return great;
  } else if (9500 <= elapsedMs && elapsedMs <= 10500) {
    good.classList.add('highlighted', 'result-item');
    return good;
  } else {
    bad.classList.add('highlighted', 'result-item');
    return bad;
  }
}
