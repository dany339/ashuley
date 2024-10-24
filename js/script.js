$(function () {
    function handleMouseMove(e) {
        const cursor = document.querySelector(".cursor");
        const menuConSliderWrap = document.querySelector(".menu-con-slider-wrap");
        const eventList = document.querySelector(".event-list");

        // 커서의 위치를 window 기준 마우스 위치로 업데이트
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        cursor.style.left = `${mouseX}px`;
        cursor.style.top = `${mouseY}px`;

        // menu-con-slider-wrap과 event-list의 경계를 확인
        const menuRect = menuConSliderWrap.getBoundingClientRect();
        const eventRect = eventList.getBoundingClientRect();

        // 커서가 menu-con-slider-wrap 또는 event-list 영역 내부에 있는지 확인
        if (
            (mouseX >= menuRect.left &&
                mouseX <= menuRect.right &&
                mouseY >= menuRect.top &&
                mouseY <= menuRect.bottom) ||
            (mouseX >= eventRect.left &&
                mouseX <= eventRect.right &&
                mouseY >= eventRect.top &&
                mouseY <= eventRect.bottom)
        ) {
            cursor.style.opacity = "1"; // 영역 내부일 때 보이게
        } else {
            cursor.style.opacity = "0"; // 영역 외부일 때 숨기기
        }
    }

    // window에 이벤트 리스너 추가
    window.addEventListener("mousemove", handleMouseMove);

    // window에 이벤트 리스너 추가
    window.addEventListener("mousemove", handleMouseMove);

    // 썸네일 슬라이더를 먼저 정의
    const $menuConSlider = new Swiper(".menu-con-slider", {
        loop: true,
        slidesPerView: "auto",
        freeMode: true,
        watchSlidesProgress: true,
        autoplay: {
            delay: 5000,
        },
    });

    const $menuTxtSlider = new Swiper(".menu-txt-slider", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 5000,
        },

        thumbs: {
            swiper: $menuConSlider,
        },
    });

    // 기존 코드 아래에 다음을 추가합니다
    const eventSwiper = new Swiper(".event-swiper", {
        slidesPerView: 4.9,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 1000,
        },
    });

    const $input = $(".map-filter li input");
    $input.on("click", function () {
        $(this).toggleClass("on");
    });
});
