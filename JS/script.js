// toggle kelas active pada tombol hamburger
const navbarNav = document.querySelector('.navbar-nav');

// ketika tombol hamburger di klik
document.querySelector('#hamburger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
};

// klik di luar tombil hamburger
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
});