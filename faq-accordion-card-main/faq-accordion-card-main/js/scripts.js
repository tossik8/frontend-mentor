window.onload = () =>{
    let questions = document.getElementsByClassName("question");
    let active = null;
    for(let question of questions){
        question.addEventListener("click", () =>{
            if(active != null && question == active[0]){
                removeAnswer(active);
                active = null;
            }
            else if(active == null || question != active[0]){
                if(active != null){
                    removeAnswer(active);
                }
                question.classList.add("bold");
                let text = document.createElement("p");
                text.classList.add("answer");
                if(question.getAttribute("id") == 1){
                    text.innerHTML = "You can invite up to 2 additional users on the Free plan. There is no limit on \nteam members for the premium plan."
                    active = addAnswer(0, question,text,active);
                }
                else if(question.getAttribute("id") == 2){
                    text.innerHTML = "No more than 2GB. All files in your account must fit your allotted storage space.";
                    active = addAnswer(1, question,text, active);
                }
                else if(question.getAttribute("id") == 3){
                    text.innerHTML = "Click “Forgot password” from the login page or “Change password” from your profile page. \nA reset link will be emailed to you.";
                    active = addAnswer(2, question,text, active);
                }
                else if(question.getAttribute("id") == 4){
                    text.innerHTML = "Yes! Send us a message and we’ll process your request no questions asked.";
                    active = addAnswer(3,question,text, active);
                }
                else if(question.getAttribute("id") == 5){
                    text.innerHTML = "Chat and email support is available 24/7. Phone lines are open during normal business hours.";
                    active = addAnswer(4,question,text, active);
                }
            }
        });
    }
}

function removeAnswer(active){
    active[0].classList.remove("bold");
    active[2].classList.remove("rotate-img");
    active[3].removeChild(active[1]);
}

function addAnswer(id,question, text, active){
    let hr = document.getElementsByTagName("article")[id].getElementsByTagName("hr")[0];
    document.getElementsByTagName("article")[id].insertBefore( text,  hr);
    let img = document.getElementsByTagName("article")[id].getElementsByTagName("img")[0];
    img.classList.add("rotate-img");
    active = [question, text, img, document.getElementsByTagName("article")[id]];
    return active;
}
