// Slider Fonksiyonalitesi
class Slider {
    constructor() {
        this.slider = document.querySelector('.slides-wrapper');
        this.slides = document.querySelectorAll('.slide');
        this.currentSlide = 0;
        this.slideCount = this.slides.length;
        
        this.init();
    }
    
    init() {
        // 4 saniye aralıkla otomatik geçiş
        this.autoSlide = setInterval(() => this.nextSlide(), 3000);
        
        // Mouse hover durumunda otomatik geçişi durdur
        this.slider.addEventListener('mouseenter', () => {
            clearInterval(this.autoSlide);
        });
        
        this.slider.addEventListener('mouseleave', () => {
            this.autoSlide = setInterval(() => this.nextSlide(), 3000);
        });
    }
    
    goToSlide(index) {
        // Slider'ı kaydır
        this.slider.style.transform = `translateX(-${index * 100}%)`;
        this.currentSlide = index;
    }
    
    nextSlide() {
        const next = (this.currentSlide + 1) % this.slideCount;
        this.goToSlide(next);
    }
}

// Slider'ı başlat
document.addEventListener('DOMContentLoaded', () => {
    new Slider();
}); 