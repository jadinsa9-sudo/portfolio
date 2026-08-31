const button = document.querySelector("#themeButton");
const dateElement = document.querySelector("#date");

button.addEventListener("click", function () {
    document.body.classList.toggle("dark");
});

// function updateDate() {
//     const currentDate = new Date();

//     localStorage.setItem("lastUpdated", currentDate.getTime());
//     displayDate(currentDate);
// }

function displayDate(date) {
    dateElement.textContent =
        "Last updated: " + date.toLocaleString("en-GB");
}

// https://api.github.com/repos/jadinsa9-sudo/portfolio/commits
// const saveDate = localStorage.getItem("lastUpdated");
// if (saveDate) {
//     displayDate(new Date(parseInt(saveDate)));
// }

fetch("https://api.github.com/repos/jadinsa9-sudo/portfolio/commits")
  .then(response => response.json())
  .then(data => {
    if (data.length > 0) {
        displayDate(new Date(data[0].commit.committer.date));
    }
  });
