// ================= PAGE SWITCH SYSTEM =================

function switchPage(pageId) {
  const pages = document.querySelectorAll('.page');

  pages.forEach(page => {
    page.classList.remove('active');
  });

  document.getElementById(pageId).classList.add('active');
}

// ================= SPLASH TEXT =================

window.onload = function () {
  const words = [
    "Comic Sans Enjoyer",
    "SkyBlock addict",
    "made by chaos",
    "loading vibes...",
    "frutiger aero moment",
    "sigma energy"
  ];

  const text = words[Math.floor(Math.random() * words.length)];
  const el = document.getElementById("splashtext");

  if (el) el.textContent = text;

  // optional skip splash
  const skip = localStorage.getItem("skip") === "true";
  if (skip) switchPage("homepg");
};

// ================= SETTINGS SAVE =================

document.addEventListener("change", (e) => {
  if (e.target.id === "skip") {
    localStorage.setItem("skip", e.target.checked);
  }
});
