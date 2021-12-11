// const title =
//   document.getElementById("title");

// title.innerHTML = "This is a tiele";

const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

toggle.addEventListener("click", () =>
  nav.classList.toggle("active")
);
