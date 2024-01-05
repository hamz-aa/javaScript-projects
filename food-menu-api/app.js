const searchValue = document.querySelector("#search-box").value;
const searchBtn = document.querySelector("#search-btn");
const leftTemplate = document.querySelector("#left-sec-template");
const leftSection = document.querySelector(".left-section");

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
  console.log(recipes);
  for (let i = 0; i < 10; i++) {
    let cloneNode = leftTemplate.content.cloneNode(true);
    let img = cloneNode.querySelector("img");
    let foodTitle = cloneNode.querySelector(".food-title");
    let foodDescription = cloneNode.querySelector(".food-description");

    cloneNode
      .querySelector(".left-section-wrapper")
      .setAttribute("onclick", `displayRecipe('${recipes[i].id}')`);

    img.src = recipes[i].image_url;
    foodTitle.textContent =
      recipes[i].title.length > 20
        ? recipes[i].title.slice(0, 22) + "..."
        : recipes[i].title;
    foodDescription.textContent = recipes[i].publisher;

    leftSection.appendChild(cloneNode);
  }
}

function displayRecipe(recipeId) {
  const recipeUrl = `https://forkify-api.herokuapp.com/api/v2/recipes/${recipeId}`;
  fetch(recipeUrl).then((response) => console.log(response));
}
