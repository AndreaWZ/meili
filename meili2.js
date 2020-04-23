window.onload = function(){
    numItems();
};

function numItems(){
    const selected = document.getElementsByClassName("selected");
    const price = document.getElementsByClassName("priceNum");
    const subTotal = document.getElementsByClassName("subTotal");
    // console.log(subTotal);
    for(let i = 0; i < selected.length; i++){
        // console.log(selected[i].textContent);
        selected[i].addEventListener("click", function(){
            // if()
            // if(selected[i].textContent === 1){

            // }
            // subTotal.textContent = selected[i].textContent * price[i].textContent;
            // console.log("result: " + selected[i].textContent * price[i].textContent);
            console.log(selected[i].value);
        })
        // console.log(selected[i]);
    };
    for(let i =0; i < price.length; i++){
        // console.log(price[i].textContent);
    }
    for(let i = 0; i < subTotal.length; i++){
        // console.log(subTotal[i].textContent);
    }
};