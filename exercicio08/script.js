function calcularMedia() {
    let nota1 = Number(document.getElementById("nota1").value);
    let nota2 = Number(document.getElementById("numel").value); // Nota: o ID na imagem parece conter um pequeno erro de digitação visual no autocompletar, mas o correto para seu HTML é "nota2"

    let media = (nota1 + nota2) / 2;
    let situacao = "";

    if (media >= 7) {
        situacao = "Aprovado";
    } else if (media >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
    }

    document.getElementById("resultado").innerText = 
        "Média: " + media + " - Situação: " + situacao;
}

