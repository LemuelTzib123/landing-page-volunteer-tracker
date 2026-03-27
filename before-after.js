const slider = document.getElementById("slider");
const beforeWrapper = document.getElementById("beforeWrapper");
const sliderLine = document.getElementById("sliderLine");

let dragging = false;

slider.addEventListener("mousedown", () => {
  dragging = true;
});

window.addEventListener("mouseup", () => {
  dragging = false;
});

slider.addEventListener("mousemove", (e) => {
  if (!dragging) return;

  const rect = slider.getBoundingClientRect();
  let x = e.clientX - rect.left;

  if (x < 0) x = 0;
  if (x > rect.width) x = rect.width;

  const percent = (x / rect.width) * 100;

  beforeWrapper.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
  sliderLine.style.left = percent + "%";
});