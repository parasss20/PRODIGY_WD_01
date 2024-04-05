window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgb(124, 116, 176)';
    } else {
        navbar.style.backgroundColor = '#37b8d1';
    }
});

const navLinks = document.querySelectorAll('.navbar ul li a');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.classList.add('active');
    });
    link.addEventListener('mouseleave', function() {
        this.classList.remove('active');
    });
});
