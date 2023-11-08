function clickMeUpdate() {
  document.getElementById("textParagraph").innerHTML =
    "Hello today is " + Date() + "";
}

function clickMeReset() {
  document.getElementById("textParagraph").innerHTML =
    "Hi what is the date and time now?";
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    data.forEach((user) => {
      const markup = `<li>${user.name}</li>`;
      document
        .getElementById("headerText")
        .insertAdjacentHTML("beforeend", markup);
    });
  })
  .catch((error) => console.log(error));
