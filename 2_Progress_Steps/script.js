const progress =
  document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles =
  document.querySelectorAll(".circle");

let currentActive = 1;
// counts up whent the next button is clicked
next.addEventListener("click", () => {
  currentActive++;
  //stops the event from going past 4
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener("click", () => {
  currentActive--;
  //stops the event from going past 4
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  // adds active class name to all the circles
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives =
    document.querySelectorAll(".active");
  //   uses percetage to increase width to bring about vlue line
//   make sure blue double brackets aren't there
  progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";

if(currentActive === 1) {
    prev.disabled = true
} else if( currentActive === circles.length){
    next.disabled = true
} else {
    prev.disabled = false
    next.disabled = false
}
}
