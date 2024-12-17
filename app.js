

var header = document.querySelector("nav");
var links = header.getElementsByClassName("link");
for (var i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function() {
        var current = document.querySelector(".active");
        if (current) current.classList.remove("active");
        this.classList.add("active");
    });
}

/* Scrool animation */
document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeInElements.forEach(element => {
            const box = element.getBoundingClientRect();
            if (box.top < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});


document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.anim-text');

    const checkVisibility = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        fadeInElements.forEach(element => {
            const box = element.getBoundingClientRect();
            if (box.top < triggerBottom) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); 
});