const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

next.addEventListener("click", () => changeStep(1));
prev.addEventListener("click", () => changeStep(-1));

function changeStep(step) {
  currentActive += step;
  currentActive = Math.max(1, Math.min(currentActive, circles.length));
  update();
}

function update() {
  updateCircles();
  updateProgress();
  updateButtons();
}

function updateCircles() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

function updateProgress() {
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
}

function updateButtons() {
  prev.disabled = currentActive === 1;
  next.disabled = currentActive === circles.length;
}

update();