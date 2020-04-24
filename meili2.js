window.onload = function(){
    // alert("It is a Demo!!!");
    shoppingDetails();
    // numItems();
    // onclickClose();
};

const earrings = [];
const selectValue = [];
function shoppingDetails(){
    const contentsDiv = document.getElementById("itemDetails");
    for(let i = 1; i <= 5; i++){
        let object = {};
        object["url"] = "pictures/earrings" + i + ".jpg";
        if(i === 1){
            object['title'] = "Reb Bow";
            object['value'] = "$20";
        } else if(i === 2){
            object['title'] = "My Floral";
            object['value'] = "$28";
        } else if(i === 3){
            object['title'] = "My Colors";
            object['value'] = "$25";
        } else if(i === 4){
            object['title'] = "My Florals";
            object['value'] = "$28";
        } else if(i === 5){
            object['title'] = "My Margarita";
            object['value'] = "$30";
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

        content.classList.add("content");
        div.classList.add("images");
        img.classList.add("img");
        descri.classList.add("descri")
        title.classList.add("title");
        titleName.classList.add("name");
    }
};
// function numItems(){
//     const selected = document.getElementById("selected");
//     const price = document.getElementsByClassName("priceNum");
//     const NumSubTotal = document.getElementById("subTotal");
//     let subTotal = 0;
//     NumSubTotal.textContent = price[0].textContent;
//     selected.addEventListener("change", function(){
//         subTotal = selected.value * price[0].textContent;
//         NumSubTotal.textContent = subTotal;
//     });
// };

// function onclickClose(){
//     const deleteIt = document.getElementsByClassName("fa-trash-alt");
//     deleteIt[0].addEventListener("click", function(){
//         console.log("Clicked!!");
//     });
// };