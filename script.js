// ================= FAKE LOADING TEXT =================
window.onload = () => {
  const words = [
    "loading world...",
    "old skyblock gamer",
    "frutiger aero core",
    "vibe coding (allegedly)",
    "2000s UI enjoyer"
  ];

  const el = document.getElementById("splashtext");

  const skip = localStorage.getItem("skip") === "true";

  if (el && !skip) {
    el.textContent = words[Math.floor(Math.random() * words.length)];
  }

  if (skip && el) {
    el.textContent = "lyra hub ready.";
  }
};

// ================= SECTION SWITCH =================
function go(page) {
  const sections = document.querySelectorAll(".section");

  sections.forEach(s => s.classList.add("hidden"));

  if (page === "home") return;

  const target = document.getElementById(page);
  if (target) target.classList.remove("hidden");
}

// ================= SETTINGS =================
document.addEventListener("change", (e) => {
  if (e.target.id === "skip") {
    localStorage.setItem("skip", e.target.checked);
  }
});
