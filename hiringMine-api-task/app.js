let template = document.getElementsByTagName("template")[0];
const cardWrapper = document.querySelector(".card-wrapper");

function searchHandler() {
  input = document.querySelector("#search-box").value || "job";
  cardWrapper.innerHTML = "";

  fetch(
    `https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${input}&category=`
  )
    .then((response) => response.json())
    .then((json) => json.data)
    .then((data) => displayCard(data))
    .catch((error) => console.error(error));
}

function displayCard(data) {
  data.forEach((obj) => {
    let card = template.content.cloneNode(true);
    card.querySelector(".company-name").textContent = obj.companyName || "N/A";
    card.querySelector(".position").textContent = obj.position;
    card.querySelector(".designation").textContent =
      obj.designation.slice(0, 20) + "...";
    card.querySelector(".description").textContent =
      obj.category.description.slice(0, 30) + "...";
    card.querySelector(".location").textContent = obj.city || "N/A";
    cardWrapper.append(card);
  });
}
