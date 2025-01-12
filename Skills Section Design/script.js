document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll(".progress-span");

    progressBars.forEach((bar) => {
        const targetWidth = parseInt(bar.getAttribute("data-target")); // Get the target value
        const percentageSpan = bar.closest(".progress").querySelector(".percentage"); // Locate percentage text

        let currentWidth = 0; // Initialize at 0%
        const interval = setInterval(() => {
            if (currentWidth >= targetWidth) {
                clearInterval(interval); // Stop animation
            } else {
                currentWidth++;
                bar.style.width = `${currentWidth}%`; // Update bar width
                percentageSpan.textContent = `${currentWidth}%`; // Update displayed percentage
            }
        }, 20); // Adjust speed as necessary
    });
});
