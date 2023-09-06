const hourNow = getHours();
setBackground(hourNow);
var dayPeriod;
setTime();

const searchInput = document.querySelector("section input");
const searchButton = document.querySelector("section button");
searchButton.addEventListener("click", () => {
  if (!searchInput.value) {
    alert("Please enter something before searching!");
    return;
  }
  window.open(`https://www.google.com/search?q=${searchInput.value}`, "_blank");
});

function getHours() {
  const now = new Date();
  return now.getHours();
}

function setBackground(hours) {
  const backgroundDiv = document.querySelector(".background");
  let url = "./assets/";
  if (hours < 4 || hours >= 20) {
    url += "night";
    dayPeriod = "Evening";
  } else if (hours >= 4 && hours < 12) {
    url += "morning";
    dayPeriod = "Morning";
  } else if (hours < 16) {
    url += "afternoon";
    dayPeriod = "Afternoon";
  } else {
    url += "evening";
    dayPeriod = "Evening";
  }
  url += ".jpg";
  backgroundDiv.style.backgroundImage = `url(${url})`;
  setWelcomeMessage();
}

function setWelcomeMessage() {
  const welcomeH1 = document.querySelector("header h1");
  welcomeH1.innerHTML = "Good " + dayPeriod + ", Aman";
}

function setTime() {
  setInterval(() => {
    const now = new Date();
    const hours = getHours();
    setBackground(hours);
    const liveTimer = document.querySelector("header h3");
    liveTimer.innerHTML =
      now.toLocaleDateString() + " - " + now.toLocaleTimeString();
  }, 1000);
}
