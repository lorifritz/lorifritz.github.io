var stor = -1;
var maxstor = 3;
var timeout = 3500;

$document.ready() {
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
}



