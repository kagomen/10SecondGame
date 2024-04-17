'use strict';

export function hide(rating) {
  rating.classList.remove("visible");
  rating.classList.add("hidden");
}

export function show(rating) {
  rating.classList.remove("hidden");
  rating.classList.add("visible");
}