let elLoaderSkeleton = document.getElementById("loaderSkeleton");
let elSkeleton = document.getElementById("skeleton");

fetch(
  "https://json-api.uz/api/project/fn44-amaliyot/cars/" +
    new URLSearchParams(location.search).get("id")
)
  .then((res) => res.json())
  .then((res) => ui(res))
  .catch(() => {})
  .finally(() => {});
function ui(data) {
  let clone = document.querySelector("#ui_template").cloneNode(true).content;
  clone.querySelector(".js-data-name").innerText = data.name
    ? data.name
    : "no data";
  clone.querySelector(".trim").innerText = data.trim ? data.trim : "no data";
  clone.querySelector(".generation").innerText = data.generation
    ? data.generation
    : "no data";
  clone.querySelector(".year").innerText = Number.parseInt(data.year)
    ? data.year
    : "no data";

  clone.querySelector(".colorName").innerText = data.colorName
    ? data.colorName
    : "no data";
  clone.querySelector(".category").innerText = data.category
    ? data.category
    : "no data";
  clone.querySelector(".doorCount").innerText = data.doorCount
    ? data.doorCount
    : "no data";
  clone.querySelector(".seatCount").innerText = data.seatCount
    ? data.seatCount
    : "no data";
  clone.querySelector(".maxSpeed").innerText = data.maxSpeed
    ? data.maxSpeed
    : "no data";
  clone.querySelector(".acceleration").innerText = data.acceleration
    ? data.acceleration
    : "no data";
  clone.querySelector(".engine").innerText = data.engine
    ? data.engine
    : "no data";
  clone.querySelector(".horsePower").innerText = data.horsepower
    ? data.horsepower
    : "no data";
  clone.querySelector(".fuelType").innerText = data.fuelType
    ? data.fuelType
    : "no data";

  document.querySelector(".js-details-box").append(clone);
}
