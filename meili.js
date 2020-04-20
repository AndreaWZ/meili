window.onload = function(){
    shoppingDetails();
    loveIcon();
    shopIcon();
}

function shoppingDetails(){
    const contentsDiv = document.getElementById("contents");
    const earrings = [];

    for(let i = 1; i < 13; i++){
        let object = {};
        object["url"] = "pictures/earrings" + i + ".jpg";
        if(i === 1){
            object['title'] = "My Bell Love";
            object['value'] = "$20";
        } else if(i === 2){
            object['title'] = "My Floral";
            object['value'] = "$28";
        } else if(i === 3){
            object['title'] = "My Colors";
            object['value'] = "$25";
        } else if(i === 4){
            object['title'] = "My Florals";
            object['value'] = "$20";
        } else if(i === 5){
            object['title'] = "My Margarita";
            object['value'] = "$30";
        } else if(i === 6){
            object['title'] = "My Gala";
            object['value'] = "$22";
        } else if(i === 7){
            object['title'] = "My Mary";
            object['value'] = "$30";
        } else if(i === 8){
            object['title'] = "My Crazy Love";
            object['value'] = "$29";
        } else if(i === 9){
            object['title'] = "My Wheel of Love";
            object['value'] = "$35";
        } else if(i === 10){
            object['title'] = "My Brown Flower";
            object['value'] = "$38";
        } else if(i === 11){
            object['title'] = "My Little Star";
            object['value'] = "$20";
        } else if(i === 12){
            object['title'] = "My Double Love";
            object['value'] = "$23";
        }

        earrings.push(object);
    }
    for(let i = 0; i < earrings.length; i++){
        const div = document.createElement("div");
        const img = document.createElement("img");
        const details = document.createElement("div");
        const title = document.createElement("p");
        const value = document.createElement("p");
        const icons = document.createElement("div");
        const iconFav = document.createElement("i");
        const iconShop = document.createElement("i");

        img.src = earrings[i].url;
        title.textContent = earrings[i].title;
        value.textContent = earrings[i].value;

        contentsDiv.appendChild(div);
        div.appendChild(img);
        div.appendChild(details);
        div.appendChild(icons);
        details.appendChild(title);
        details.appendChild(value);
        icons.appendChild(iconFav);
        icons.appendChild(iconShop);

        div.classList.add("itemDetails");
        img.classList.add("images");
        details.classList.add("details");
        title.classList.add("p");
        icons.classList.add("icons");
        iconFav.classList.add("fa-heart");
        iconFav.classList.add("far");
        iconShop.classList.add("fa-cart-plus");
        iconShop.classList.add("fas");
    }
}

function loveIcon(){
    const favorite = document.getElementById("fullHeartIcon");
    const heartIcon = document.getElementsByClassName("fa-heart"+" far");
    const numH = document.getElementById("numHeart")
    const clicksH = [];
    let totalNumHearts = 0;
    for(let i = 0; i < heartIcon.length; i++){
        clicksH.push(false);
        heartIcon[i].addEventListener("click", function(){
            this.classList.toggle("far");
            this.classList.toggle("fas");
            if(clicksH[i] === false) {
                clicksH[i] = true;
                totalNumHearts++;
            } else {
                clicksH[i] = false;
                totalNumHearts--;
            } 
            console.log(clicksH);
            numH.textContent = totalNumHearts;
            if(numH.textContent >= 1){
                favorite.style.color = "red";
                numH.style.color = "black";
            } else {
                favorite.style.color = "white";
                numH.style.color = "white";
            }
        })
    }
}
function shopIcon(){
    const shop = document.getElementById("basketIcon");
    const basketIcon = document.getElementsByClassName("fa-cart-plus"+" fas");
    const numB = document.getElementById("numBasket");
    const clicksB = [];
    let totalNumBaskets = 0;
    for(let i = 0; i < basketIcon.length; i++){
        clicksB.push(false);
        basketIcon[i].addEventListener("click", function(){
            this.classList.toggle("fa-cart-plus");
            this.classList.toggle("fa-cart-arrow-down");
            if(clicksB[i] === false) {
                clicksB[i] = true;
                totalNumBaskets++;
            } else {
                clicksB[i] = false;
                totalNumBaskets--;
            } 
            console.log(clicksB);
            numB.textContent = totalNumBaskets;
            if(numB.textContent >= 1){
                shop.style.color = "blue";
                numB.style.color = "black";
            } else {
                shop.style.color = "white";
                numB.style.color = "white";
            }
        })
    }
}
