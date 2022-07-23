(function () {
    var swiper1 = new Swiper(".mySwiper1", {
        effect: "cards",
        grabCursor: true,
        navigation: {
            nextEl: ".cards-button-next",
            prevEl: ".cards-button-prev",
        },
        initialSlide: 2,
        loop: true,
    });

    var swiper2 = new Swiper(".mySwiper2", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + "</span>";

                return `
                    <div class="text-xs font-medium relative cursor-pointer ${className} w-auto h-auto bg-inherit">
                        <svg class="w-8 h-8" viewBox="0 0 25 25" xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <circle cx="50%" cy="50%" class="fill-transparent" r="10" stroke="#E2E2E2" stroke-width="1px"></circle>
                            <circle cx="50%" cy="50%" fill="transparent" r="10" stroke="#24160B" stroke-dasharray="75" stroke-dashoffset="75" stroke-linecap="butt" stroke-width="1px"></circle>
                        </svg>
                        <span class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-silver-chalice">${index + 1}</span>
                    </div>
                `;
            },
        },
        navigation: {
            nextEl: ".cards-2-button-next",
            prevEl: ".cards-2-button-prev",
        },
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
    });

    const breakpoint = window.matchMedia("(min-width:768px)");

    var swiper3;

    const breakpointChecker = function () {
        if (breakpoint.matches === true) {
            if (swiper3 !== undefined) {
                swiper3.destroy(true, true);
            }

            return;
        } else if (breakpoint.matches === false) {
            return enableSwiper3();
        }
    };

    function enableSwiper3() {
        swiper3 = new Swiper(".mySwiper3", {
            navigation: {
                nextEl: ".cards-3-button-next",
                prevEl: ".cards-3-button-prev",
            },
            initialSlide: 1,
            loop: true,
        });
    }

    breakpoint.addListener(breakpointChecker);

    breakpointChecker();
})();
