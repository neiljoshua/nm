$(document).ready(function() {

  var scrollStart = 0;
  var startChange = $('#startchange');
  var offset = 0;

  $('.slider').slick({
    infinite: true,
    autoplay: true,
    speed: 100,
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

  $('form').submit(function(e) {

      e.preventDefault();

      var $form  = $(this);
      var $email = $('user-email');

      if ( !window.validateEmail( $email.val() ) &&  ( $email.prop('required') ) ) {
        $email.parent().addClass('invalid');
        $(".error").fadeTo(400, 1);
      } else {
      $email.parent().removeClass('invalid')
      $(".error").fadeTo(400, 0);

        var url = "/src/includes/sendForm.php"; // the script where you handle the form input.
        var formdata = $($form).serialize();
        $.ajax({
           type: "POST",
           url: url,
           data: formdata,
           // dataType: "json",
           success: function(response)
           {
              $('form input').val('');
              $('textarea').val('');
              $('.contact-message__message').addClass('contact-message--visible');
              $('body').addClass('submitted')
           }
         })
        // .done(setTimeout(function(){
        //       $('.contact-message').removeClass('visible');
        //     }, 500)
        //  );
        return false;
      }
  });

  $(document).on('click', function() {
    $('.contact-message__message').removeClass('contact-message--visible');
    $('.wrapper').removeClass('submitted');
  })

  

}); // End of doc ready.  
