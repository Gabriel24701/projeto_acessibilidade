const botaoLer = document.querySelector("#ler");
const campoTexto = document.querySelector("#texto");

botaoLer.disabled = true; // Desabilita o botão inicialmente

campoTexto.addEventListener("input", () => {
  botaoLer.disabled = campoTexto.value.trim() === "";
}); // Habilita o botão quando há texto no campo

botaoLer.addEventListener("click", () => {
  const texto = campoTexto.value;
  const fala = new SpeechSynthesisUtterance(texto);
  
  fala.lang = "pt-BR";
  speechSynthesis.speak(fala);
});
