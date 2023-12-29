function searchHandler() {
  input = document.querySelector("#search-box").value;

  fetch(
    `https://maroon-shorts.cyclic.cloud/api/jobAds/all?limit=10&pageNo=1&keyWord=${input}&category=`
  )
    .then((response) => response.json())
    .then((json) => json.data)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
}
