console.log('Loaded!');


//cahnge text of div
var element = document.getElementById("main-text");
element.innerHTML = "DEVIL";

//count like
var button = document.getElementById("lcounter");
var counter = 0;
button.onclick = function () {
    counter = counter + 1;
    var span = document.getElementById("lcount");
    span.innerHTML = counter.toString();
};

//count visit
var button = document.getElementById("counter");
button.onclick = function () {
    var request = new XMLHttpRequest();
    request.onreadystateChange = function () {
        if(request.readyState === XMLHttpRequest.DONE) {
            console.log('Loaded!');
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
    request.open('GET',"http://mritunjaysri.imad.hasura-app.io/counter",true);
    request.send(null);
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