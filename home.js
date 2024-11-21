function toggleInfo(icon) {
    const span = icon.nextElementSibling;
    span.style.display = span.style.display === 'inline' ? 'none' : 'inline';
}

function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
}

/*function convertCurrency() {
    const currency = document.getElementById('currency').value;
    const priceElement = document.getElementById('price');
    let price = 1000; // USD price

    if (currency === 'NGN') {
        price = price * 410; // Example conversion rate
        priceElement.innerText = `Price: ₦${price}`;
    } else {
        priceElement.innerText = `Price: $1000`;
    }
}*/
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


const slides = [
    {
        image: 'https://img.freepik.com/premium-photo/high-angle-view-townscape-against-sky_1048944-17471351.jpg?ga=GA1.1.1730539877.1725887093&semt=ais_hybrid',
        title: 'Rent smart,live happily',
        text: 'Secure your dream home with our trusted rental process'
    },
    {
        image: 'https://img.freepik.com/free-photo/bird-s-eye-view-shanghai_1127-3941.jpg?t=st=1730898787~exp=1730902387~hmac=6d26f3e25e594051103275b9fc5bd41b730886cd9b299dbd9fc26cd7d9711d31&w=900',
        title: 'Rent with ease, live with peace',
        text: 'Experience the peace of mind that comes with verified listing'
    }
];

let currentSlide = 0;

function showSlide(index) {
    const background = document.getElementById('background');
    const content = document.getElementById('content');
    content.style.opacity = 0;
    setTimeout(() => {
        background.style.backgroundImage = `url(${slides[index].image})`;
        content.querySelector('h1').innerText = slides[index].title;
        content.querySelector('p').innerText = slides[index].text;
        content.style.opacity = 1;
    }, 500);
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

window.addEventListener('resize', () => {
    const background = document.getElementById('background');
    background.style.height = `${window.innerHeight}px`;
});

document.addEventListener('DOMContentLoaded', () => {
    const background = document.getElementById('background');
    background.style.height = `${window.innerHeight}px`;
});