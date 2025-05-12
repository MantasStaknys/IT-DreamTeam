'use strict';

// burger menu

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


document.addEventListener("click", e => {
    if (e.target.id != "brg-menu" && menuOn && e.target.id != "mob") {
        header.style.filter = "brightness(100%)"
        main.style.filter = "brightness(100%)"
        footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        menuOn = false;
        burgerBtn.style.display = "block";
    }
})

window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        header.style.filter = "brightness(100%)"
        main.style.filter = "brightness(100%)"
        footer.style.filter = "brightness(100%)"
        brgMenu.style.right = "-255px";
        menuOn = false;
        burgerBtn.style.display = "block";

    }
})

burgerBtn.addEventListener("click", function() {
    burgerBtn.style.display = "none";

    header.style.filter = "brightness(50%)"
    main.style.filter = "brightness(50%)"
    footer.style.filter = "brightness(50%)"
    brgMenu.style.right = "0px";
    menuOn = true;
})




// burger menu end


let krestik = document.getElementsByClassName('circle_div_another');
let circle = document.getElementsByClassName('circle_div');
let cardshow = document.getElementsByClassName('card-show');
let textshow = document.getElementsByClassName('text-show');
let maincontainer = document.getElementsByClassName('maincontainer_all');

let clickd = [true, true, true, true, true, true];

for(let i = 0; i < circle.length; i++){
    circle[i].addEventListener('mouseover', (e)=>{
        e.preventDefault();

        circle[i].style.fill = '#79C8C7';
        circle[i].style.cursor = 'pointer';

        krestik[i].style.cursor = 'pointer';

        if (clickd[i] == false){
            circle[i].style.fill = '#F67E7E';
        };
    });

    circle[i].addEventListener('mouseout', (e)=>{
        e.preventDefault();

        circle[i].style.fill = '#F67E7E';
        circle[i].style.cursor = 'pointer';

        krestik[i].style.cursor = 'pointer';

        if (clickd[i] == false){
            circle[i].style.fill = '#79C8C7';
        };
    });

    krestik[i].addEventListener('mouseover', (e)=>{
        e.preventDefault();

        circle[i].style.fill = '#79C8C7';
        circle[i].style.cursor = 'pointer';

        krestik[i].style.cursor = 'pointer';

        if (clickd[i] == false){
            circle[i].style.fill = '#F67E7E';
        };
    });

    krestik[i].addEventListener('mouseout', (e)=>{
        e.preventDefault();

        circle[i].style.fill = '#F67E7E';
        circle[i].style.cursor = 'pointer';

        krestik[i].style.cursor = 'pointer';

        if (clickd[i] == false){
            circle[i].style.fill = '#79C8C7';
        };
    });


    circle[i].addEventListener('click', (e)=>{
        e.preventDefault();
        if(clickd[i] == true){
            krestik[i].style.transform = 'rotate(45deg)';
            circle[i].style.fill = '#F67E7E';
            clickd[i] = false;  

            maincontainer[i].style.background = "#002529";
            maincontainer[i].style.transition = "0.5s ease-in-out";
            maincontainer[i].style.transform = "rotateY(180deg)";

            setTimeout(function() {
                textshow[i].style.display = "block";
                cardshow[i].style.display = "none";
            }, 250); 
        }
        else{
            krestik[i].style.transform = 'rotate(0deg)';
            circle[i].style.fill = '#79C8C7';
            clickd[i] = true;

            maincontainer[i].style.background = "#012F34";
            maincontainer[i].style.transform = "rotateY(0deg)";

            setTimeout(function() {
                cardshow[i].style.display = "block";
                textshow[i].style.display = "none";
            }, 250); 
        };
    });

    krestik[i].addEventListener('click', (e)=>{
        e.preventDefault();
        if(clickd[i] == true){
            krestik[i].style.transform = 'rotate(45deg)';
            circle[i].style.fill = '#F67E7E';
            clickd[i] = false;  

            maincontainer[i].style.background = "#002529";
            maincontainer[i].style.transition = "0.5s ease-in-out";
            maincontainer[i].style.transform = "rotateY(180deg)";

            setTimeout(function() {
                textshow[i].style.display = "block";
                cardshow[i].style.display = "none";
            }, 250); 
        }
        else{
            krestik[i].style.transform = 'rotate(0deg)';
            circle[i].style.fill = '#79C8C7';
            clickd[i] = true;

            maincontainer[i].style.background = "#012F34";
            maincontainer[i].style.transform = "rotateY(0deg)";

            setTimeout(function() {
                cardshow[i].style.display = "block";
                textshow[i].style.display = "none";
            }, 250); 
        };
    });
};