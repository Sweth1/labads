// Инициализация анимации для текста в hero-секции
document.addEventListener('DOMContentLoaded', function() {
    const typingContainer = document.querySelector('.typing-container');
    const typingTexts = document.querySelectorAll('.typing-text');
    
    // Установка начального состояния
    typingTexts.forEach((text, index) => {
        if (index === 0) {
            text.style.opacity = '1';
            text.style.transform = 'translateY(0)';
        }
    });
    
    // Обновление анимации каждые 3 секунды
    setInterval(() => {
        const currentActive = Array.from(typingTexts).findIndex(
            text => text.style.opacity === '1'
        );
        
        const nextIndex = (currentActive + 1) % typingTexts.length;
        
        // Анимация исчезновения текущего текста
        typingTexts[currentActive].style.opacity = '0';
        typingTexts[currentActive].style.transform = 'translateY(-100%)';
        
        // Анимация появления следующего текста
        typingTexts[nextIndex].style.opacity = '1';
        typingTexts[nextIndex].style.transform = 'translateY(0)';
        
    }, 3000);
});

// Плавная прокрутка для навигационных ссылок
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 100,
            behavior: 'smooth'
        });
    });
});