const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0;
// on click move to next slide if longer than number of slides then return to slide 0
rightBtn.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBgToBody();
  setActiveSlide();
});
// on click move back a slide if on slide 0 then return to last slide in node list
leftBtn.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }
  setBgToBody()
  setActiveSlide()
});

setBgToBody();
//fucntion to make curent active slide the body background image
function setBgToBody() {
  body.style.backgroundImage =
    slides[activeSlide].style.backgroundImage;
}
// function to romive active class from current slide and move onto the next slide
function setActiveSlide() {
  slides.forEach((slide) =>
    slide.classList.remove("active")
  );

  slides[activeSlide].classList.add("active");
}
