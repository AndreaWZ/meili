let heartIcon = document.querySelectorAll("i#heartIcon");

init();

function init(){
    heart();
}

function heart(){
    for(let i = 0; i < heartIcon.length; i++){
        heartIcon[i].addEventListener("click", function(){
            heartIcon[i].classList.toggle("far");
            heartIcon[i].classList.toggle("fas");  
        })
    }
}