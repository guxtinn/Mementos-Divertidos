function playAudio(id) {
    var audio = document.getElementById('audio' + id);
    audio.play();
  }
  function avaliarSite() {
    var resposta = prompt("Você gostou do site? (Digite 'sim' ou 'nao')");
    if (resposta) {
      resposta = resposta.toLowerCase();
      if (resposta === 'sim') {
        alert("Obrigado por gostar do site!");
      } else if (resposta === 'nao') {
        playAudio('no');
      } else {
        alert("Resposta inválida. Por favor, digite 'sim' ou 'nao'.");
      }
    }
  }