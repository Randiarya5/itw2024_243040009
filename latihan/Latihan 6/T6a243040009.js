const menutoggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

menutoggle.addEventListener('click', function (){
    nav.classList.toggle('slide');
});


// Navbar Toggle for Mobile View
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Logo Interaction
const logo = document.querySelector('.logo-img');
const nameText = document.querySelector('.logo h4');

logo.addEventListener('click', () => {
    alert('Anda mengklik logo Randi Arya Sentosa!');
});

nameText.addEventListener('click', () => {
    alert('Selamat datang di portofolio Randi Arya Sentosa!');
});


