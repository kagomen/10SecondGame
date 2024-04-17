
export function setBtnStarted(startBtn, stopBtn, resetBtn, tweetBtn) {
  startBtn.hidden = true;
  stopBtn.hidden = false;
  resetBtn.hidden = true;
  tweetBtn.hidden = true;
}
export function setBtnStopped(startBtn, stopBtn, resetBtn, tweetBtn) {
  startBtn.hidden = true;
  stopBtn.hidden = true;
  resetBtn.hidden = false;
  tweetBtn.hidden = false;
}
export function setBtnInit(startBtn, stopBtn, resetBtn, tweetBtn) {
  startBtn.hidden = false;
  stopBtn.hidden = true;
  resetBtn.hidden = true;
  tweetBtn.hidden = true;
}