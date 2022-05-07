document.addEventListener('scroll', function(e) {
    var scroll = window.pageYOffset;
    if (scroll >= 1) {
        document.getElementsByClassName('menu-inner')[0].classList.add("menu-scrolled")
        document.getElementsByClassName('menu')[0].classList.add("menu-scroll-bg")
    } else {
        document.getElementsByClassName('menu-inner')[0].classList.remove("menu-scrolled")
        document.getElementsByClassName('menu')[0].classList.remove("menu-scroll-bg")
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}  

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}