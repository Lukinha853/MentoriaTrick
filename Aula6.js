let CorSelecionada = ''; // Variável para armazenar a cor selecionada

function selectColor(cor) {
    CorSelecionada = cor; // Armazena a cor selecionada
}

function AplicarCor() {
    const text = document.getElementById('exibicaoTexto');
    text.style.color = CorSelecionada; // Aplica a cor armazenada
}
function capturarTexto() {
    // Obtém o valor digitado no campo de texto
    var texto = document.getElementById("campoTexto").value;
    // Exibe o valor no elemento <p> com id "exibicaoTexto"
    document.getElementById("exibicaoTexto").innerText = texto;
}
function historico(){
    const historico = document.getElementById("historico");
    const novaEntrada = document.createElement("li"); // Cria um novo item de lista
    novaEntrada.innerText = texto; //Colocando o texto dentro do li
    novaEntrada.style.color = CorSelecionada; //Colocando a cor dentro do texto do li
    historico.appendChild(novaEntrada); // Adiciona o novo item à lista de histórico
}
