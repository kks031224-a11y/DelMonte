// 1. Swiper Gallery 초기화
const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    direction: "horizontal", // 가로 슬라이드
    loop: true, // 무한 루프

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    // Autoplay (선택 사항)
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },

    // Additional options for a "gallery" look
    effect: "slide", // 기본 슬라이드 효과
    speed: 800,
});


// 2. ScrollReveal 애니메이션 초기화
window.sr = ScrollReveal();

// 각 섹션/요소에 애니메이션 적용
// 'reveal-item' 클래스를 가진 요소들이 아래에서 스크롤되어 올라오는 애니메이션을 가집니다.
sr.reveal('.reveal-item', {
    duration: 1000, // 애니메이션 지속 시간 (밀리초)
    delay: 200, // 애니메이션 시작 지연 시간 (밀리초)
    origin: 'bottom', // 아래에서 시작
    distance: '50px', // 50px 아래에서 올라옴
    easing: 'ease-in-out',
    interval: 0, // 여러 요소에 순차적으로 적용할 때 간격
    // reset: true // 스크롤 업/다운 시 반복 (선택 사항)
});

// Trending Items 목록에 순차적 애니메이션 적용 예시
sr.reveal('.trending-item', {
    duration: 800,
    delay: 100,
    origin: 'bottom',
    distance: '30px',
    interval: 150, // 각 아이템이 150ms 간격으로 순차적으로 나타남
});


// 3. 네비게이션 서브메뉴 제어 (CSS hover로 구현했으나, JS로도 가능)
// CSS의 `:hover`로 충분히 구현 가능합니다.
// 여기서는 별도의 JS 로직은 추가하지 않았습니다.
/*
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        // 모든 서브메뉴 숨기기 (단, 현재는 CSS로 구현되어 있으므로 필요 없음)
        // item.querySelector('.sub-menu-wrap').style.opacity = '1';
        // item.querySelector('.sub-menu-wrap').style.visibility = 'visible';
    });
    item.addEventListener('mouseleave', () => {
        // item.querySelector('.sub-menu-wrap').style.opacity = '0';
        // item.querySelector('.sub-menu-wrap').style.visibility = 'hidden';
    });
});
*/