window.onload= () =>{
    let inputs = document.getElementsByClassName("input");
    for(let i = 0; i < inputs.length; ++i){
        inputs[i].getElementsByTagName("input")[0].onfocus = () =>{
            if(inputs[i].getElementsByClassName("warning red")[0] != null){
                inputs[i].removeChild(inputs[i].getElementsByClassName("warning red")[0]);
                inputs[i].getElementsByTagName("input")[0].classList.remove("red-border");
            }
            if(i == 0){
                inputs[i].getElementsByTagName("input")[0].placeholder="First Name";
            }
            else if(i == 1){
                inputs[i].getElementsByTagName("input")[0].placeholder="Last Name";
            }
            else if(i == 2){
                inputs[i].getElementsByTagName("input")[0].placeholder="Email Address";
                inputs[i].getElementsByTagName("input")[0].classList.remove("red-placeholder");
            }
            else if(i == 3){
                inputs[i].getElementsByTagName("input")[0].placeholder="Password";
            }
        }


    }
}

function checkFirstName(){
    let firstName = document.getElementsByName("first-name")[0].value;
    let isCorrect = true;
    let firstWarning = document.getElementsByClassName("input")[0].getElementsByClassName("warning")[0];
    if(firstWarning!=null){
        isCorrect = false;
    }
    if(firstWarning == null  && (firstName == null || firstName.trim() == "")){
        let warning = document.createElement("p");
        warning.classList.add("warning", "red");
        warning.innerHTML = "First Name cannot be empty";
        document.getElementsByTagName("input")[0].placeholder = "";
        document.getElementsByTagName("input")[0].classList.add("red-border");
        let icon = document.createElement("img");
        icon.src = "images/icon-error.svg";
        icon.classList.add("icon");
        document.getElementsByClassName("input")[0].appendChild(warning).appendChild(icon);
        isCorrect = false;
    }
    checkLastName(isCorrect);
}
function checkLastName(isCorrect){
    let lastName = document.getElementsByName("last-name")[0].value;
    let secondWarning = document.getElementsByClassName("input")[1].getElementsByClassName("warning")[0];
    if(secondWarning == null  && (lastName == null || lastName.trim() == "")){
        let warning = document.createElement("p");
        warning.classList.add("warning", "red");
        warning.innerHTML = "Last Name cannot be empty";
        document.getElementsByTagName("input")[1].classList.add("red-border");
        document.getElementsByTagName("input")[1].placeholder = "";
        let icon = document.createElement("img");
        icon.src = "images/icon-error.svg";
        icon.classList.add("icon");
        document.getElementsByClassName("input")[1].appendChild(warning).appendChild(icon);
        isCorrect = false;
    }
    checkEmail(isCorrect);
}
function checkEmail(isCorrect){
    let email = document.getElementsByName("email")[0].value;
    let thirdWarning = document.getElementsByClassName("input")[2].getElementsByClassName("warning")[0];
    if((thirdWarning == null  && (email == null || email.trim() == "" || email.match(/[\w.]+@{1}[\w.]+/) == null))){
        let warning = document.createElement("p");
        warning.classList.add("warning", "red");
        warning.innerHTML = "Looks like this is not an email";
        document.getElementsByTagName("input")[2].placeholder = "email@example/com"
        document.getElementsByTagName("input")[2].classList.add("red-border", "red-placeholder");
        let icon = document.createElement("img");
        icon.src = "images/icon-error.svg";
        icon.classList.add("icon");
        document.getElementsByClassName("input")[2].appendChild(warning).appendChild(icon);
        isCorrect = false;
    }
    else if(thirdWarning != null && email.match(/[\w.]+@{1}[\w.]+/) == null) isCorrect = false;
    checkPassword(isCorrect);

}
function checkPassword(isCorrect){
    let password = document.getElementsByName("password")[0].value;
    let fourthWarning = document.getElementsByClassName("input")[3].getElementsByClassName("warning")[0];
    if(fourthWarning == null  && (password == null || password.trim() == "")){
        let warning = document.createElement("p");
        warning.classList.add("warning", "red");
        warning.innerHTML = "Password cannot be empty";
        document.getElementsByTagName("input")[3].placeholder="";
        document.getElementsByTagName("input")[3].classList.add("red-border");
        let icon = document.createElement("img");
        icon.src = "images/icon-error.svg";
        icon.classList.add("icon");
        document.getElementsByClassName("input")[3].appendChild(warning).appendChild(icon);
        isCorrect = false;
    }
    if(isCorrect){
        document.getElementById("form-1").submit();
    }
}
