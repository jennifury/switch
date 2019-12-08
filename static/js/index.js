// CONFIG DATABASE
var config = {
  apiKey: "AIzaSyCC7xpXuvFD1jp6mrJZj6JQaWK1DjNgdW8",
  authDomain: "switch-29c7c.firebaseapp.com",
  databaseURL: "https://switch-29c7c.firebaseio.com",
  projectId: "switch-29c7c",
  storageBucket: "switch-29c7c.appspot.com",
  messagingSenderId: "53630457461",
  appId: "1:53630457461:web:5caf1bdee5488f43f14a3c",
  measurementId: "G-YE81ERQJME"
};
firebase.initializeApp(config);
firebase.analytics();

// ADD TO DATABASE
var postsRef = firebase.database().ref('posts');
document.getElementById('post').addEventListener('submit', submitForm);
function submitForm(e){
  e.preventDefault();
  var category = getInputVal('category');
  var subcategory = getInputVal('subcategory');
  var title = getInputVal('title');
  var price = getInputVal('price');
  var description = getInputVal('description');
  var communication = getInputVal('communication');
  savePost(category, subcategory, title, price, description, communication);
  document.getElementById('post').reset();
}
function getInputVal(id){
  return document.getElementById(id).value;
}
function savePost(category, subcategory, title, price, description, communication) {
  var newPostRef = postsRef.push();
  newPostRef.set({
    category:category,
    subcategory:subcategory,
    title:title,
    price:price,
    description:description,
    communication:communication
  });
}

// RETRIEVE FROM DATABASE
var rootRef = firebase.database().ref().child("posts");
rootRef.on("child_added", snap => {
  var category = snap.child("category").val();
  var subcategory = snap.child("subcategory").val();
  var title = snap.child("title").val();
  var price = snap.child("price").val();
  var description = snap.child("description").val();
  var communication = snap.child("communication").val();
  $('#posts_table').append('<tr><td>' + category +'</td>' +
                           '<td>' + subcategory +'</td>' +
                           '<td>' + title +'</td><' +
                           '<td>' + price +'</td>' +
                           '<td>' + description +'</td>' +
                           '<td>' + communication +'</td></tr>');
});


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
