const searchValue = document.querySelector("#search-box").value;
const searchBtn = document.querySelector("#search-btn");
const leftTemplate = document.querySelector("#left-sec-template");
const rightTemplate = document.querySelector("#right-sec-template");
const leftSection = document.querySelector(".left-section");
const rightSection = document.querySelector(".right-section");

searchBtn.addEventListener("click", () => {
  const url = `https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchValue}`;

  fetch(url)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((data) => data.recipes)
    .then((recipes) => displaySearches(recipes))
    .catch((err) => console.log(err));
});

function displaySearches(recipes) {
  for (let i = 0; i < 10; i++) {
    let cloneNode = leftTemplate.content.cloneNode(true);
    let img = cloneNode.querySelector("img");
    let foodTitle = cloneNode.querySelector(".food-title");
    let foodDescription = cloneNode.querySelector(".food-description");

    cloneNode
      .querySelector(".left-section-wrapper")
      .setAttribute("onclick", `recipeHandler('${recipes[i].id}')`);

    img.src = recipes[i].image_url;
    foodTitle.textContent =
      recipes[i].title.length > 20
        ? recipes[i].title.slice(0, 22) + "..."
        : recipes[i].title;
    foodDescription.textContent = recipes[i].publisher;

    leftSection.appendChild(cloneNode);
  }
}

function recipeHandler(recipeId) {
  const recipeUrl = `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`;
  fetch(recipeUrl)
    .then((response) => response.json())
    .then((json) => json.data)
    .then((data) => data.recipe)
    .then((recipe) => displayRecipe(recipe))
    .catch((err) => console.log(err));
}

function displayRecipe(recipe) {
  let cloneNode = rightTemplate.content.cloneNode(true);
  let img = cloneNode.querySelector("img");
  let recipeName = cloneNode.querySelector(".recipe-name");
  let time = cloneNode.querySelector(".time");
  let servings = cloneNode.querySelector(".serving-text");

  console.log(img, recipeName, time, servings);
  console.log(recipe);

  img.src = recipe.image_url;
  recipeName.textContent = recipe.title;
  time.textContent = recipe.cooking_time + " MINUTES";
  servings.textContent = recipe.servings + " SERVINGS";

  rightSection.appendChild(cloneNode);
}
