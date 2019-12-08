

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCW8bQcGMCrSUAVg4BEgx3eS02whdDLybo",
    authDomain: "sjsu-switch-19a46.firebaseapp.com",
    databaseURL: "https://sjsu-switch-19a46.firebaseio.com",
    projectId: "sjsu-switch-19a46",
    storageBucket: "sjsu-switch-19a46.appspot.com",
    messagingSenderId: "539251544145",
    appId: "1:539251544145:web:9172f60f5765cb399a6870",
    measurementId: "G-WF5MTNZMB1"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();





var slideIndex = 0;
showSlides();
var slides,dots;

// Next/previous controls
function plusSlides(position) {
    slideIndex +=position;
    if (slideIndex> slides.length) {slideIndex = 1}
    else if(slideIndex<1){slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Thumbnail image controls
function currentSlide(index) {
    if (index> slides.length) {index = 1}
    else if(index<1){index = slides.length}
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[index-1].style.display = "block";
    dots[index-1].className += " active";
}

function showSlides() {
    var i;
    slides = document.getElementsByClassName("mySlides");
    dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}


//createpost
function onSelection() {
    if (document.getElementById("category").value === "donating") {
        document.getElementById("price").setAttribute("disabled", true);
        document.getElementsByName('price')[0].value='FREE';
    } else {
        document.getElementById('price').removeAttribute('disabled');
        document.getElementsByName('price')[0].value='';
    }
}


const img = document.querySelector('img');
  img.style.cursor = 'pointer';
  img.addEventListener(
      "click",
      (event) => {
          console.log(event);
          img.style.height = '400px';
          img.style.width = '400px';
      });
}

// Run javascript after the DOM loads.
window.addEventListener("load", onLoad);
