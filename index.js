//index.js
function toggleMenu() {
    const menu = document.querySelector(".nav-links");
    const burger = document.querySelector(".hamburger");
    
    menu.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
}

document.querySelector(".scroll-down").addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({ 
        behavior: "smooth" 
    });
});

const sections = document.querySelectorAll("section");
const dots = document.querySelectorAll(".dot");

function activateDot() {
    let scrollPosition = window.scrollY + window.innerHeight / 2;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            let sectionId = section.getAttribute("id");

            dots.forEach((dot) => {
                dot.classList.remove("active");
                if (dot.dataset.section === sectionId) {
                    dot.classList.add("active");
                }
            });
        }
    });
}

window.addEventListener("scroll", activateDot);
activateDot(); // Run once on load

document.addEventListener("DOMContentLoaded", function () {
    const text = "Building Intelligent Systems with AI.";
    let index = 0;
    function type() {
        if (index < text.length) {
            document.getElementById("typed-text").innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 100);
        }
    }
    type();
});