//User Interface Logic
//window.addEventListener("load", 

function handleGeneration(event){
  event.preventDefault();
  const species = document.getElementById("species").value;
  const trade = document.getElementById("trade").value;
  const gender = document.getElementById("gender").value;
  const favColor = document.getElementById("color").value;
  const dob = document.getElementById("born").value;


window.addEventListener("load", function () {
  document.getElementById("characterSelect").addEventListener("submit", handleGeneration)
});

let result;
if (species === "Elf") {
    document.getElementById("characterResults").removeAttribute("class");
}

document.getElementById("output").innerText = result;

};