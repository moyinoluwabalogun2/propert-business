
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



document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.number');
    const speed = 200; // The lower the slower

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText;

            // Lower inc to slow and higher to slow
            const inc = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});