// import { dates } from "./data/data.js";

const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom =
    (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop =
      box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

// dates.forEach((subject, index) => {
//   const card = `<div class="box"><h2 class="box-title">${subject.title}</h2>
//     <span class="box-date">${subject.date}</span>
//     <p class="box-summary">${subject.summary}</p></p><button class="timeline-item-more-info" id="${index}">Click for more information!</button></div>`;
//   const element = document.createElement("div");
//   element.innerHTML = card;
//   document.body.appendChild(element);
// });
