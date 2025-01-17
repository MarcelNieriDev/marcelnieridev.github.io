document.addEventListener("DOMContentLoaded", function() {

  // Função para atualizar a data e hora
  function updateDateTime() {
    const dateTimeElement = document.getElementById('data-hora');
    const now = new Date();
    
    // Formatando a data e hora como "dia/mês/ano - 00:00hrs"
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const year = now.getFullYear();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const formattedDateTime = `${day}/${month}/${year} - ${hours}:${minutes}hrs`;

    dateTimeElement.textContent = formattedDateTime;
  }

  // Atualiza a data e hora a cada segundo
  setInterval(updateDateTime, 1000);

  // Alterna o tema e o conteúdo da página
  document.getElementById('alternar-tema').addEventListener('click', function () {
    document.body.classList.toggle('tema-claro');

    if (document.body.classList.contains('tema-claro')) {
      this.textContent = 'Tema Escuro';
      document.getElementById('profile-image').src = '/assets/images/tema claro.png';
      document.querySelector('.sobre img').src = '/assets/images/perfil-claro.png';
      document.querySelector('.conteudo-home .nome').classList.add('tema-claro');
      document.querySelector('.conteudo-home .descricao').classList.add('tema-claro');
    } else {
      this.textContent = 'Tema Claro';
      document.getElementById('profile-image').src = '/assets/images/Acenando perfil.png';
      document.querySelector('.sobre img').src = '/assets/images/perfil.png';
      document.querySelector('.conteudo-home .nome').classList.remove('tema-claro');
      document.querySelector('.conteudo-home .descricao').classList.remove('tema-claro');
    }
  });

  // Chama a função para definir a data e hora imediatamente
  updateDateTime();
});
