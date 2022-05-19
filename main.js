const x = document.getElementById("myLinks");
const navbar = document.getElementById("navbar");
const menuIcon = document.querySelector(".fa fa-bars");
const icon = document.querySelector(".icon");
const logo2 = document.querySelector(".logo2");
const logo1 = document.querySelector(".logo1");
const closeIcon = document.getElementById("close");

function myFunction() {
  if (x.style.display === "block") {
    x.style.display = "none";
    navbar.style.backgroundColor = "white";
  } else {
    logo1.style.display = "none";
    logo2.style.display = "block";
    x.style.display = "block";
    navbar.style.backgroundColor = "#5051db";
    icon.style.color = "#fff";
    closeIcon.setAttribute("class", "fa fa-close");
    menuIcon.style.display = "block";
  }

  logo1.style.display = "block";
  icon.style.color = "#5051db";
  closeIcon.style.display = "block";
  closeIcon.setAttribute("class", "fa fa-bars");
}


// function will only apply in media query
const mediaQuery = window.matchMedia('(max-width: 480px)');

if (mediaQuery.matches) {

    let slideIndex = 1;
    showSlides(slideIndex);

    
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("cardSlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for(let i = 0; i < slides.length; i++){
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display ="block";
    dots[slideIndex-1].className += " active";
  }
  
  }



