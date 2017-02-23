console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL";

//move text
var img = document.getElementById("madi");
var marginLeft=0;
function moveRight () {
    if(marginLeft<660){
        marginLeft = marginLeft + 5;
        img.style.marginLeft = marginLeft + 'px';
    }
    else {
        img.style.marginLeft = '100px';
        var interval = setInterval(moveRight, 50);
    }
} 

img.onclick = function() {
    var interval = setInterval(moveRight, 50);
    console.log('done');
}; 