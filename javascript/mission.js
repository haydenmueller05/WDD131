let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        //Changes page to black
        const bodyElement = document.body;
        bodyElement.style.backgroundColor = "#333131";
        //Changes list to white
        const firstListItem = document.querySelector("#listid")
        firstListItem.style.color = "white";
        //Changes header to white
        document.querySelector("h1").style.color = "white";
        //Changes paragraph to white
        document.querySelector("p").style.color = "white";
        //Changes paragraph with italic to white
        document.querySelector(".italic").style.color = "white";
        //Changes image to white version
        const imageElement = document.getElementById("byuilogo");
        imageElement.src = "../images/byui-white.png";   
    } else {
        //Changes page back to white
        const bodyElement = document.body;
        bodyElement.style.backgroundColor = "white";
        // Changes list back to black
        const firstListItem = document.querySelector("#listid")
        firstListItem.style.color = "black";
        //Changes header to black
        document.querySelector("h1").style.color = "black";
        //Changes paragraph to black
        document.querySelector("p").style.color = "black";
        //Changes paragraph with italic to black
        document.querySelector(".italic").style.color = "black";
        //Changes image back to blue version
        const imageElement = document.getElementById("byuilogo");
        imageElement.src = "../images/byui-blue.png";  
    }
}           
