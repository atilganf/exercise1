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
//Exercise 3
var acc = document.getElementsByClassName("accordion");
var i;
for(i = 0; i < acc.length; i++){
  acc[i].addEventListener("click", function(){
    var panels = document.getElementsByClassName("panel");
    var panel = this.nextElementSibling;
    var mh = panel.style.maxHeight;
    var sign = this.lastChild.innerHTML;
    for(x = 0; x < panels.length; x++){
      acc[x].className = acc[x].className.replace("active", "");
      panels[x].style.maxHeight = "0px";
      acc[x].lastChild.innerHTML = "+";
    }
    this.lastChild.innerHTML = sign;
    this.classList.toggle("active");
    if(this.lastChild.innerHTML == "+"){
      this.lastChild.innerHTML = "-";
    }else{
      this.lastChild.innerHTML = "+";
    }
    if(mh){
      panel.style.maxHeight = mh;
    }
    if(panel.style.maxHeight != "0px"){
      panel.style.maxHeight = "0px";
    }else{
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}
