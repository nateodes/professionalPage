// 
function ValidateEmail(mail)  {  
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($("#emailInput").val()))  
 {  
    
  return (true)  
}  


return (false)  
}  
// Set firebase 

  // Initialize Firebase
 var config = {
    apiKey: "AIzaSyD_pO0AH85ISS0DqRiTkXae3JO3iHEAMZk",
    authDomain: "my-professional-page.firebaseapp.com",
    databaseURL: "https://my-professional-page.firebaseio.com",
    projectId: "my-professional-page",
    storageBucket: "my-professional-page.appspot.com",
    messagingSenderId: "229835327142"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

var name = "";
var email = "";
var comments = "";

$("#submit").on("click", function(event) {
  
  event.preventDefault();
  ValidateEmail();
    if (ValidateEmail() === true) {

      name = $("#nameInput").val();
      email = $("#emailInput").val();
      comments = $("#commentInput").val();
     
      console.log("pushed to Firebase");
      
      database.ref().push({
        name: name,
        email: email,
        comments: comments
        

      });
        console.log("true email")
    }
    else {
        console.log("modal")

var modal2 = document.getElementById('myModal2');

var btn = document.getElementById("modal2");

var span2 = document.getElementsByClassName("close2")[0];


    modal2.style.display = "block";


span2.onclick = function() {
    modal2.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
    }
      $("#emailInput").empty();
      $("#nameInput").empty();
      $("#commentInput").empty();
      
  }); 

