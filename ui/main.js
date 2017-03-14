console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL";

//count like
var button = document.getElementById("counter");
var counter = 0;

button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};


//move text
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight () {
    if(marginLeft<660){
        marginLeft = marginLeft + 5;
        img.style.marginLeft = marginLeft + 'px';
    }
    else {
        marginLeft = 100;
    }
} 

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    console.log('done');
}; 