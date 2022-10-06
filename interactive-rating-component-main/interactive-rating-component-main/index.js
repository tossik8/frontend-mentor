let current, currentLabel, prevChoice, prevLabel;
window.onload = function(){
    if(document.getElementById("form"))
        document.getElementById("form").addEventListener("submit", (e) =>{
            const formData = new FormData(e.target);
            const formProps = Object.fromEntries(formData);
            let rate = formProps.rating;
            localStorage.setItem("rating", rate);
            console.log(localStorage.getItem("rating"));
    });
    let circles = document.querySelectorAll(".effects");
    for(let circle of circles){

        circle.addEventListener("click", () =>{
            document.getElementsByTagName("button")[0].removeAttribute("disabled");
            document.getElementById("option-" + circle.getElementsByTagName("label")[0].innerHTML).checked = true;
            if(current !== undefined && circle !== current){
                current.style.background="hsl(216, 12%, 54%)";
                if(prevChoice) prevChoice.style.background="hsl(216, 12%, 8%)";
                prevChoice = current;
            }
            circle.style.background="hsl(25, 97%, 53%)";
            current = circle;

            if(currentLabel !== undefined && currentLabel !== circle.getElementsByTagName("label")[0]){
                currentLabel.style.color = "hsl(0, 0%, 100%)";
                if(prevLabel){
                    prevLabel.style.color = "hsl(217, 12%, 63%)";
                    prevLabel.style.fontWeight = "400";
                }
                prevLabel = currentLabel;
            }
            circle.getElementsByTagName("label")[0].style.color = "hsl(0, 0%, 100%)";
            circle.getElementsByTagName("label")[0].style.fontWeight = "700";
            currentLabel = circle.getElementsByTagName("label")[0];

        });


    }
    if(document.getElementsByTagName("button")[0])
        document.getElementsByTagName("button")[0].setAttribute("disabled", "disabled");
}
