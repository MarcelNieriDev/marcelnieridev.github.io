// Função para formatar a data
function formatDate(date) {
  const months = [
    "janeiro",
    "fevereiro",
    "março",
    "abril",
    "maio",
    "junho",
    "julho",
    "agosto",
    "setembro",
    "outubro",
    "novembro",
    "dezembro",
  ];
  const day = String(date.getDate()).padStart(2, "0"); // Garante dois dígitos
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `São Paulo, ${day} de ${month} de ${year}`;
}

// Função para atualizar a data e hora
function updateDateTime() {
  const now = new Date();
  const navDatetime = document.getElementById("nav-datetime");

  if (navDatetime) {
    // Verifica se o elemento existe
    navDatetime.textContent = formatDate(now);
  }
}

// Atualiza a data ao carregar a página
updateDateTime();

// Função para ativar o menu hambúrguer
document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navList = document.querySelector(".nav-list");

  if (hamburger && navList) {
    hamburger.addEventListener("click", function () {
      navList.classList.toggle("active");
    });
  }
});
