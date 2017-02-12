console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL!";

//move text
var img = document.getElementById("madi");
img.onclick = function() {
    img.style.marginLeft='100px';
}; 