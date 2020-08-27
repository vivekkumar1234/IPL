
  var uid = null;
  var firebase = app_firebase;

  function logOut(){
      window.location = "index.html";
      firebase.auth().signOut();
  }
