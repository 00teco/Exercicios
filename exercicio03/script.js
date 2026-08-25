const mensagem = document.querySelector("#mensagem");
 
document.querySelector("#aumentar").addEventListener("click", () => {
    mensagem.style.fontSize = "30px";
});
 
document.querySelector("#mudarFonte").addEventListener("click", () => {
    mensagem.style.fontFamily = "Courier New, monospace";
});
 
document.querySelector("#negrito").addEventListener("click", () => {
    mensagem.style.fontWeight = "bold";
});
