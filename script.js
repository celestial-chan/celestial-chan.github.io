
// ================= PAGE SWITCH =================

function switchPage(pageId) {
  const pages = document.querySelectorAll('.page');

  pages.forEach(p => p.classList.remove('active'));

  document.getElementById(pageId).classList.add('active');
}

// ================= SPLASH TEXT =================

window.onload = () => {
  const words = [
    "loading skyblock...",
    "Comic Sans regret...",
    "mining diamonds...",
    "frutiger aero vibes",
    "hypixel energy",
    "gaming moment"
  ];

  const el = document.getElementById("splashtext");
  if (el) {
    el.textContent = words[Math.floor(Math.random() * words.length)];
  }

  const skip = localStorage.getItem("skip") === "true";
  if (skip) switchPage("homepg");
};

// ================= SETTINGS =================

document.addEventListener("change", (e) => {
  if (e.target.id === "skip") {
    localStorage.setItem("skip", e.target.checked);
  }
});

// ================= CLICK SOUND =================

const clickSound = new Audio("https://www.myinstants.com/media/sounds/minecraft-click.mp3");

function playClick() {
  clickSound.currentTime = 0;
  clickSound.play();
}
