// 1. Swiper Gallery 초기화 (서브 비주얼)
const subSwiper = new Swiper(".subSwiper", {
    // Optional parameters
    effect: "coverflow", // 첨부 이미지와 유사한 3D 효과를 위해 coverflow 사용
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto", // 슬라이드 개수 자동 설정
    loop: true,
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    // Autoplay (선택 사항)
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    
    // PC에서 더 잘 보이도록 너비 설정
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});


// 2. ScrollReveal 애니메이션 초기화
window.sr = ScrollReveal();

// 각 섹션/요소에 애니메이션 적용
sr.reveal('.reveal-item', {
    duration: 1000, // 애니메이션 지속 시간 (밀리초)
    delay: 200, // 애니메이션 시작 지연 시간 (밀리초)
    origin: 'bottom', // 아래에서 시작
    distance: '50px', // 50px 아래에서 올라옴
    easing: 'ease-in-out',
    interval: 0, 
});

// 레이아웃 그리드 아이템 순차적 애니메이션 예시
sr.reveal('.layout-grid .grid-item', {
    duration: 800,
    delay: 100,
    origin: 'bottom',
    distance: '30px',
    interval: 100, // 아이템들이 순차적으로 나타남
});


// 3. 네비게이션 서브메뉴 제어 (CSS hover로 구현했으나, JS로도 가능)
// 이 부분은 메인 페이지의 JS와 동일하게 CSS hover 기반으로 동작합니다.
// 별도의 JS 로직은 추가하지 않았습니다.