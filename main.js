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

$('form').submit((e) => {
  e.preventDefault()
  var email = $('input[type="email"]').val()
  var password = $('input[type="password"]').val()
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then(() => {
    $('form')[0].reset
  })
})
