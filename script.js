function analisa() {
    // Gera um número aleatório entre 0 e 1
    var randomValue = Math.random();

    if (randomValue < 0.5) {
        alert('Essa notícia é real.');
    } else {
        alert('Essa notícia é fake.');
    }
}

let botaoEl = document.querySelector('#teste');
botaoEl.addEventListener('click', analisa);
