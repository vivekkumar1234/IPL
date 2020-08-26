var mainApp = {};

(function(){
  var uid = null;
  var firebase = app_firebase;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      uid= user.uid;
    } else {
      // No user is signed in.
      uid=null;
      window.location.replace("index.html");
    }
  });

  function logOut(){
      firebase.auth().signOut();
  }


  mainApp.logOut = logOut;
})()
