window.onload = function(){
    alert("It is a Demo!!!");
    shoppingDetails();
    numItems();
    onclickClose();
};

const earrings = [];
const selectValue = [];
function shoppingDetails(){
    const contentsDiv = document.getElementById("itemDetails");
    for(let i = 1; i <= 3; i++){
        let object = {};
        object["url"] = "pictures/earrings" + i + ".jpg";
        if(i === 1){
            object['title'] = "Reb Bow";
            object['value'] = "10";
        } else if(i === 2){
            object['title'] = "My Floral";
            object['value'] = "10";
        } else if(i === 3){
            object['title'] = "My Colors";
            object['value'] = "10";
        } 
        earrings.push(object);
    };
    for(let i = 1; i < 6; i++){
        let select = {};
        select['value'] = i.toString();
        select['textContent'] = i.toString();
        selectValue.push(select);
    };
    for(let i = 0; i < earrings.length; i++){
        const content = document.createElement("div");
        const div = document.createElement("div");
        const img = document.createElement("img");
        const descri = document.createElement("div");
        const title = document.createElement("div");
        const titleName = document.createElement("p");
        const form = document.createElement("form");
        const select = document.createElement("select");
        const option1 = document.createElement("option");
        const option2 = document.createElement("option");
        const option3 = document.createElement("option");
        const option4 = document.createElement("option");
        const option5 = document.createElement("option");
        const p = document.createElement("p");
        const icon = document.createElement("i");
        const price = document.createElement("div");
        const numPrice = document.createElement("p");
        const span = document.createElement("span");

        img.src = earrings[i].url;
        titleName.textContent = earrings[i].title;
        option1.value = selectValue[0].value;
        option1.textContent = selectValue[0].textContent;
        option2.value = selectValue[1].value;
        option2.textContent = selectValue[1].textContent;
        option3.value = selectValue[2].value;
        option3.textContent = selectValue[2].textContent;
        option4.value = selectValue[3].value;
        option4.textContent = selectValue[3].textContent;
        option5.value = selectValue[4].value;
        option5.textContent = selectValue[4].textContent;
        p.textContent = "In Stock";
        numPrice.textContent = "CDN $";
        span.textContent = earrings[i].value;

        contentsDiv.appendChild(content);
        content.appendChild(div);
        div.appendChild(img);
        content.appendChild(descri);
        descri.appendChild(title);
        title.appendChild(titleName);
        title.appendChild(form);
        form.appendChild(select);
        select.appendChild(option1);
        select.appendChild(option2);
        select.appendChild(option3);
        select.appendChild(option4);
        select.appendChild(option5);
        descri.appendChild(p);
        descri.appendChild(icon);
        content.appendChild(price);
        price.appendChild(numPrice);
        numPrice.appendChild(span);

        content.classList.add("content");
        div.classList.add("images");
        img.classList.add("img");
        descri.classList.add("descri")
        title.classList.add("title");
        titleName.classList.add("name");
        p.classList.add("stock");
        select.classList.add("selected");
        icon.classList.add("fas");
        icon.classList.add("fa-trash-alt");
        price.classList.add("price");
        span.classList.add("priceNum");
    };
};
function numItems(){
    const selected = document.getElementsByClassName("selected");
    const price = document.getElementsByClassName("priceNum");
    const subTotal = document.getElementById("subTotal");
    let firP = Number(price[0].textContent);
    let secP = Number(price[1].textContent);
    let thiP = Number(price[2].textContent);
    subTotal.textContent = firP + secP + thiP;
    console.log(selected[0]);

    selected[0].addEventListener("change", function(){
        let sValue = selected[0].value;
        let eValue = earrings[0].value;
        price0 = sValue * eValue ;
        firP = price0;
        price[0].textContent = firP;
        subTotal.textContent = firP + secP + thiP;
    });
    selected[1].addEventListener("change", function(){
        let sValue = selected[1].value;
        let eValue = earrings[1].value;
        secP = sValue * eValue;
        price[1].textContent = secP;
        subTotal.textContent = firP + secP + thiP;
    });
    selected[2].addEventListener("change", function(){
        let sValue = selected[2].value;
        let eValue = earrings[2].value;
        thiP = sValue * eValue;
        price[2].textContent = thiP;
        subTotal.textContent = firP + secP + thiP;
    });
};
function onclickClose(){
    const deleteIt = document.getElementsByClassName("fa-trash-alt");
    deleteIt[0].addEventListener("click", function(){
        console.log("Clicked!!");
    });
};