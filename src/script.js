const button = document.querySelector("#themeButton");
const dateElement = document.querySelector("#date");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

function updateDate() {
    const currentDate = new Date().toISOString;

    localStorage.setItem("lastUpdated", currentDate);
    displayDate(currentDate);
}

function displayDate(date) {
    dateElement.textContent =
        "Last updated: " + new Date(date).toLocaleString("en-GB");
}


const saveDate = localStorage.getItem("lastUpdated");
if (saveDate) {
    displayDate(savedDate);
}