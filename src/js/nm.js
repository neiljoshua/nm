$(document).ready(function() {

  function addingBackgroundcolor(){
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        if(scroll_pos > 10) {
            $('.home, header, .c-hamburger').addClass('button-background-color');
        } else {
            $('.home, header, .c-hamburger').removeClass('button-background-color');
        }
    });
  }

  addingBackgroundcolor();

  $('.c-hamburger').on('click', function(e){
      e.preventDefault();
        $(this).toggleClass('is-active');
        $('header').toggleClass('active');
        $('.wrapper').toggleClass('fixed');
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

//Instagram Feed 

  $.ajax({
    url : 'https://api.instagram.com/v1/users/30193863/media/recent/?access_token=3637633428.a62eb01.ecaefb0ff4664d879594ee6912bc44b6&count=6',
    dataType : "jsonp",
    success : function(results) {
          var items = [];
      for(var i = 0; i< results.data.length; i++ ){
          var imageInsta = results.data[i].images.standard_resolution.url;
          $('#grid-slider').append('<div class="item"><img src="' + imageInsta + '" alt="slide' +(i+1)+'"/></div>');
      }
      $('#grid-slider').owlCarousel({
          item: 1,
          slideSpeed : 200,
          paginationSpeed : 400,
          singleItem:true, 
          autoPlay: true,
          stopOnHover: true,
      });
    }
  });

  $('#contact-form').submit(function(e) {

      e.preventDefault();

      var $form  = $(this);
      console.log($form);
      var $email = $("user-email");
      console.log($email);
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
                 $('.success').fadeTo(400, 1);
                 $('form input').val('');
           }
         });
        return false;
      }
  });

  // Form Validation
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

    $('.close-success').on('click', function(e) {
      e.preventDefault();
      $('.success').fadeTo(400, 0);
    })

  // Nav links on scroll

//   $(window).scroll(function () {
//     var e = $(window).scrollTop(),
//         t = $("header").height() - 50;
//         // console.log(e);
//         // console.log(t);
//     if (e >= t) {
//         // $("header").css({
//         //     "margin-top": 50
//         // });
//         console.log('passed header');
//         $("body > section").each(function (t) {
//           console.log(t);
//           console.log('hey');
//             if ($(this).position().top - 1 <= e - $(this).height() + 50) {
//               console.log('active');
//                 $("#nav a.active").removeClass("active");
//                 $("#nav a").eq(t).addClass("active")
//             }
//         })
//     } else {
//         $(".welcome").css({
//             "margin-top": 0
//         });
//         $("#nav a.active").removeClass("active");
//         $("#nav a:first").addClass("active")
//     }
// }).scroll();

}); // End of doc ready.  
