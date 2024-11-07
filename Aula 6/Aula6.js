function aplicarCor(cor) {
    const text = document.getElementById("exibicaoTexto");
    text.style.color = cor;
  
    historico(cor, text.innerText);
  }
  
  function capturarTexto() {
    var texto = document.getElementById("campoTexto").value;
    document.getElementById("exibicaoTexto").innerText = texto;
  }
  
  function historico(cor, text) {
    const historico = document.getElementById("historico");
    const novaEntrada = document.createElement("li");
  
    novaEntrada.innerText = text;
    novaEntrada.style.color = cor;
    historico.appendChild(novaEntrada);
  
    console.log(historico)
  }