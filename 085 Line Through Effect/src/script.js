// Get the text element
const textElement = document.getElementById("text");

// Split the text into an array of letters
const letters = textElement.innerText.split("");

// Create a new h1 element
const newHeading = document.createElement("h1");

// Create an array of span elements with randomized visibility style
const letterSpans = letters.map((letter) => {
  const visibilityStyle =
    Math.random() < 0.5 ? "visibility: hidden" : "visibility: visible";
  return `<span class="letter" style="${visibilityStyle}">${letter}</span>`;
});

// Set the inner HTML of the new heading element
newHeading.innerHTML = letterSpans.join("");

// Add the "overlay" class to the new heading element
newHeading.classList.add("overlay");

// Append the new heading element to the document body
document.body.appendChild(newHeading);
