
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

  $('.slider').slick({
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    pauseOnHover: false
  });

  $('.slick-slide').each(function() {
      var link = $(this).find("img").attr("src");
      $(this).css("background-image", "url(" + link + ")");
  });

  $('.hamburger').on('click', function(e){
      e.preventDefault();
      var pageBody = $('body');

      $(this).toggleClass('is-active');
      $(pageBody).toggleClass('menu-active');
      $('.menu').toggleClass('menu-active');

      if( !$('.wrapper').hasClass('home') ) {
        $('.logo').toggleClass('menu-active');
      }
  });

  $('#contact-form').submit(function(e) {
    e.preventDefault();
    var form  = $(this),
        email = $('input[name=user-email]'),
        wrongEmailMessage = "Enter a valid email";

    if ( !window.validateEmail( email.val() ) &&  ( email.prop('required') ) ) {
      email.addClass('invalid');
      email.val('');
      email.focus();
      email.attr('placeholder',wrongEmailMessage);
    } else {
      email.attr('placeholder',emailPlaceHolder);
      email.removeClass('invalid');
      var formdata = $(form).serialize();
      $.ajax({
         type: "POST",
         url: url,
         data: formdata,
         success: function(response)
         {
            $('form input').val('');
            $('textarea').val('');
            $('.success').addClass('visible');
            $('body').addClass('submitted');
         }
       });
      return false;
    }
  });

  $(document).on('click', function() {

    $('.success').removeClass('visible');
    $('.wrapper').removeClass('submitted');
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
