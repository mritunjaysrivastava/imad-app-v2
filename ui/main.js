console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL!";

//move text
var img = document.getElementById("madi");
var marginLeft=0;
function moverRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft=marginLeft + '5px';
} 

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
}; 