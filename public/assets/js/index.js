(function () {
    new WOW().init();

    var swiper2 = new Swiper(".mySwiper2", {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + "</span>";

                return `
                    <div class="text-xs font-medium relative cursor-pointer ${className} w-auto h-auto bg-inherit h-[32px] rotating-bullet">
                    <svg xmlns="http://www.w3.org/2000/svg" id="asset-data__count__svg" version="1.1" width="32px" height="32px" class="opacity-0">
                        <circle cx="50%" cy="50%" fill="#f5f5f5" r="12" stroke="#E2E2E2" stroke-width="1px"></circle> 
                        <circle cx="50%" cy="50%" fill="transparent" r="12" stroke="#27D17F" stroke-dasharray="75" stroke-dashoffset="75" stroke-linecap="butt" stroke-width="1px"></circle>
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
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 32,
        clickable: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        },
        navigation: {
            nextEl: ".partner-button-next",
            prevEl: ".partner-button-prev",
        },
    });

    var swiper4 = new Swiper(".mySwiper4", {
        slidesPerView: 3,
        clickable: true,
        navigation: {
            nextEl: ".steps-button-next",
            prevEl: ".steps-button-prev",
        },
    });

    var buttons = ["Project Overview", "Personal Dashboard", "Blockchain"]

    var swiper5 = new Swiper(".mySwiper5", {
        slidesPerView: 1,
        clickable: true,
        pagination: {
            el: ".swiper-pagination-2",
            clickable: true,
            renderBullet: function (index, className) {
                // return '<span class="' + className + '">' + (index + 1) + "</span>";

                return `
                    <button class="text-center w-[9.5rem] bg-mine-shaft rounded-[1.25rem] ${className}">${buttons[index]}</button>
                `;
            },
            bulletClass: 'swiper-pagination-bullet-2',
            bulletActiveClass: 'bullet-active'
        },
    });

    var swiper6 = new Swiper(".mySwiper6", {
        slidesPerView: 1,
        clickable: true,
        breakpoints: {
            640: {
                slidesPerView: 2,
            },
        },
        navigation: {
            nextEl: ".video-button-next",
            prevEl: ".video-button-prev",
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

    // Scrolling animation
    gsap.registerPlugin(ScrollTrigger);
    ScrollTrigger.matchMedia({
        "(max-width: 1023px)": function() {
            const timelineGoals = gsap.timeline({
                scrollTrigger: {
                    trigger:".goal-trigger",
                    endTrigger: ".goal-endtrigger",
                    start: "top 30%", // when the top of the trigger hits the top of the viewport
                    end: "bottom 30%", // end after scrolling 500px beyond the start
                    scrub: true,
                }
            });
            timelineGoals.to(".goal-line", { height: "100%", ease: "linear"})
        },
        "(min-width: 1024px)": function () {
            const timelinePhone = gsap.timeline();
            timelinePhone
                .to("#circle-animation", { scale: 1 })
                .to(".img-left-primary-1", { x: -innerWidth / 3.2, y: -innerHeight / 3.2, scale: 1 }, "<")
                .to(".img-left-primary-2", { x: -innerWidth / 2.8, scale: 1 }, "<")
                .to(".img-left-primary-3", { x: -innerWidth / 3.2, y: innerHeight / 3.2, scale: 1 }, "<")
                .to(".img-right-primary-1", { x: innerWidth / 3.2, y: innerHeight / 3.2, scale: 1 }, "<")
                .to(".img-right-primary-2", { x: innerWidth / 2.8, scale: 1 }, "<")
                .to(".img-right-primary-3", { x: innerWidth / 3.2, y: -innerHeight / 3.2, scale: 1 }, "<");

            const controllerPhone = new ScrollMagic.Controller();
            const scenePhone = new ScrollMagic.Scene({
                triggerElement: "#feature-animation",
                duration: 2000,
                triggerHook: 0,
            })
                .setTween(timelinePhone)
                // .addIndicators()
                .setPin("#feature-animation")
                .addTo(controllerPhone);
        },
    });
})();

const featuredBtns = document.querySelectorAll("[data-button]")
const mockupContainer = document.querySelectorAll("[data-image]")

function reset_animation() {
    var el2 = document.querySelectorAll('img.fadeInLeft, img.fadeInRight');
    el2.forEach((el) => {
        el.style.animation = 'none';
        el.offsetHeight; /* trigger reflow */
        el.style.animation = null;
    })
}

function changeImages(handler) {
    reset_animation()
    document.querySelectorAll(`[${handler}]`).forEach((e) => {
        e.src = e.getAttribute(handler)
    })
    mockupContainer.forEach((e)=>e.setAttribute("data-image", handler))
}

featuredBtns.forEach((btn)=>{
    btn.addEventListener("click", () => {
        changeImages(btn.getAttribute("data-button"))
    })
})

function handleModalOpener() {

}

const modal = document.getElementById("modal")
document.getElementById("modal-close").addEventListener("click",()=>{modal.classList.add("hidden")})

const modalOpener = document.querySelectorAll("[data-modals]")

modalOpener.forEach((e)=>{
    e.addEventListener("click",()=>{
        modal.classList.remove("hidden")
        modal.setAttribute("data-modal",e.getAttribute("data-modals"))
    })
})

