// 初始化Swiper轮播
const swiper = new Swiper('.swiper', {
    // 循环模式
    loop: true,
    
    // 自动播放
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // 分页器
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    
    // 导航按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // 渐变效果
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    }
}); 