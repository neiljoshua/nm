$(document).ready(function() {

  function addingBackgroundcolor(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {
            $('header').addClass('button-background-color');
        } else {
            $('header').removeClass('button-background-color');
        }
    });
  }

  addingBackgroundcolor();

  $('.c-hamburger').on('click', function(e){
      e.preventDefault();
        $(this).toggleClass('is-active');
        $('header').toggleClass('active');
        $('.site-nav').toggleClass('active');
    });
    
  $(window).resize( function () {

    var wWidth = $(window).width();
    var navActive = $('header');
    if (wWidth > 768){
        if ( navActive.hasClass('active') ) {
          navActive.removeClass('active');
          $('nav').removeClass('active');
          $('.wrapper').removeClass('fixed');
          $('.c-hamburger--rot').removeClass('is-active');
        } 
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

       var url = "contact.php"; // the script where you handle the form input.
        $.ajax({
           type: "POST",
           url: url,
           data: $("#contact-form").serialize(),
           success: function(data)
           {
                 $('form input').val('');
                 $('textarea').val('');
           }
         });
        return false;
      }
  });

  $('.close-success').on('click', function(e) {
    e.preventDefault();
    $('.success').fadeTo(400, 0);
  })

  

}); // End of doc ready.  
