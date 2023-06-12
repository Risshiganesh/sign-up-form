
const password1 = document.querySelector("#password")

const password2 = document.querySelector("#c-password")

const button = document.querySelector("#sign-up-button")


function passwordVerify(){

    if(!password1.value || !password2.value){

        password1.classList.add("wrong-input");
        password2.classList.add("wrong-input");
        password1.classList.add("error");
        password2.classList.add("error");
        console.log(button.type);

        return;

    }else if (password1.value === password2.value){
        
        password1.classList.remove("wrong-input");
        password2.classList.remove("wrong-input");
        password1.classList.remove("main-error");
        password1.classList.remove("error");
        password2.classList.remove("error");
        console.log(button.type);
        
        return;
    }
    password1.classList.remove("wrong-input");
    password2.classList.remove("wrong-input");
    password1.classList.add("main-error");
    password1.classList.add("error");
    password2.classList.add("error");
    console.log(button.type);
}

function switchToSubmit(){
    if (password1.value === password2.value){
        password1.classList.add("match");
        password2.classList.add("match");
        button.type = "submit";
        return;
    }
    password1.classList.remove("match");
    password2.classList.remove("match");
    button.type = "button";
    
}

function submitCondition(){
    if(!password1.value || !password2.value){
        button.type = "submit";
        return;
    }else if (password1.value === password2.value){
        button.type = "submit";
        return;
    }
    button.type = "button";

}




password1.addEventListener('keyup', passwordVerify);


// To ensure the form does not submit unless the password values are equal
password1.addEventListener('keyup', switchToSubmit);


password2.addEventListener('keyup', passwordVerify);

// To ensure the form does not submit unless the password values are equal
password2.addEventListener('keyup', switchToSubmit);


button.addEventListener('click', passwordVerify);

button.addEventListener('click', submitCondition);


// Refactoring notes,
// Can reduce lines of code by using classes instead of IDs
