/* RODANDO NO CONSOLE (NAO ENTENDI DIREITO)

const readline = require('readline');

// Cria uma interface para capturar a entrada do usuário
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function perguntarNota(mensagem) {
    return new Promise((resolve) => {
      rl.question(mensagem, (nota) => {
        resolve(parseFloat(nota)); // Converte para número (float)
      });
    });
  }

  async function main() {
    const Nota1 = await perguntarNota('Digite a primeira nota: ');
    const Nota2 = await perguntarNota('Digite a segunda nota: ');
    const Nota3 = await perguntarNota('Digite a terceira nota: ');

    // Calcula a média
  const Media = (Nota1 + Nota2 + Nota3) / 3;

  if(Nota1 < 0 || Nota1 > 10 || Nota2 < 0 || Nota2 > 10 || Nota3 < 0 || Nota3 > 10) {
    console.log("Nota Invalida");
}
else{
    
if(Media >= 7)
    console.log(Media + " Aprovado");

if (Media >= 5 && Media <=6.9 ) {
    console.log(Media + " Recuperação");
}    
else
    console.log(Media + " Reprovado");

  rl.close(); // Fecha a interface readline
}
}
main();
*/


/* RODAR NO NAVEGADOR

let Nota1 = prompt("Digite a primeira nota:");
Nota1 = parseInt(Nota1);
let Nota2 = prompt("Digite a segunda nota:");
Nota2 = parseInt(Nota2);
let Nota3 = prompt("Digite a terceira nota:");
Nota3 = parseInt(Nota3);
let Media = (Nota1 + Nota2 + Nota3) / 3;

if(Nota1 < 0 || Nota1 > 10 || Nota2 < 0 || Nota2 > 10 || Nota3 < 0 || Nota3 > 10) {
    console.log("Nota Invalida");
}
else{
    
if(Media >= 7)
    console.log(Media + " Aprovado");

else if (Media >= 5 && Media <=6.9 ) {
    console.log(Media + " Recuperação");
}    
else
    console.log(Media + " Reprovado");
}
*/








/*// Pergunta ao usuário
rl.question('Digite a primeira nota: ', (Nota1) => {
  console.log(`A nota digitada é, ${Nota1}!`);
  rl.close(); // Encerra a interface após a resposta
});*/




let Nota1 = 1;
let Nota2 = 5;
let Nota3 = 5;
const Media = (Nota1 + Nota2 + Nota3) / 3;

if (Nota1 < 0 || Nota1 > 10 || Nota2 < 0 || Nota2 > 10 || Nota3 < 0 || Nota3 > 10) {
  console.log("Nota Invalida");
} else {
  console.log("Media ", + Media);
  if (Media >= 7) {
    console.log("Aprovado");
  } else if (Media >= 5 && Media <= 6.9) {
    console.log("Recuperação");
  } else {
    console.log("Reprovado");
  }
}


