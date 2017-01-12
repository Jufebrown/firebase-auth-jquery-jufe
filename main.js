// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyA83A4Nz9ZO32NiPeNF8zdcYPTTPb3PYCQ",
  authDomain: "c17-firebase-auth-jufe.firebaseapp.com",
  databaseURL: "https://c17-firebase-auth-jufe.firebaseio.com",
  storageBucket: "c17-firebase-auth-jufe.appspot.com",
  messagingSenderId: "653707776406"
})

firebase.auth().onAuthStateChanged(() => {
  if (firebase.auth().currentUser !== null) {
  var email = firebase.auth().currentUser.email
  $('.main-page h1').text(`Welcome ${email}`)
  $('.login-page').addClass('hidden')
  $('.main-page').removeClass('hidden')
  } else {
    $('.login-page').removeClass('hidden')
    $('.main-page').addClass('hidden')
  }
})

$('.login-page form').submit((e) => {
  e.preventDefault()
  var email = $('input[type="email"]').val()
  var password = $('input[type="password"]').val()
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
  alert(errorMessage)
})
  .then(() => {
    $('form')[0].reset()
  })
})

//sign-out button
$('.sign-out').click(()=>{
  firebase.auth().signOut()
})

//register button
$('.register').click(()=>{
  var email = $('input[type="email"]').val()
  var password = $('input[type="password"]').val()
  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    alert(errorMessage)
  })
  .then(() => {
    $('form')[0].reset()
  })
})
