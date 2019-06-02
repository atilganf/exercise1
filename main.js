//Exercise 1
var currentSlide = 0;
function showSlide(n){
  var i;
  var slides = document.getElementsByClassName('ss');
  var dots = document.getElementsByClassName("dot");
  if(n >= slides.length){n = 0;}
  if(n < 0){n = slides.length - 1;}
  for(i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block";
  dots[n].className += " active";
  currentSlide = n;
}
function plusSlide(n){
  currentSlide +=n;
  showSlide(currentSlide);
}
showSlide(0);

//Exercise 2
var modal = document.getElementById('mod01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
