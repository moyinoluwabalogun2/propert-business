
function openNav() {
    document.getElementById("mobileNav").style.transform = "translateX(0)";
    document.getElementById("mobileNav").style.display = "block";
}
function closeNav() {
    document.getElementById("mobileNav").style.transform = "translateX(-100%)";
    setTimeout(function() {
        document.getElementById("mobileNav").style.display = "none";
    }, 300);
}
function toggleInfo(icon) {
    const span = icon.nextElementSibling;
    span.style.display = span.style.display === 'inline' ? 'none' : 'inline';
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

let slideIndex = 0;
        const slides = document.querySelectorAll('.slides');

        function showSlides() {
            slides.forEach((slide, index) => {
                slide.style.display = 'none';
            });
            slideIndex++;
            if (slideIndex > slides.length) {
                slideIndex = 1;
            }
            slides[slideIndex - 1].style.display = 'block';
            setTimeout(showSlides, 3000); // Change image every 3 seconds
        }

        showSlides();