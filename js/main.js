const botaoLer = document.querySelector("#ler");
const campoTexto = document.querySelector("#texto");

botaoLer.addEventListener("click", () => { 
  const texto = campoTexto.value;
  const fala = new SpeechSynthesisUtterance(texto);
  speechSynthesis.speak(fala);
});

