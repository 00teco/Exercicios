function reiniciarPainel() {
    projeto = "Projeto Front-End";
    pontos = 0;
 
    document.getElementById("nomeProjeto").value = "";
    document.getElementById("pontosAdicionar").value = "";
    document.getElementById("mensagem").innerText =
        "Preencha os campos para testar as variáveis.";
    document.getElementById("mensagem").style.color = "#52606d";
 
    mostrarValores();
    document.getElementById("nomeProjeto").focus();
}
 
mostrarValores();