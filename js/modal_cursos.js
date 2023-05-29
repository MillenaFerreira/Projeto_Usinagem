

document.getElementById("salvarBtn").addEventListener("click", () => {
    const nomeInput = document.getElementById("myInputNome");
    const siglaInput = document.getElementById("myInputSigla");
    const cargaHorariaInput = document.getElementById("myInputCargaHoraria");
    const inputFile = document.getElementById("myInputUrl");

    const nome = nomeInput.value;
    const sigla = siglaInput.value;
    const cargaHoraria = cargaHorariaInput.value;
    const file = inputFile.value;

    // Faça o que quiser com os valores dos inputs
    console.log("Nome: " + nome);
    console.log("Sigla: " + sigla);
    console.log("Carga Horária: " + cargaHoraria);
    console.log("Arquivo selecionado: ", file);
})

console.log(document.getElementById("salvarBtn"));