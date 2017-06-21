var stor = -1;
var maxstor = 3;
var timeout = 3500;

function autorot() {
	showNext();
	timeout = setTimeout('autorot();', timeout);
}

function rotateDiv(stor){
  var divs = document.getElementById("storyContainer").getElementsByTagName("div");
  for (var i=0; i < divs.length; i++ ) {
    var div = divs[i];
    if ( (div.id != "")) {
	if(i != stor){
        	div.style.display = "none";
	}
	else{
		div.style.display = "block";
	}
    }
  }
}



function rotateDiv(stor){
  var divs = document.getElementById("storyContainer").getElementsByTagName("div");
  for (var i=0; i < divs.length; i++ ) {
    var div = divs[i];
    if ( (div.id != "")) {
	if(i != stor){
        	div.style.display = "none";
	}
	else{
		div.style.display = "block";
	}
    }
  }
  
    var spans = document.getElementById("nav").getElementsByTagName("span");
  for (var i=0; i < spans.length; i++ ) {
    var span = spans[i];
    if ( (span.id != "")) {
	if(i != stor)
        	span.className = "none";
	else
		span.className = "selStory";
    }
  }
}
