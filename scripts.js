// Função para rolar o carrossel pelas setas laterais
function scrollRedacoes(distance) {
    const carousel = document.getElementById('gridRedacoes');
    carousel.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}
