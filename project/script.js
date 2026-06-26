// ====== 轮播图功能 ======
const slides = document.querySelectorAll('.carousel-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let timer = null;

// 切换到指定索引的幻灯片
function goToSlide(index) {
    // 边界处理：循环
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;

    // 移除所有 active
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    // 添加 active
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentIndex = index;
}

// 下一张
function nextSlide() {
    goToSlide(currentIndex + 1);
}

// 点击小圆点跳转
dots.forEach(dot => {
    dot.addEventListener('click', function() {
        const index = parseInt(this.dataset.index);
        goToSlide(index);
        resetTimer(); // 手动切换后重置计时器
    });
});

// 重置计时器
function resetTimer() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    timer = setInterval(nextSlide, 3000); // 每3秒切换一次
}

// 启动自动轮播
resetTimer();

// ====== 导航栏高亮 ======
const navLinks = document.querySelectorAll('.nav-menu a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});