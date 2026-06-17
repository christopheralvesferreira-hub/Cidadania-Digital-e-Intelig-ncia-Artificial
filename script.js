let score = 0;

// 🎯 QUIZ
function responder(correto, btn) {
  if (btn.disabled) return;

  if (correto) {
    score++;
    btn.style.background = "green";
  } else {
    btn.style.background = "red";
  }

  btn.parentElement.querySelectorAll("button").forEach(b => b.disabled = true);

  document.getElementById("score").innerText = "Pontuação: " + score;
}

// 🌙 DARK MODE
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeBtn.innerText = "☀️ Modo Claro";
  } else {
    themeBtn.innerText = "🌙 Modo Escuro";
  }
});

// 📩 FORMULÁRIO
const form = document.getElementById("form");
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  msg.innerText = "Denúncia enviada com sucesso. Obrigado por contribuir!";
  form.reset();
});
