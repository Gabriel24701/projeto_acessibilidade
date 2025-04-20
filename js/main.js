const botaoLer = document.querySelector("#ler"); // Seleciona o botão "ler"
const campoTexto = document.querySelector("#texto"); // Seleciona o campo de entrada de texto

botaoLer.disabled = true; // Desabilita o botão inicialmente

campoTexto.addEventListener("input", () => {
  botaoLer.disabled = campoTexto.value.trim() === "";
}); // Habilita o botão quando há texto no campo

botaoLer.addEventListener("click", () => {
  const texto = campoTexto.value; // Obtém o texto do campo de entrada
  const fala = new SpeechSynthesisUtterance(texto); // Cria uma nova instância de SpeechSynthesisUtterance com o texto
  fala.lang = "pt-BR"; // Define o idioma como português do Brasil
  speechSynthesis.speak(fala); // Inicia a leitura do texto
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Impede o comportamento padrão do Enter
        botaoLer.click(); // Simula o clique no botão "ler
    }
})