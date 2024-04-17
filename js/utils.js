'use strict';

export function hideBtn(btn) {
  btn.classList.remove("display");
  btn.classList.add("display-none");
}

export function showBtn(btn) {
  btn.classList.remove("display-none");
  btn.classList.add("display");
}

export function hideRating(rating) {
  rating.classList.remove("visibility");
  rating.classList.add("visibility-hidden");
}

export function showRating(rating) {
  rating.classList.remove("visibility-hidden");
  rating.classList.add("visibility");
}