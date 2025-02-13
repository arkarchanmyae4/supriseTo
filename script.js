const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const audio = document.querySelector(".audio");
var cover = document.getElementById("cover");
var container = document.querySelector(".container");
var containers = document.querySelector(".containers");

// Redirect to 'yes.html' when Yes button is clicked
function nextPage() {
  container.style.visibility = "hidden";
  containers.style.visibility = "visible";
  audio.play();
}

// Make the No button move randomly on hover
function moveButton() {
  const container = document.querySelector(".container");
  const containerRect = container.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the container
  const maxX = containerRect.width - noBtnRect.width;
  const maxY = containerRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.position = "absolute"; // Ensure the button moves within the container
  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
  yesBtn.style.padding += "15px 15px";
  audio.play();
}

function audioPlay() {
  audio.play();
  cover.style.visibility = "hidden";
}
