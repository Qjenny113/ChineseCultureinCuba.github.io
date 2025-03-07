// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    setTimeout(() => {
        heroContent.style.transition = 'opacity 1s ease-in';
        heroContent.style.opacity = '1';
    }, 100);
});

// 图片预加载
function preloadImages(images) {
    images.forEach(image => {
        const img = new Image();
        img.src = image;
    });
}

// 更多交互功能... 