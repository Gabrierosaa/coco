// script.js

document.getElementById('botao1').addEventListener('click', () => {
    // Criar confetes caindo
    for (let i = 0; i < 100; i++) {
        criarConfete();
    }
});

document.getElementById('botao2').addEventListener('click', () => {
    // Mudar a tela para erro (vermelho piscando)
    document.body.style.backgroundColor = 'red';
    document.body.style.animation = 'flicker 0.5s infinite';
    document.getElementById('erro').style.display = 'block';
});

function criarConfete() {
    const confete = document.createElement('div');
    confete.classList.add('confete');
    confete.style.width = `${Math.random() * 10 + 5}px`;  // Largura aleatória do confete
    confete.style.height = `${Math.random() * 10 + 5}px`; // Altura aleatória
    confete.style.backgroundColor = gerarCorAleatoria();
    confete.style.left = `${Math.random() * 100}vw`;  // Posição horizontal aleatória
    document.body.appendChild(confete);
}

// Função para gerar uma cor aleatória
function gerarCorAleatoria() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
