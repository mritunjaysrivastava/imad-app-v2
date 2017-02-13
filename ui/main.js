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
    var interval = setInterval(moveRight, 50);
}; 

//counter per click
var count = document.getElementById("counter");
var counter = 0;
function count() {
    counter = counter + 1;
    count.innerHTML = counter;
}


