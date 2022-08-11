//Busniess Logic
function characterCombination (species, trade, gender, color, dob) {
  return species + gender + trade + color + dob
}

function generate(species, trade, gender, color, dob){
  //if statement goes here
}

//User Interface Logic"
window.onload = function handleGeneration(event){
  let form = document.querySelector("form")

  const species = document.getElementById("species").value;
  const trade = document.getElementById("trade").value;
  const gender = document.querySelector("input[name='gender']:checked").value;
  const favColor = document.getElementById("color").value;
  const dob = document.getElementById("born").value;

  document.getElementById("output").innerText = characterCombination();

function submitInput(event){
  event.preventDefault();
  handleGeneration();
}
window.addEventListener("load", function () {
  document.getElementById("characterSelect").addEventListener("submit", submitInput)
});
}