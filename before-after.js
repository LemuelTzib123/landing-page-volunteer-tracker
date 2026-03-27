document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".image-comparison-container");
    const afterImageWrapper = container.querySelector(".after-image");
    const slider = document.querySelector(".slider");
    const sliderHandle = document.querySelector(".slider-handle");

    function updateSlider() {
        const sliderValue = slider.value;
        afterImageWrapper.style.width = `${sliderValue}%`;
        sliderHandle.style.left = `${sliderValue}%`;
    }

    slider.addEventListener("input", updateSlider);
    updateSlider();
});