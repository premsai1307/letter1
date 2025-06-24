const shayari = `Wo subah-subah ki hawa bhi alag lagti hai,
Jab tum saamne hoti ho toh zindagi kuch khaas lagti hai...

Ek baat tumse kehna chahta hoon — har samay, har pal,
aur har haalaat mein main tumhare saath rehna chahta hoon.

Ek khayal hai… jo abhi adhoora hai,
par use poora karna chahta hoon… tumhare saath.

Tum mein koi kami nahi, koi doori nahi, sirf jazbaat hai,
jo har roz tumse juda hua mehsoos hota hai.

Tum aati ho subah jogging ke waqt — toh dil khil jaata hai,
nahi aati ho — toh lagta hai jaise subah bhi andheri ho gayi ho...

Bas... itna kehna tha... tum mere liye khaas ho. 💖`;

function checkName() {
  const correctName = "deepti"; // Change to her name
  const input = document.getElementById("nameInput").value.trim();
  const error = document.getElementById("error");

  if (input.toLowerCase() === correctName.toLowerCase()) {
    document.getElementById("namePrompt").style.display = "none";
    document.getElementById("letterBox").classList.remove("hidden");
    startPetals();
    typeWriterEffect(shayari, 0);
  } else {
    error.innerText = "Naam sahi nahi hai... firse koshish karo 💌";
  }
}

function typeWriterEffect(text, i) {
  const letterBox = document.getElementById("typewriterText");
  const feather = document.getElementById("feather");
  const contentBox = document.querySelector('.letter-content');

  if (i === 0) {
    letterBox.innerHTML = "";
    feather.style.display = "block";
  }

  if (i < text.length) {
    letterBox.innerHTML += text.charAt(i);

    const charsPerLine = 50;
    const charWidth = 6;     
    const lineHeight = 30;

    const contentRect = contentBox.getBoundingClientRect();
    const parentRect = contentBox.offsetParent.getBoundingClientRect();

    const line = Math.floor(i / charsPerLine);
    const col = i % charsPerLine;

    const featherTop = contentRect.top - parentRect.top + line * lineHeight;
    const featherLeft = contentRect.left - parentRect.left + col * charWidth;

    feather.style.top = `${featherTop}px`;
    feather.style.left = `${featherLeft}px`;

    setTimeout(() => typeWriterEffect(text, i + 1), 40);
  } else {
    feather.style.animation = 'featherFadeOut 1s ease-out forwards';

    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.top = feather.style.top;
    sparkle.style.left = feather.style.left;
    document.querySelector('.letter-wrapper').appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
    
    setTimeout(() => {
      startTimer();
      document.getElementById("loveTimer").classList.add("visible");
    }, 800);
  }
}

function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.querySelector("#musicControl button");
  if (music.paused) {
    music.play();
    btn.textContent = "🔈";
  } else {
    music.pause();
    btn.textContent = "🔇";
  }
}

// Heart cursor animation
document.addEventListener("mousemove", e => {
  const heart = document.createElement("div");
  heart.className = "cursor-heart";
  heart.style.left = e.clientX + "px";
  heart.style.top = e.clientY + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 1000);
});

// Petals fall effect
function startPetals() {
  for (let i = 0; i < 15; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.animationDuration = (5 + Math.random() * 5) + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(petal);
  }
}

// Love timer after writing completes
function startTimer() {
  const start = new Date("2025-02-14T00:00:00");
  const now = new Date();
  const diff = now - start;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("loveTimer").innerText = `❤️ Tumse mohabbat ko ${days} din ho gaye...`;
}
