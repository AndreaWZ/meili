window.onload = function(){
    shoppingDetails();
    loveIcon();
    shopIcon();
    clickShopIcon();
    modalProducts();
    // favoriteIcon();
};

const earrings = [];
function shoppingDetails(){
    const contentsDiv = document.getElementById("contents");
    for(let i = 1; i < 13; i++){
        let object = {};
        object["url"] = "pictures/earrings" + i + ".jpg";
        if(i === 1){
            object['title'] = "Reb Bow";
            object['value'] = "$20";
            object['material'] = "Silver Split";
            object['color']= "Silver | Gold";
        } else if(i === 2){
            object['title'] = "My Floral";
            object['value'] = "$28";
            object['material'] = "Titanium";
            object['color']= "Gold";
        } else if(i === 3){
            object['title'] = "My Colors";
            object['value'] = "$25";
            object['material'] = "Titanium";
            object['color']= "Gold & Green";
        } else if(i === 4){
            object['title'] = "My Florals";
            object['value'] = "$28";
            object['material'] = "Titanium";
            object['color']= "Gold";
        } else if(i === 5){
            object['title'] = "My Margarita";
            object['value'] = "$30";
            object['material'] = "Titanium";
            object['color']= "Gold & Blue";
        } else if(i === 6){
            object['title'] = "My Gala";
            object['value'] = "$22";
            object['material'] = "Titanium";
            object['color']= "Gold";
        } else if(i === 7){
            object['title'] = "My Mary";
            object['value'] = "$30";
            object['material'] = "Gold | Silver";
            object['color']= "Gold | Silver";
        } else if(i === 8){
            object['title'] = "My Crazy Love";
            object['value'] = "$29";
            object['material'] = "Silver Split";
            object['color']= "Gold | Silver";
        } else if(i === 9){
            object['title'] = "My Wheel of Love";
            object['value'] = "$35";
            object['material'] = "Titanium";
            object['color']= "Gold | Silver";
        } else if(i === 10){
            object['title'] = "My Brown Flower";
            object['value'] = "$38";
            object['material'] = "Titanium";
            object['color']= "Gold";
        } else if(i === 11){
            object['title'] = "My Little Star";
            object['value'] = "$20";
            object['material'] = "Gold";
            object['color']= "Gold";
        } else if(i === 12){
            object['title'] = "My Double Love";
            object['value'] = "$23";
            object['material'] = "Titanium";
            object['color']= "Gold";
        }

        earrings.push(object);
    };
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
        title.classList.add("title");
        value.classList.add("value");
        icons.classList.add("icons");
        iconFav.classList.add("fa-heart");
        iconFav.classList.add("far");
        iconShop.classList.add("fa-cart-plus");
        iconShop.classList.add("fas");
    };
};

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
            numH.textContent = totalNumHearts;
            if(numH.textContent >= 1){
                favorite.style.color = "red";
                numH.style.color = "black";
            } else {
                favorite.style.color = "white";
                numH.style.color = "white";
            };
        }); 
        heartIcon[i].addEventListener("click", function(){
            console.log(this.parentElement.parentElement);
            // console.log("Clicked!!");
        })
    };
};
function shopIcon(){
    const shop = document.getElementById("basketIcon");
    const cartIcon = document.getElementsByClassName("fa-cart-plus"+" fas");
    const numBaskets = document.getElementById("numBasket");
    const clicksC = [];
    let totalNumCarts = 0;
    for(let i = 0; i < cartIcon.length; i++){
        clicksC.push(false);
        cartIcon[i].addEventListener("click", function(){
            this.classList.toggle("fa-cart-plus");
            this.classList.toggle("fa-cart-arrow-down");
            if(clicksC[i] === false) {
                clicksC[i] = true;
                totalNumCarts++;
            } else {
                clicksC[i] = false;
                totalNumCarts--;
            } 
            numBaskets.textContent = totalNumCarts;
            if(numBaskets.textContent >= 1){
                shop.style.color = "blue";
                numBaskets.style.color = "black";
            } else {
                shop.style.color = "white";
                numBaskets.style.color = "white";
            };
        });
        cartIcon[i].addEventListener("click", function(){
            // console.log(this.parentElement.parentElement);
            console.log("Clicked!!");
        })
    };
};
function clickShopIcon(){
    const shopIcon = document.getElementById("basketIcon");
    shopIcon.addEventListener("click", function(){
        window.document.location = './index2.html';
    });
};

// Modal's Products
function modalProducts(){
    const modal = document.getElementById("productModal")
    const modalImg = document.getElementById("img01");
    const prodName = document.getElementById("prodName");
    const prodPrice = document.getElementById("prodPrice");
    const prodMat = document.getElementById("prodMat");
    const prodColor = document.getElementById("prodColor");
    const picturesName = document.getElementsByClassName("title");
    const earringsPrice = document.getElementsByClassName("value");

    const img = document.getElementsByClassName("images");
    for(let i = 0; i < img.length; i++){
        img[i].addEventListener("click", function(){
            modal.style.display = "block";
            modalImg.src = img[i].src;
            prodName.innerHTML = picturesName[i].textContent;
            prodPrice.innerText = earringsPrice[i].textContent;
            prodMat.innerText = "Material: " + earrings[i].material;
            prodColor.innerText = "Color: " + earrings[i].color;
        });
    };
    const title = document.getElementsByClassName("title");
    for(let i = 0; i < title.length; i++){
        title[i].addEventListener("click", function(){
            modal.style.display = "block";
            modalImg.src = img[i].src;
            prodName.innerHTML = picturesName[i].textContent;
            prodPrice.innerText = earringsPrice[i].textContent;
            prodMat.innerText = "Material: " + earrings[i].material;
            prodColor.innerText = "Color: " + earrings[i].color;
        });
    };

    for(let i = 0; i <picturesName.length; i++){
    };
    for(let i = 0; i < earringsPrice.length; i++){
    };
    for(let i = 0; i < earrings.length; i++){
    };
    const span = document.getElementsByClassName("close")[0];
    span.addEventListener("click", function(){
        modal.style.display = "none";
    });  
};

// Modal's Favorite 
// function favoriteIcon(){
//     const favoriteModal = document.getElementById("favoriteModal");
//     const modalImg = document.getElementById("img1"); 
//     const img = document.getElementsByClassName("images");
//     const prodName = document.getElementById("prodName");
//     const picturesName = document.getElementsByClassName("title");
//     const favorite = document.getElementById("fullHeartIcon");
//     favorite.addEventListener("click", function(){
//         favoriteModal.style.display = "block";
//         modalImg.src = img[i].src;
//         prodName.innerHTML = picturesName[i].textContent;
//         console.log("Clicked!!");
//     });
//     for(let i = 0; i < img.length; i++){
//     };
//     const span = document.getElementsByClassName("close")[0];
//     span.addEventListener("click", function(){
//         modal.style.display = "none";
//     });  
// };