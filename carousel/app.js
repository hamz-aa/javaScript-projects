const left = document.querySelector(".icon-left");
const right = document.querySelector(".icon-right");

const images = document.querySelectorAll("img");

let curr = images.length - 1;
let active = [...images];
let unActive = [];

left.addEventListener("click", () => {
  if (curr > 0) {
    active[curr].classList.add("animation-1");
    active[curr].classList.remove("animation-2");
    unActive.push(active.pop());
    curr--;
    console.log(active, unActive, curr);
  }
});

right.addEventListener("click", () => {
  if (curr < images.length && unActive.length !== 0) {
    active.push(unActive.pop());
    curr++;
    active[curr].classList.add("animation-2");
    active[curr].classList.remove("animation-1");
    console.log(active, unActive, curr);
  }
});

// setInterval(() => {
//   if (curr > 0) {
//     active[curr].classList.add("animation-1");
//     active[curr].classList.remove("animation-2");
//     unActive.push(active.pop());
//     curr--;
//     console.log(active, unActive, curr);
//   }
// }, 3000);
