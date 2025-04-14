'use strict';

let krestik = document.getElementsByClassName('circle_div_another');
let circle = document.getElementsByClassName('circle_div');
let maincontainer_all = document.getElementsByClassName("maincontainer_all");

let clickd = [true, true, true, true, true, true]

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

            // animation

            // maincontainer_all[i].
        }
        else{
            krestik[i].style.transform = 'rotate(0deg)';
            circle[i].style.fill = '#79C8C7';
            clickd[i] = true;
        };
    });

    krestik[i].addEventListener('click', (e)=>{
        e.preventDefault();
        if(clickd[i] == true){
            krestik[i].style.transform = 'rotate(45deg)';
            circle[i].style.fill = '#F67E7E';
            clickd[i] = false;  

            // animation

            // maincontainer_all[i].
        }
        else{
            krestik[i].style.transform = 'rotate(0deg)';
            circle[i].style.fill = '#79C8C7';
            clickd[i] = true;
        };
    });
};