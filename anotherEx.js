window.onload = function() {

    for(let i = 0; i < 5; i++) {
        const container = document.getElementById('container'); 
        const div = document.createElement('div');   
        
        div.innerHTML = `
            <div onclick='clickIcon(${i})'>
                <i class='fab fa-angellist fa-2x'></i>
            </div>`;                // I'm passing the index to determine which div was clicked.

        container.appendChild(div);
        clicks.push(false);         // I'm using false to determine if it's toggle on or off. 
    }   


}
const clicks = [];     // create array to keep track of the clicks.
let totalClicks = 0;

function clickIcon(index) {
    const activeDiv = document.getElementById('active');

    if(!clicks[index]) {        // same as: clicks[index] === false
        clicks[index] = true;
        totalClicks++;

    } else {
        clicks[index] = false;
        totalClicks--;
    }

    activeDiv.innerHTML = totalClicks;
    console.log(index);         // use console.log() to debug my code and learn it fully!
}


// You only need to fill the icons with colors! :)