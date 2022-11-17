window.toggleExpand = function (element) {
    if (!element.style.height || element.style.height == '0px') {
        element.style.height = Array.prototype.reduce.call(element.childNodes, function (p, c) { return p + (c.offsetHeight || 0); }, 0) + 'px';
    } else {
        element.style.height = '0px';
    }
}

function handleFaq() {
    this.classList.toggle("active")
    toggleExpand(this.querySelector(".faq-text"))
}

const faqContainers = document.querySelectorAll(".faq-container")

faqContainers.forEach((b)=>{
    b.addEventListener("click",handleFaq)
})
const faqSection = document.getElementById("section-faq")