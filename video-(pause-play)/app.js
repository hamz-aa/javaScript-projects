const play = document.querySelector(".play");
const pause = document.querySelector(".pause");

const video = document.querySelector("video");

pause.style.backgroundColor = "#409be4";

play.addEventListener("click", () => {
  video.play();
  play.style.backgroundColor = "#409be4";
  pause.style.backgroundColor = "#f0f0f0";
});

pause.addEventListener("click", () => {
  video.pause();
  pause.style.backgroundColor = "#409be4";
  play.style.backgroundColor = "#f0f0f0";
});

video.addEventListener("ended", () => {
  pause.style.backgroundColor = "#409be4";
  play.style.backgroundColor = "#f0f0f0";
});
