(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			
			this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			var currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( var i = 0; i < this.slides.length; i++ ) {
				var slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			var self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 4800);
		},
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		var slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();
var imageID=0;
function changeimage(every3seconds){
   var link = document.getElementById("mylink");
    
    if(!imageID){
        document.getElementById("myimage").src="http://i67.tinypic.com/4id0yu.jpg";
        link.setAttribute('href', "http://www.atlantamagazine.com/travel/epic-summer-road-trip-6-must-stop-florida-destinations/");
        imageID++;
    }
    else{if(imageID==1){
        document.getElementById("myimage").src="http://i66.tinypic.com/ehzsqf.jpg";
        link.setAttribute('href', "http://www.orlandosentinel.com/travel/os-florida-summer-travel-hotel-deals-20170531-story.html");
        imageID++;
    }else{if(imageID==2){
        document.getElementById("myimage").src="http://i65.tinypic.com/dbnudl.jpg";
        link.setAttribute('href', "https://www.local10.com/travel/orlando-2-other-florida-cities-crack-top-25-for-staycation-destinations");
        imageID=0;
    }}}
    

}
