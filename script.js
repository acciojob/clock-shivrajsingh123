function updateTimer() {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        const now = new Date();
        const formattedTime = now.toLocaleString(); // Formats date and time based on locale
        timerElement.textContent = formattedTime;
    }
}

// Update the timer every second
setInterval(updateTimer, 1000);

// Initial call to display time immediately when the page loads
updateTimer();

// Apply styling for positioning the timer at the upper left corner
document.addEventListener("DOMContentLoaded", () => {
    const timerElement = document.getElementById("timer");
    if (timerElement) {
        timerElement.style.position = "absolute";
        timerElement.style.top = "10px";
        timerElement.style.left = "10px";
        timerElement.style.fontSize = "18px";
        timerElement.style.fontWeight = "bold";
        timerElement.style.fontFamily = "Arial, sans-serif";
    }
});
