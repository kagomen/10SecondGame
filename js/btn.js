export function hideBtn(btn) {
  btn.classList.remove("display");
  btn.classList.add("display-none");
}

export function showBtn(btn) {
  btn.classList.remove("display-none");
  btn.classList.add("display");
}