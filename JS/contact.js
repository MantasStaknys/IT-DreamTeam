'use strict';


// forms
let form = document.forms[0];

let inputdede = document.getElementsByClassName('mememe')
let inputs = document.getElementsByClassName('formss')

let correct = 0;

form.addEventListener('submit', e=>{
    e.preventDefault();
    correct = 0;
    
    Array.from(inputs).forEach((e, er) => {
        if(e.value.trim().length == 0){
            e.style.borderColor = '#F67E7E';
            e.style.color = '#F67E7E';
            inputdede[er].style.display = 'block';

        }
        else{
            e.style.borderColor = '';
            e.style.color = '';
            inputdede[er].style.display = 'none';
        };
    });
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].style.borderColor == ''){
            correct++;
        }
    }
    if (correct == 5) {
        form.submit();
        alert("your message was sent to us! Tralaleilo Tralala");
        form.requestSubmit();
    }
});

Array.from(inputs).forEach((e, er) => {
    e.addEventListener('blur', () => {
        if (e.value.trim().length == 0) {
            e.style.borderColor = '#F67E7E';
            e.style.color = '#F67E7E';
            inputdede[er].style.display = 'block';
        } else {
            e.style.borderColor = '';
            e.style.color = '';
            inputdede[er].style.display = 'none';
        }
    });
});


// burger menu
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


