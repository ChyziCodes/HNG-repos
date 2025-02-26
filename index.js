// script.js
function updateTime() {
    const now = new Date();
    const utcTime = now.toUTCString().split(" ")[4];
    document.querySelector('[data-testid="currentTimeUTC"]').innerText = utcTime;
}

function updateDay() {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const now = new Date();
    const day = days[now.getUTCDay()];
    document.querySelector('[data-testid="currentDay"]').innerText = day;
}

window.onload = function() {
    updateTime();
    updateDay();
    setInterval(updateTime, 1000);
};
