$('form').submit((e) => {
  e.preventDefault()
  var email = $('input[type="email"]').val()
  //set to h1
  $('.main-page h1').text(`Welcome ${email}`)
  $('.login-page').addClass('hidden')
  $('.main-page').removeClass('hidden')
})
