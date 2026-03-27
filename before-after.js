document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("slider");
  const beforeWrapper = document.getElementById("beforeWrapper");
  const sliderLine = document.getElementById("sliderLine");

  let isDragging = false;

  const move = (e) => {
    if (!isDragging) return;

    // Support both Mouse and Touch events
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const rect = slider.getBoundingClientRect();
    
    // Calculate horizontal offset
    let x = clientX - rect.left;

    // Keep the slider within the bounds of the container
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;

    // Update the clip-path of the "Before" wrapper
    // inset(top, right, bottom, left)
    beforeWrapper.style.clipPath = `inset(0 ${100 - percentage}% 0 0)`;
    
    // Move the vertical line
    sliderLine.style.left = `${percentage}%`;
  };

  // Event Listeners
  slider.addEventListener("pointerdown", (e) => {
    isDragging = true;
    slider.setPointerCapture(e.pointerId); // Keeps tracking even if mouse leaves the box
    move(e);
  });

  // Use window/global listeners for movement so it's smoother
  window.addEventListener("pointermove", move);

  window.addEventListener("pointerup", () => {
    isDragging = false;
  });
});