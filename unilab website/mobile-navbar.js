var mobile = window.matchMedia('(max-width: 375px)');

if(mobile.matches) {

    var hamburger = document.getElementById('hamburger');
    var navbar = document.getElementById('navbar');

    hamburger.addEventListener('click', (e) => {
        navbar.classList.toggle('active');
        console.log('clicked')
    })
}