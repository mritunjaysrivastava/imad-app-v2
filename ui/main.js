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
var count = document.getElementById("like");

count.onclick =function () {
    //Create a request object
    var request = XMLHttpRequest();
    
    //capture the request
    request.onreadystatechange = function () {
      if(request.reasyState === XMLHttpRequest.DONE) {
          
          //action perfromed to respond or render a respond
          if(request.status === 200) {
              var res = request.respondText;
              var respond = document.getElementById("count_like");
              respond.innerHTML = "vhgj";
          }
      }
    };
    
    //Make a request
    request.open("GET", "http://mritunjaysri.imad.hausra-app.io/counter", true);
    request.send(null);
};