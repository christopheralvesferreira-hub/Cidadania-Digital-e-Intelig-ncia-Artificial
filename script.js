let score = 0;

// 🎯 Quiz
function responder(correto, btn) {
  if (correto) {
    score++;
    btn.style.background = "green";
  } else {
    btn.style.background = "red";
  }

  document.getElementById("score").innerText = "Pontuação: " + score;
}

// 🌙 Modo escuro
const btnTheme = document.getElementById("toggleTheme");

btnTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    btnTheme.innerText = "☀️ Modo Claro";
  } else {
    btnTheme.innerText = "🌙 Modo Escuro";
  }
});

// 📩 Formulário
const form = document.getElementById("form");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  msg.innerText = "Mensagem enviada com sucesso! Obrigado por contribuir.";
  form.reset();
});
