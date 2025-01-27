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

function updateDateTime() {
  const now = new Date();
  const navDatetime = document.getElementById("nav-datetime");
  navDatetime.textContent = formatDate(now);
}

updateDateTime();
