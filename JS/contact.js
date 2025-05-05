let inputName = document.getElementById("inputName");
let inputEmail = document.getElementById("inputEmail");
let inputCompany = document.getElementById("inputCompany");
let inputTitle = document.getElementById("inputTitle");
let inputMessage = document.getElementById("inputMessage");
let inputSubmit = document.getElementById("inputSubmit");

let form = document.forms[0];

let inputs = [inputName, inputEmail, inputCompany, inputTitle, inputMessage]

form.addEventListener('submit', e=>{
    e.preventDefault();

    for(let i = 0; i < inputs.length; i++){
        if(inputs[0].value.length > 0 && inputs[1].value.length > 0 && inputs[2].value.length > 0 && inputs[3].value.length > 0 && inputs[4].value.length > 0){
            alert('your message is arrived to us!');
            inputs.forEach(input => {
                input.value = null
            
            });

            break;
        } 
        else{
            inputs.forEach(input => {
                    if(input.value.length == 0){
                        input.style.backgroundColor = "red";
                    };
                })
        };
    };
});