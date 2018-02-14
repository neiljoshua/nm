$(document).ready(function() {

  var scrollStart = 0;
  var offset = 0;
  var $emailplaceholder = $('input[name=user-email]').attr('placeholder');

  $('.slider').slick({
    infinite: true,
    autoplay: true,
    speed: 150,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false,
    dots: false,
    prevArrow: false,
    nextArrow: false
  });

  $('.slick-container').each(function() {
    var imgURL = $(this).find('img').attr('src');
    $(this).css('background-image', 'url(' + imgURL + ')');
  });

  $('.c-hamburger').on('click', function(e){

      e.preventDefault();
      var $body = $('body');
      $(this).toggleClass('is-active');
      $($body).toggleClass('menu-active');
      if ( $body.hasClass('home') ){
        $('.logo').toggleClass('logo--white');
        $('.menu').toggleClass('menu-active-home');
      } else {
        $('.menu').toggleClass('menu-active');
      }

  });



// Email Validation


  window.validateEmail = function( emails ) {

      var errors       = 0;
      var emailArray   = (emails == null) ? [] :emails.split(',');
      var expression   = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      $(emailArray).each(function(index, email){

        if( !expression.test( email.trim() ) ){

          errors++;

        }

      });

      if( errors > 0 ){

        return false;

      }else{

        return true;

      }

  }

  //Sending form

  $('#contact-form').submit(function(e) {
  		debugger
      e.preventDefault();
      var $form  = $(this);
      var $email = $('input[name=user-email]');
      var $wrongemailmessage = "Enter a valid email";

      if ( !window.validateEmail( $email.val() ) &&  ( $email.prop('required') ) ) {
        $email.addClass('invalid');
        $email.val('');
        $email.focus();
        $email.attr('placeholder',$wrongemailmessage);
      } else {
      	$email.attr('placeholder',$emailplaceholder);
	      $email.removeClass('invalid')
        var url = "/src/includes/sendForm.php"; // the script where you handle the form input.
        var formdata = $($form).serialize();
        $.ajax({
           type: "POST",
           url: url,
           data: formdata,
           success: function(response)
           {
              $('form input').val('');
              $('textarea').val('');
              $('.success').addClass('visible');
              $('body').addClass('submitted')
           }
         })
        return false;
      }
  });

  $(document).on('click', function() {
    $('.success').removeClass('visible');
    $('.wrapper').removeClass('submitted');
  })



}); // End of doc ready.
