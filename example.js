window.onload = function() {
    const itemsDiv = document.getElementById('items');
    const earrings = []; // creates an empty array

    // Hard-coding all of the image URLs into an array
    for(let i = 1; i <= 13; i++) {
        if(i === 4) continue; // skips "earrings4.jpg"

        let object = {};
        object['url'] = "pictures/earrings" + i + ".jpg";   // Now you can access each url by object.url
        earrings.push(object);  // Adding each object in the array
    }

    // In theory you don't have to hard-code your image URLs. It should come from a database.


    //Iterate through all of the elements in "earrings"
    for(let i = 0; i < earrings.length; i++) {
        const div = document.createElement("div");  // creates a div
        const img = document.createElement("img");  // create an img 

        img.src = earrings[i].url;  // set the src to each URL
        div.appendChild(img);       // place each img in the new div
        itemsDiv.appendChild(div);  // place each div in the "items div" that we created in the html file
    }

    // In the 2nd for loop, we created 12 divs and imgs with url dynamically.
    console.log(earrings); 
}



// this is the structure we created in the html & js file
{/* <div id="items">
    <div>
        <img></img>
    </div>
</div> */}