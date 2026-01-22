
import {
  elTemplateCard,
  elContainer,
  elSkeletonTemp,
  elLoader,
  elRegionInput,
  elSearchInput,
} from "./data.js";

let allData = [];

// loader 
loader(true);
// Api info
fetch(
  "https://restcountries.com/v3.1/independent?status=true&fields=languages,capital,flags,region,subregion,name,population"
)
  .then((res) => res.json())
  .then((res) => {
    allData = res;
    ui(res);
  })
  .catch(() => {})
  .finally(() => {
    loader(false);
  });

// UI 
function ui(data) {
  elContainer.innerHTML = "";

  data.forEach((item) => {
    const clone = elTemplateCard.content.cloneNode(true);

    clone.querySelector(".name").innerText = item.name.common;

    clone.querySelector(".population").innerText = item.population
      ? item.population
      : "No info";

    clone.querySelector(".region").innerText = item.region
      ? item.region
      : "No info";

    clone.querySelector(".capital").innerText = item.capital
      ? item.capital
      : "No info";

    let img = clone.querySelector("img");
    img.src = item.flags.svg;
    img.setAttribute("data-name", item.name.common);

    elContainer.appendChild(clone);
  });
}

//  detail 
elContainer.addEventListener("click", (evt) => {
  let name = evt.target.getAttribute("data-name");

  if (name) {
    location.href = `./information.html?name=${name}`;
  }
});

// region filter
elRegionInput.addEventListener("change", (evt) => {
  let region = evt.target.value;

  fetch(`https://restcountries.com/v3.1/region/${region}`)
    .then((res) => res.json())
    .then((res) => {
      ui(res);
    });
});

// search
elSearchInput.addEventListener("input", (evt) => {
  let value = evt.target.value.trim();

  if (value === "") {
    ui(allData);
    return;
  }

  fetch(`https://restcountries.com/v3.1/name/${value}`)
    .then((res) => res.json())
    .then((res) => {
      ui(res);
    });
});

// loader skeleton
function loader(status) {
  elLoader.innerHTML = "";

  if (status === false) return;

  let count = 0;

  while (count < 20) {
    elLoader.appendChild(
      elSkeletonTemp.cloneNode(true).content
    );
    count++;
  }
}
