let jogadorAtual = 'x';
let celulas = document.querySelectorAll('.celula');
let vencedor = null;
let resultadoCheckbox = document.getElementById('vencedor');
let resultadoText = document.getElementById('vencedor-text');

celulas.forEach((celula, indice) => {
    celula.addEventListener('click', () => {
        if (vencedor === null && celula.textContent === '') {
            celula.textContent = jogadorAtual;
            celula.classList.add(jogadorAtual);
            verificarVencedor();
            jogadorAtual = jogadorAtual === 'x' ? 'o' : 'x';
        }
    });
});

function verificarVencedor() {
    const combinacoesVencedoras = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < combinacoesVencedoras.length; i++) {
        const combinacao = combinacoesVencedoras[i];
        const celula1 = celulas[combinacao[0]].textContent;
        const celula2 = celulas[combinacao[1]].textContent;
        const celula3 = celulas[combinacao[2]].textContent;

        if (celula1 !== '' && celula1 === celula2 && celula1 === celula3) {
            vencedor = celula1;
            resultadoCheckbox.checked = true;
            resultadoText.textContent = `Jogador ${vencedor.toUpperCase()} venceu!`;   
            return;
        }
    }

    if (vencedor === null && Array.from(celulas).every(celula => celula.textContent !== '')) {
        resultadoCheckbox.checked = true;
        resultadoText.textContent = 'Não houve vencedor!';   
    }
}
