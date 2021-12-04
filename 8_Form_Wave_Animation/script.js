const labels = document.querySelectorAll(
  ".form-control label"
);
// creating spans for aninmation
labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, index) =>
        `<span style="transition-delay:${
          index * 40
        }ms">${letter}</span>`
    )
    .join("");
});
