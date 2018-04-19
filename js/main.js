var button = document.querySelector("#button");
var name = document.querySelector("#name");
var height = document.querySelector("#height");
var mass = document.querySelector("#mass");
var birthYear = document.querySelector("#birth-year");

function getInfo() {
  var randomNumber = Math.floor(Math.random() * 88 + 1);
  var apiUrl = "https://swapi.co/api/people/" + randomNumber;

  axios.get(apiUrl).then(function(response) {
    updateInfo(response.data);
  });
}

function updateInfo(data) {
  name.innerText = data.name;
  height.innerText = "Height: " + data.height;
  mass.innerText = "Height: " + data.mass;
  birthYear.innerText = "Height: " + data.birth_year;
}
button.addEventListener("click", getInfo);