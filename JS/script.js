// 'use strict'

let burgerBtn = document.getElementById("mobile-btn");
let header = document.getElementById("header")
let main = document.getElementById("main")
let footer = document.getElementById("footer")
let brgMenuParent = document.body;
let brgMenu = document.getElementById("brg-menu");
let menuOn = false;


header.style.transition = "0.2s ease-in-out"
main.style.transition = "0.2s ease-in-out"
footer.style.transition = "0.2s ease-in-out"

burgerBtn.style.position = "fixed";
burgerBtn.style.top = "20px";


document.addEventListener("click", e => {
    if (e.target.id != "brg-menu" && menuOn && e.target.id != "mob") {
        header.style.filter = "brightness(100%)"
        main.style.filter = "brightness(100%)"
        footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        menuOn = false;
        burgerBtn.style.position = "fixed";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        header.style.filter = "brightness(100%)"
        main.style.filter = "brightness(100%)"
        footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        menuOn = false;
        burgerBtn.style.position = "fixed";
    }
})

burgerBtn.addEventListener("click", function() {
    burgerBtn.style.position = "fixed";
    header.style.filter = "brightness(50%)"
    main.style.filter = "brightness(50%)"
    footer.style.filter = "brightness(50%)"
    brgMenu.style.right = "0px";
    menuOn = true;
})


