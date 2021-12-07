const jokeEle = document.getElementById("joke");
const jokeBtn =
  document.getElementById("jokeBtn");
const url = "https://icanhazdadjoke.com";

jokeBtn.addEventListener("click", generateJoke);
generateJoke();

//using async await
async function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  const res = await fetch(url, config);

  const data = await res.json();
  jokeEle.innerHTML = data.joke;
}

// alternative way of calling from api using .then
// function generateJoke() {
//   const config = {
//     headers: {
//       Accept: "application/json",
//     },
//   };

//   fetch(url, config)
//     .then((res) => res.json())
//     .then((data) => {
//       jokeEle.innerHTML = data.joke;
//     });
// }
