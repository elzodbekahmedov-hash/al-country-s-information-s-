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
  clone.querySelector(".js-data-name").innerText = data.name;
  clone.querySelector(".trim").innerText = data.trim;
  clone.querySelector(".generation").innerText = data.generation;
  clone.querySelector(".year").innerText = Number.parseInt(data.year);

  clone.querySelector(".colorName").innerText = data.colorName;
  clone.querySelector(".category").innerText = data.category;
  clone.querySelector(".doorCount").innerText = data.doorCount;
  clone.querySelector(".seatCount").innerText = data.seatCount;
  clone.querySelector(".maxSpeed").innerText = data.maxSpeed;
  clone.querySelector(".acceleration").innerText = data.acceleration;
  clone.querySelector(".engine").innerText = data.engine;
  clone.querySelector(".horsePower").innerText = data.horsepower;
  clone.querySelector(".fuelType").innerText = data.fuelType;

  document.querySelector(".js-details-box").append(clone);
}
