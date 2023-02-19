var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
  body.style.background =
    "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

  css.textContent = body.style.background + ";";
}

// console.log(body); // making sure we can grab the body tag
// body.style.background = "red"; // Testing to make sure we can do a change
//

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
