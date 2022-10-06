window.onload = () =>{
    document.getElementsByTagName("form")[0].onsubmit=(event) =>{
        let inputDiv = document.getElementsByClassName("input")[0];
        let input = inputDiv.getElementsByTagName("input")[0];
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if((input.value == null || !input.value.match(regex) )&& !isWarningPresent()){
            let text = document.createElement("p");
            let icon = document.createElement("img");
            icon.classList.add("warning-icon");
            icon.src="images/icon-error.svg";
            input.classList.add("red-border");
            text.innerHTML = "Please provide a valid email";
            text.classList.add("warning-text");
            document.getElementsByTagName("form")[0].append(text);
            document.getElementsByTagName("form")[0].append(icon);
            event.preventDefault();
        }
        else if(input.value.match(regex)){
            document.getElementsByTagName("form")[0].submit();
        }
        else{
            event.preventDefault();
        }
    };
};
function isWarningPresent(){
    if(document.getElementsByClassName("warning-text")[0] != null) return true;
    return false;
}
