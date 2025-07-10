// scripts.js

const photoSources = [
  "IMG_5927.JPG",
  "IMG_5927.JPG",
  "pppn bf.jpg"
];

// Falling heart
function rainHeart() {
  const heart = document.createElement("div");
  heart.classList.add("rain-heart");
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (2 + Math.random() * 2) + "s";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}

// Falling photos
function rainPhoto() {
  const photo = document.createElement("div");
  photo.classList.add("rain-photo");
  photo.style.left = Math.random() * 100 + "vw";
  photo.style.animationDuration = (4 + Math.random() * 3) + "s";

  const img = document.createElement("img");
  img.src = photoSources[Math.floor(Math.random() * photoSources.length)];
  photo.appendChild(img);

  document.body.appendChild(photo);
  setTimeout(() => photo.remove(), 6000);
}

// Random love quotes
const loveQuotes = [
  "I never get tired of loving you 💕",
  "You are my favorite person 🥺",
  "Every day with you feels like a dream ✨",
  "Can’t wait to hug you again 🤍",
  "My happiness is YOU 💖",
  "Forever & Always 🫶"
];

function displayRandomQuote() {
  const quoteBox = document.getElementById("quoteBox");
  const randomQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
  quoteBox.innerText = randomQuote;
}

// Countdown timer
function updateCountdown() {
  const nextMonthsary = new Date();
  nextMonthsary.setMonth(nextMonthsary.getMonth() + 1);
  nextMonthsary.setDate(1);
  nextMonthsary.setHours(0, 0, 0, 0);

  const now = new Date();
  const diff = nextMonthsary - now;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);
  document.getElementById("timer").textContent = `${days}d ${hours}h ${mins}m ${secs}s`;
}

setInterval(rainHeart, 400);
setInterval(rainPhoto, 1500);
setInterval(displayRandomQuote, 8000);
setInterval(updateCountdown, 1000);
updateCountdown();
displayRandomQuote();

// Button click → message
function showLove(answer) {
  const loveResponse = document.getElementById("loveResponse");
  loveResponse.innerText = "I love you more than you know too Ko Ko 💕";

  // Small burst effect
  for (let i = 0; i < 6; i++) {
    setTimeout(() => {
      rainHeart();
      rainPhoto();
    }, i * 200);
  }
}
