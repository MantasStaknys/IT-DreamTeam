
let form = document.forms[0];

let inputs = document.getElementsByClassName('formss')

let correct = 0;

form.addEventListener('submit', e=>{
    e.preventDefault();
    correct = 0;
    console.log(inputs)

    Array.from(inputs).forEach(e => {
        if(e.value.trim().length == 0){
            e.style.borderColor = '#F67E7E';
        }
        else{
            e.style.borderColor = '';
        };
    });
    for(let i = 0; i < inputs.length; i++){
        if(inputs[i].style.borderColor == ''){
            correct++;
        }
    }
    if (correct == 5) {
        alert("your message was sent to us! Tralaleilo Tralala");
    }
});