  (function() {




  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCfuFeTrADr5_EXGrRM2ehaga_hAzmSAX8",
    authDomain: "rss-reader-d917a.firebaseapp.com",
    databaseURL: "https://rss-reader-d917a.firebaseio.com",
    projectId: "rss-reader-d917a",
    storageBucket: "rss-reader-d917a.appspot.com",
    messagingSenderId: "1026864054357"
  };
  firebase.initializeApp(config);

  //Pobranie elementów (DOM)
   const txtEmail = document.getElementById('txtEmail');
   const txtPassword = document.getElementById('txtPassword');
   const btnLogin = document.getElementById('btnLogin');
   const btnSignUp = document.getElementById('btnSignUp');

   // Dodanie zdarzeń - logowanie 
            //e- call back function

   btnLogin.addEventListener('click', e => {
      //get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      //Sign In logowanie
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => alert(e.message));

   });

   //Rejestracja
   //TO DO regula poprawności dla EMAIL, żeby się nie pluło
    btnSignUp.addEventListener('click', e => {
      //get email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      //Sign In logowanie
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
      window.location.href = "#pageone";

   });

    btnLogOut.addEventListener('click', e => {
      firebase.auth().signOut();
      window.location.href = "#pageone";
      


    });








    //RealTime auth listener, po zarejestrowaniu

    firebase.auth().onAuthStateChanged(firebaseUser => {
      if (firebaseUser){
        console.log("Zalogowano");
        console.log(firebaseUser); 
         window.location.href = "#userpanel";
      } else {
        console.log("Nie zalogowano");
      }
    });





    }());


