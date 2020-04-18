let heartIcon = document.querySelectorAll("i#heartIcon");
let shopIcon = document.querySelectorAll("i#shopIcon");
let numBasket = document.getElementById("numBasket");
let numFavo = document.getElementById("numFavorite");
let totalNumBas = 1;
let totalNumFav = 1;
// console.log(numFavo.textContent);

init();

function init(){
    shopIcons();
    heartIcons();
}
function shopIcons(){
    let customerChoose;
    console.log('shop')
    // for(let i = 0; i < shopIcon.length; i++){
    //     shopIcon[i].addEventListener("click", function(){
    //         shopIcon[i].classList.toggle("fa-cart-plus");
    //         shopIcon[i].classList.toggle("fa-cart-arrow-down");
    //         customerChoose = shopIcon[i].className;
    //         numBasket.textContent = totalNumBas;
    //         if(customerChoose === "fas fa-cart-arrow-down"){
    //             console.log(customerChoose);
    //             totalNumBas++;
    //         } else if(customerChoose === "fas fa-cart-plus"){
    //             console.log(customerChoose);
    //             totalNumBas--;
    //         }
    //     })
    // }
}
function heartIcons(){
    let customerFavo;
    for(let i = 0; i < heartIcon.length; i++){
        heartIcon[i].addEventListener("click", function(){
            heartIcon[i].classList.toggle("far");
            heartIcon[i].classList.toggle("fas"); 
            customerFavo = heartIcon[i].className;
            numFavo.textContent  = totalNumFav;
            if(customerFavo === "fa-heart fas"){
                totalNumFav++;
            }
        })
    }
}
