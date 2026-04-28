// ================= PAGE SWITCH =================
function switchPage(pageId) {
  document.querySelectorAll('.page').forEach(p => {
    p.classList.remove('active');
  });

  const target = document.getElementById(pageId);
  if (target) target.classList.add('active');
}

// ================= SPLASH TEXT =================

window.onload = () => {
  const words = [
    "old skyblock gamer",
    "vibe coder (allegedly)",
    "potential man",
    "out of splash text ideas",
    "please help",
    "frutiger aero core",
    "2000s UI enjoyer"
  ];

  const el = document.getElementById("splashtext");
  if (el) {
    el.textContent = words[Math.floor(Math.random() * words.length)];
  }

  const skip = localStorage.getItem("skip") === "true";

  // FIX: now correctly matches your merged hub id
  if (skip) switchPage("hub");
};

// ================= SETTINGS =================

document.addEventListener("change", (e) => {
  if (e.target.id === "skip") {
    localStorage.setItem("skip", e.target.checked);
  }
});

// ================= CLICK SOUND =================

const clickSound = new Audio(
  "https://www.myinstants.com/media/sounds/minecraft-click.mp3"
);

clickSound.volume = 0.4;

// unlock audio only after first user interaction (browser requirement)
let soundUnlocked = false;

document.addEventListener(
  "click",
  () => {
    soundUnlocked = true;
  },
  { once: true }
);

function playClick() {
  if (!soundUnlocked) return;

  clickSound.currentTime = 0;
  clickSound.play().catch(() => {});
}
