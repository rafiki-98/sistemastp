// Función para cambiar el color del slogan cada 3 segundos
function changeSloganColor() {
    const slogan = document.querySelector('.slogan');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#f7b731'];
    let colorIndex = 0;

    setInterval(() => {
        slogan.style.color = colors[colorIndex];
        colorIndex = (colorIndex + 1) % colors.length;
    }, 3000);
}



// Función para añadir un efecto hover a las tarjetas
function addCardHoverEffect() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'scale(1.05)';
            card.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'scale(1)';
        });
    });
}

// Función para inicializar todas las funcionalidades
function initializeWebsite() {
    changeSloganColor();
    addCardHoverEffect();
}

// Ejecutar la función de inicialización cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', initializeWebsite);