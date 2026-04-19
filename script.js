const heart = document.getElementById("heart");
const overlay = document.getElementById("overlay");
const letter = document.getElementById("letter");

// buka
heart.addEventListener("click", () => {
  overlay.classList.add("show");

  // love jatuh smooth
  for (let i = 0; i < 20; i++) {
    setTimeout(createFallingHeart, i * 80);
  }
});

// tutup
letter.addEventListener("click", () => {
  overlay.classList.remove("show");
});

// efek love jatuh
function createFallingHeart() {
  const el = document.createElement("div");
  el.classList.add("falling-heart");
  el.innerHTML = "❤️";

  el.style.left = Math.random() * window.innerWidth + "px";
  el.style.animationDuration = (Math.random() * 2 + 2) + "s";

  document.body.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 4000);
}