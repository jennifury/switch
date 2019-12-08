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

  //MAKES NEW SELLING POST
  if(category === "selling"){
    $('#selling_posts').append('<div id="selling_post"><h3 style="background-color: #E6E6E6">' + title +'</h3>' +
                      '<p style="background: #E6E6E6"><strong style="font-size: 15px;background: #E6E6E6">Price: </strong>' + price +'</p>' +
                      '<h4 style="background: #E6E6E6">Description:</h4><p style="font-size:13px;background: #E6E6E6">' + description +'</h4>' +
                      '<h4 style="background: #E6E6E6">Form of Communication:</h4><p style="font-size: 13px;background: #E6E6E6">' + communication +'</p></div>');
  }
  else if(category === "trading"){
    $('#trading_table').append('<tr><td>' + category +'</td>' +
                             '<td>' + subcategory +'</td>' +
                             '<td>' + title +'</td><' +
                             '<td>' + price +'</td>' +
                             '<td>' + description +'</td>' +
                             '<td>' + communication +'</td></tr>');
  }
  else if(category === "donating"){
    $('#donating_table').append('<tr><td>' + category +'</td>' +
                             '<td>' + subcategory +'</td>' +
                             '<td>' + title +'</td><' +
                             '<td>' + price +'</td>' +
                             '<td>' + description +'</td>' +
                             '<td>' + communication +'</td></tr>');
  }
  else if(category === "freelance"){
    $('#freelance_table').append('<tr><td>' + category +'</td>' +
                             '<td>' + subcategory +'</td>' +
                             '<td>' + title +'</td><' +
                             '<td>' + price +'</td>' +
                             '<td>' + description +'</td>' +
                             '<td>' + communication +'</td></tr>');
  }
});


function onSelection() {
  if (document.getElementById("category").value === "donating") {
    document.getElementById("price").setAttribute("disabled", true);
    document.getElementsByName('price')[0].value = 'FREE';
  } else {
    document.getElementById('price').removeAttribute('disabled');
    document.getElementsByName('price')[0].value = '';
  }
}
