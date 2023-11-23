const content = {
  history: `History is the study of the past and how it shapes the present
  and the future. History can help us understand ourselves, our
  cultures, our societies, and our world. History can also inspire
  us to learn from the achievements and mistakes of others, and to
  appreciate the diversity and complexity of human
  experiences.Visiting historical places can help you gain a
  deeper understanding of history by seeing it with your own eyes.`,
  vision: `Vision is the ability to see and interpret the world around us.
  It is a complex process that involves the eyes, the brain, and the nervous system.
  Vision allows us to perceive colors, shapes, patterns, and movements, and to navigate
  our environment with ease. It is an essential part of our daily lives, and it is something
  that we often take for granted.Despite the challenges that some people face with their
  vision, there are many resources available to help them maintain their independence
  and quality of life.`,
  goal: `Goals are the targets or objectives that we set for ourselves
  to achieve in the future. Goals can be short-term or long-term, and
  they can be personal or professional. Setting goals is an important 
  part of personal and professional development, as it helps us focus 
  our efforts and measure our progress. Setting goals can help you stay 
  motivated, focused, and accountable. It can also help you overcome 
  obstacles and achieve success. By setting SMART goals, you can turn 
  your dreams into reality`,
};

const btnHistory = document.querySelector(".btn-history");
const btnVision = document.querySelector(".btn-vision");
const btnGoal = document.querySelector(".btn-goal");

const heading = document.querySelector(".heading");
const text = document.querySelector(".text");

let img = document.querySelector("img");

const btn = document.querySelectorAll("button");

let selected = btnHistory;

heading.textContent = "History";
text.textContent = content["history"];

img.src = "./img/history.jpg";

btnHistory.style.border = "2px solid #7fa0df";
btnHistory.style.borderRight = "none";
btnHistory.style.backgroundColor = "#fff";

btnHistory.addEventListener("click", () => {
  selected = btnHistory;

  btnHistory.style.border = "2px solid #7fa0df";
  btnHistory.style.borderRight = "none";
  btnHistory.style.backgroundColor = "#fff";

  heading.textContent = "History";
  text.textContent = content["history"];
  img.src = "./img/history.jpg";

  resetStyle(btnVision, btnGoal);
});

btnVision.addEventListener("click", () => {
  selected = btnVision;

  btnVision.style.border = "2px solid #7fa0df";
  btnVision.style.borderRight = "none";
  btnVision.style.borderLeft = "none";
  btnVision.style.backgroundColor = "#fff";

  heading.textContent = "Vision";
  text.textContent = content["vision"];
  img.src = "./img/vision.jpg";

  resetStyle(btnHistory, btnGoal);
});

btnGoal.addEventListener("click", () => {
  selected = btnGoal;

  btnGoal.style.border = "2px solid #7fa0df";
  btnGoal.style.borderLeft = "none";
  btnGoal.style.backgroundColor = "#fff";

  heading.textContent = "Goal";
  text.textContent = content["goal"];
  img.src = "./img/goal.jpg";

  resetStyle(btnHistory, btnVision);
});

function resetStyle(btn1, btn2) {
  btn1.style.border = "2px solid #eef4fa";
  btn2.style.border = "2px solid #eef4fa";

  btn1.style.backgroundColor = "#d0d0d7";
  btn2.style.backgroundColor = "#d0d0d7";
}

btn.forEach((val) => {
  val.addEventListener("mouseover", () => {
    if (val !== selected) {
      val.style.backgroundColor = "#d3e9f8";
      val.style.color = "#6d93ae";
    } else {
      val.style.color = "#6d93ae";
    }
  });
  val.addEventListener("mouseout", () => {
    if (val !== selected) {
      val.style.backgroundColor = "#d0d0d7";
      val.style.color = "#000";
    } else {
      val.style.color = "#000";
    }
  });
});
