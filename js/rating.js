export function hideRating(rating) {
  rating.classList.remove("visibility");
  rating.classList.add("visibility-hidden");
}

export function showRating(rating) {
  rating.classList.remove("visibility-hidden");
  rating.classList.add("visibility");
}