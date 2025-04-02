document.getElementById("heart").addEventListener("click", function() {
    let letter = document.getElementById("letter");
    let heart = document.getElementById("heart");

    if (letter.classList.contains("show")) {
        letter.classList.remove("show"); // Sembunyikan surat
        setTimeout(() => {
            heart.classList.remove("hide"); // Tampilkan kembali hati
        }, 500);
    } else {
        letter.classList.add("show"); // Tampilkan surat
        heart.classList.add("hide"); // Hati turun dan mengecil
        createFallingHearts(); // Memanggil animasi love berjatuhan
    }
});

// Menutup surat dengan klik di dalamnya
document.getElementById("letter").addEventListener("click", function() {
    let letter = document.getElementById("letter");
    let heart = document.getElementById("heart");

    if (letter.classList.contains("show")) {
        letter.classList.remove("show");
        setTimeout(() => {
            heart.classList.remove("hide");
        }, 500);
    }
});

// Fungsi untuk membuat love berjatuhan
function createFallingHearts() {
    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("love");

        let randomX = Math.random() * window.innerWidth;
        let randomDuration = Math.random() * 3 + 2;

        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}
