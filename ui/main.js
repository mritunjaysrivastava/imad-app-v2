console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL!";

//move text
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight () {
    marginLeft = marginLeft + 5;
    img.style.marginLeft = marginLeft + 'px';
} 

img.onclick = function() {
    var interval = setIntervel(moveRight, 50);
}; 