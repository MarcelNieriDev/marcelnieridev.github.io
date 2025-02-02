// Início do código
document.addEventListener("DOMContentLoaded", function () {
  // Função para formatar data
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
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `São Paulo, ${day} de ${month} de ${year}`;
  }

  // Função para atualizar data e hora no cabeçalho
  function updateDateTime() {
    const now = new Date();
    const navDatetime = document.getElementById("nav-datetime");
    navDatetime.textContent = formatDate(now);
  }

  // Atualiza a data e hora ao carregar a página
  updateDateTime();

  // Atualiza a data e hora a cada minuto
  setInterval(updateDateTime, 60000);

  // Função para alternar a exibição do menu de navegação ao clicar no ícone do menu
  const menuIcon = document.getElementById("menu-icon");
  const navList = document.getElementById("nav-list");

  menuIcon.addEventListener("click", function () {
    navList.classList.toggle("nav-active");
  });

  // Função para alternar a exibição do menu de navegação ao clicar no ícone do menu (hamburger)
  const hamburger = document.getElementById('hamburger');
  hamburger.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
});
