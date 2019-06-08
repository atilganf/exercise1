//Exercise 1: Slideshow
var currentSlide = 0;
function showSlide(n){
  var slides = document.getElementsByClassName('ss');
  var dots = document.getElementsByClassName("dot");
  if(n >= slides.length){n = 0;}
  if(n < 0){n = slides.length - 1;}
  for(let i = 0; i < slides.length; i++){
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

//Exercise 2: Login Form
var modal = document.getElementById('mod01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Exercise 3: Accordion
var acc = document.getElementsByClassName("accordion");
for(let i = 0; i < acc.length; i++){
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

//Exercise 4: Side Nav Animation
var navNum = 0;
function openNav(i) {
  var sn = document.getElementById("sidenav");
  if(navNum == 0){
    if(i==1){
      sn.style.width = "250px";
      sn.childNodes[3].style.textAlign = "left";
      sn.style.right = "auto";
      sn.style.left = "0px";
      sn.childNodes[1].style.right = "35px";
      sn.childNodes[1].style.left = "auto";
    }
    if(i==2){
      sn.style.width = "250px";
      document.getElementsByClassName("grid-cont")[0].style.marginLeft = "250px";
      sn.childNodes[3].style.textAlign = "left";
      sn.style.right = "auto";
      sn.style.left = "0px";
      sn.childNodes[1].style.right = "35px";
      sn.childNodes[1].style.left = "auto";
    }
    if(i==3){
      sn.style.width = "100%";
      sn.childNodes[3].style.textAlign = "center";
      sn.style.right = "auto";
      sn.style.left = "0px";
      sn.childNodes[1].style.right = "35px";
      sn.childNodes[1].style.left = "auto";
    }
    if(i==4){
      sn.style.width = "250px";
      sn.style.right = "0px";
      sn.style.left = "auto";
      sn.childNodes[3].style.textAlign = "right";
      sn.childNodes[1].style.right = "auto";
      sn.childNodes[1].style.left = "35px";
    }
    navNum = i;
  }
}
function closeNav(){
  navNum = 0;
  var sn = document.getElementById("sidenav");
  sn.style.width = "0px";
  document.getElementsByClassName("grid-cont")[0].style.marginLeft = "0px";
}
