(function () {
    new WOW().init();

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
        "(min-width: 1024px)": function () {
            const timelinePhone = gsap.timeline();
            timelinePhone
                // .to(".phone-animation", {
                //     // x: window.innerWidth / 2.5,
                //     // xPercent: 50,
                //     x: window.innerWidth/2, xPercent: -50
                // })
                // .to(
                //     "#text-animation",
                //     {
                //         y: -window.innerHeight,
                //     },
                //     "<"
                // )
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


const heroText = document.getElementById("hero-text")
function heroChange() {
    let nextSpan = document.querySelector("#hero-text .opacity-100")
    console.log(nextSpan.offsetWidth)
    heroText.style.width = `${nextSpan.offsetWidth}px`
    setTimeout(()=>{
        nextSpan.classList.remove("opacity-100")
        if (nextSpan.nextElementSibling.innerText != "") {
                nextSpan.nextElementSibling.classList.add("opacity-100")
        } else {
            heroText.firstElementChild.classList.add("opacity-100")
        }
    },3250)
    setTimeout(()=>{
        heroText.style.width = "0px"
    },2500)
}
heroChange()
setInterval(heroChange, 3650)