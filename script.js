var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("hidden");

  if (n===undefined){n= ++slideIndex;}
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length}

  $(slides[slideIndex-1]).fadeIn(2000);
  slides[slideIndex-1].style.display = "block";
  $(slides[slideIndex-1]).delay(3000);
  $(slides[slideIndex-1]).fadeOut(1000);

  setTimeout(showSlides, 6000);
}
