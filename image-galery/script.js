const galleryContainer = document.querySelector(".gallery-container");
const searchURL = "https://api.unsplash.com/search/photos?query=";
const requestURL =
  "https://api.unsplash.com/search/photos?query=spring&per_page=30&orientation=landscape&client_id=3XqeEZ0vle1NnQWwuqMIqmsxBrLP1ZgDr_Jep0-vP-c";

async function getData(requestURL) {
  const res = await fetch(requestURL);
  const data = await res.json();

  showData(data);
}
getData(requestURL);

function showData(data) {
  document.querySelector(".gallery-container").innerHTML = "";

  data.results.map((value) => {
    const img = `<img class="gallery-img" src="${value.urls.regular}" alt="${value.alt_description}">`;
    galleryContainer.insertAdjacentHTML("beforeend", img);
    console.log(data.results);
  });
}

const form = document.querySelector("form");
const search = document.querySelector(".search");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const apiSearchURL = `${searchURL}${search.value}&per_page=30&orientation=landscape&client_id=3XqeEZ0vle1NnQWwuqMIqmsxBrLP1ZgDr_Jep0-vP-c`;
  if (search.value) {
    getData(apiSearchURL);

    search.value = "";
  }
});
