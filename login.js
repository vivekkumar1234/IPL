
  var firebase = app_firebase;

  const txtEmail = document.getElementById("txtEmail");
  const txtPassword = document.getElementById("txtPassword");
  const btnLogin = document.getElementById("btnLogin");
  const btnSignUp = document.getElementById("btnSignUp");
  const btnLogout = document.getElementById("btnLogout");

  //    window.onLoad() = function(){
        function signIn() {
          const email = txtEmail.value;
          const password = txtPassword.value;

          const auth = firebase.auth();

          const promise = auth.signInWithEmailAndPassword(email, password);

          promise.then(result =>{window.location = "main.html";},
                  e => console.log(e.message));
        }

        /*function signUp() {
          const email = txtEmail.value;
          const password = txtPassword.value;
          const auth = firebase.auth();
          const promise = auth.createUserWithEmailAndPassword(email, password);
          promise.then(result =>{console.log("successful");
                                  window.location.replace = "main.html";},
                  e => console.log(e.message));
        }*/

        function fgtPassword(){
          window.location = "fgtPassword.html";
        }

        function signVerificationEmail(){
          const emailAddress = document.getElementById("passwordResetEmail").value;
          var auth = firebase.auth();
          auth.sendPasswordResetEmail(emailAddress).then(function() {
            document.innerHTML ="Verification email sent to your email "+emailAddress;
          }).catch(function(error) {
            console.log("error sending email for password reset : "+error);
          });
        }
