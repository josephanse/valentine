const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const response = document.getElementById("response");
const music = document.getElementById("music");

// Make "No" button run away
noBtn.addEventListener("mouseover", () => {
const x = Math.random() * (window.innerWidth - 150);
const y = Math.random() * (window.innerHeight - 100);
noBtn.style.left = `${x}px`;
noBtn.style.top = `${y}px`;
});

// When she clicks YES
yesBtn.addEventListener("click", () => {
response.classList.remove("hidden");
music.play();
createHearts();
});

// Heart animation
function createHearts() {
for (let i = 0; i < 60; i++) {
const heart = document.createElement("div");
heart.classList.add("heart");
heart.innerHTML = "💖";
heart.style.left = Math.random() * 100 + "vw";
heart.style.animationDuration = (Math.random() * 3 + 2) + "s";
document.body.appendChild(heart);
}
}
