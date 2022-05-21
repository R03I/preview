document.addEventListener('scroll', function(e) {
    var scroll = window.pageYOffset;
    if (scroll >= 1) {
        document.getElementsByClassName('menu-inner')[0].classList.add("menu-scrolled")
        document.getElementsByClassName('menu')[0].classList.add("menu-scroll-bg")
        document.getElementsByClassName('icon-top-side')[0].style.width = "150px"
    } else {
        document.getElementsByClassName('menu-inner')[0].classList.remove("menu-scrolled")
        document.getElementsByClassName('menu')[0].classList.remove("menu-scroll-bg")
        document.getElementsByClassName('icon-top-side')[0].style.width = "200px"
    }
});

function openNav() {
    document.getElementById("myNav").style.width = "80%";
    document.getElementById("myNavBG").style.width = "100%";
}  

function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById("myNavBG").style.width = "0%";
}