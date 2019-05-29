import '../sass/style.scss';

(function($) {
  'use strict';
    $(window).on('load', function () {
      if ($('.preloader-wrapper').length > 0) {
        $('.preloader-wrapper').fadeOut('slow');
        $('.wrapper').addClass('loaded');
      }
    });
})(jQuery);

$(document).ready(function() {

  var emailPlaceHolder = $('input[name=user-email]').attr('placeholder');

  $('.slider__slide').each(function() {
      var link = $(this).find("img").attr("src");
      $(this).css("background-image", "url(" + link + ")");
  });

  $('.hamburger').on('click', function(e){
      e.preventDefault();
      var pageBody = $('body');

      $(this).toggleClass('is-active');
      $(pageBody).toggleClass('menu-active');
      $('.menu').toggleClass('menu-active');
      $('.logo').toggleClass('menu-active');
  });

  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var form  = $(this),
        email = $('input[name="user-email"]'),
        wrongEmailMessage = "Enter a valid email";

    $('.message').addClass('visible');
    $('.message__status').addClass('visible');
    if ( !window.validateEmail( email.val() ) && ( email.prop('required') ) ) {
      email.addClass('invalid');
      email.val('');
      email.focus();
      email.attr('placeholder',wrongEmailMessage);
    } else {
      var url = "/static/includes/sendForm.php",
          formdata = $(form).serialize();

      email.attr('placeholder',emailPlaceHolder);
      email.removeClass('invalid');
      $.ajax({
         type: "POST",
         url: url,
         data: formdata,
         success: function(response)
         {
            $('form input[type=text]').val('');
            $('#user-message-text').val('');
            $('.message__status').removeClass('visible');
            $('.message__success').addClass('visible');
         }
       });
      return false;
    }
  });

  $(document).on('click', function() {
    $('.message__success').removeClass('visible');
    $('.message').removeClass('visible');
  });

  window.validateEmail = function( emails ) {

    var errors      = 0,
        emailArray  = (emails == null) ? [] :emails.split(','),
        expression  = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
  };
});
