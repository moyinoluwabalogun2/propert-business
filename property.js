
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





function filterProperties() {
    const location = document.getElementById('location').value.toLowerCase();
    const type = document.getElementById('type').value.toLowerCase();

    const properties = document.querySelectorAll('.property-card');
    let hasResults = false;

    properties.forEach(property => {
        const propertyLocation = property.querySelector('.location').textContent.toLowerCase();
        const propertyType = property.querySelector('.category').textContent.toLowerCase();

        if (propertyLocation.includes(location) && propertyType.includes(type)) {
            property.style.display = 'flex';
            hasResults = true;
        } else {
            property.style.display = 'none';
        }
    });

    const noResults = document.getElementById('noResults');
    if (hasResults) {
        noResults.style.display = 'none';
    } else {
        noResults.style.display = 'block';
    }
}

function refreshPage() {
    document.getElementById('location').value = '';
    document.getElementById('type').value = '';
    const properties = document.querySelectorAll('.property-card');
    properties.forEach(property => {
        property.style.display = 'flex';
    });
    document.getElementById('noResults').style.display = 'none';
}