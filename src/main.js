let lis = document.querySelectorAll("ul li");

let row = document.querySelector(".info .row");

let hours = document.querySelectorAll(".col .box .hour");
let subHours = document.querySelectorAll(".col .box .sub-hour");

fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    lis.forEach((li) => {
      li.addEventListener("click", () => {
        lis.forEach((li) => li.classList.remove("active"));
        li.classList.add("active");
        row.className = `row ${li.innerHTML.toLowerCase()}`;
        showData(data);
      });
    });
    showData(data);
  });

function showData(data) {
  console.log(data);
  let activePeriod = document
    .querySelector("ul li.active")
    .innerText.toLowerCase();
  data.forEach((activity, i) => {
    let currentHours = activity.timeframes[activePeriod].current;
    let previousHours = activity.timeframes[activePeriod].previous;
    hours[i].innerText = `${currentHours}hrs`;
    subHours[i].innerText = `Previous - ${previousHours}hrs`;
  });
}
