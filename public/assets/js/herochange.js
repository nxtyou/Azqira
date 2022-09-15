const heroText = document.getElementById("hero-text")
function heroChange() {
    let nextSpan = document.querySelector("#hero-text .opacity-100")
    heroText.style.width = `${nextSpan.offsetWidth}px`
    setTimeout(() => {
        nextSpan.classList.remove("opacity-100")
        if (nextSpan.nextElementSibling.innerText != "") {
            nextSpan.nextElementSibling.classList.add("opacity-100")
        } else {
            heroText.firstElementChild.classList.add("opacity-100")
        }
    }, 3250)
    setTimeout(() => {
        heroText.style.width = "0px"
    }, 2500)
}
heroChange()
setInterval(heroChange, 3650)