
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDHlZkKXqKdG0ozDEpf7TIndecn5Jwy_c0",
    authDomain: "myproject-614de.firebaseapp.com",
    projectId: "myproject-614de",
    storageBucket: "myproject-614de.appspot.com",
    messagingSenderId: "692277333111",
    appId: "1:692277333111:web:19e02efae02f77cec98a72",
    measurementId: "G-MVC17KVT6X"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  function togglePopup(){
    document.getElementById("alert").classList.toggle("show");
  }
  function sendMessage(){
    console.log(1)
      var name=document.getElementById("name").value;
      var email=document.getElementById("email").value;
      var number=document.getElementById("number").value;
      var housename =document.getElementById("housename").value;
      var bookingfor=document.getElementById("bookingfor").value;
      var localityname=document.getElementById("localityname").value;
      var landmarkname =document.getElementById("landmarkname").value;
  

      firebase.database().ref("messages1").push().set({
           "name":name,
           "email":email,
           "number":number,
           "housename":housename,
           "localityname":localityname,
           "bookingfor":bookingfor,
           "landmarkname":landmarkname,   
      });
 }
 var count=0;
  firebase.database().ref("messages1").on("child_added",function(snaphot){
            var nash="<ul class='container1'> ";
            nash+="<li>";
             nash+="name" + ":"+ snaphot.val().name;
             nash+="</li>"
             nash+="<li>";
             nash+="email" + ":"+ snaphot.val().email;
             nash+="</li>"
             nash+="<li>";
             nash+="number" + ":"+ snaphot.val().number;
             nash+="</li>"
             nash+="<li>";
             nash+="housename" + ":"+ snaphot.val().housename;
             nash+="</li>"
             nash+="<li>";
             nash+="localityname" + ":"+ snaphot.val().localityname;
             nash+="</li>"
             nash+="<li>";
             nash+="landmarkname" + ":"+ snaphot.val().landmarkname;
             nash+="</li>"
             nash+="<li>";
             nash+="booking for" + ":"+ snaphot.val().bookingfor;
             nash+="</li>"
             nash+="</ul>"
          
       document.getElementById("messages1").innerHTML=nash+document.getElementById("messages1").innerHTML;
  document.getElementById("bag").innerHTML=++count;
      
  }); 
   
