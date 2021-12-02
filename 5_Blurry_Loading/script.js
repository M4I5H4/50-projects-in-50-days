const loadText = document.querySelector(
  ".loading-text"
);
const bg = document.querySelector(".bg");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load,0,100,1,0);
//   unblurrs the back grund starting form 30 px
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}
//  how to get the opacity to match the 0%-100%
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (
  num,
  in_min,
  in_max,
  out_min,
  out_max
) => {
  return (
    ((num - in_min) * (out_max - out_min)) /
      (in_max - in_min) +
    out_min
  );
};
