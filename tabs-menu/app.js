const btnHistory = document.querySelector(".btn-history");
const btnVision = document.querySelector(".btn-vision");
const btnGoal = document.querySelector(".btn-goal");

const btn = document.querySelectorAll("button");

let selected = btnHistory;

btnHistory.style.border = "2px solid #7fa0df";
btnHistory.style.borderRight = "none";
btnHistory.style.backgroundColor = "#fff";

btnHistory.addEventListener("click", () => {
  selected = btnHistory;

  btnHistory.style.border = "2px solid #7fa0df";
  btnHistory.style.borderRight = "none";
  btnHistory.style.backgroundColor = "#fff";

  resetStyle(btnVision, btnGoal);
});

btnVision.addEventListener("click", () => {
  selected = btnVision;

  btnVision.style.border = "2px solid #7fa0df";
  btnVision.style.borderRight = "none";
  btnVision.style.borderLeft = "none";
  btnVision.style.backgroundColor = "#fff";

  resetStyle(btnHistory, btnGoal);
});

btnGoal.addEventListener("click", () => {
  selected = btnGoal;

  btnGoal.style.border = "2px solid #7fa0df";
  btnGoal.style.borderLeft = "none";
  btnGoal.style.backgroundColor = "#fff";

  resetStyle(btnHistory, btnVision);
});

function resetStyle(btn1, btn2) {
  btn1.style.border = "2px solid #eef4fa";
  btn2.style.border = "2px solid #eef4fa";

  btn1.style.backgroundColor = "#d0d0d7";
  btn2.style.backgroundColor = "#d0d0d7";
}

btn.forEach((val) => {
  if (val !== selected) {
    val.addEventListener("mouseover", () => {
      val.style.backgroundColor = "#d3e9f8";
      val.style.color = "#6d93ae";
    });

    val.addEventListener("mouseout", () => {
      val.style.backgroundColor = "#d0d0d7";
      val.style.color = "#000";
    });
  } else {
    val.addEventListener("mouseover", () => {
      val.style.color = "#6d93ae";
    });

    val.addEventListener("mouseout", () => {
      val.style.color = "#000";
    });
  }
});
