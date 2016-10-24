$(document).ready(function() {
   

  $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
          || location.hostname == this.hostname) {

          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
             if (target.length) {
               $('html,body').animate({
                   scrollTop: target.offset().top
              }, 1150);
              return false;
          }
      }
  });

  $('.c-hamburger').on('click', function(e){
      e.preventDefault();
        $(this).toggleClass('is-active');
        $('nav').toggleClass('active');
        $('.home').toggleClass('is-active');
    });
    
  $('header nav a').on('click', function() {
    $('nav').removeClass('active');
    $('.c-hamburger').toggleClass('is-active');
    $('.home').toggleClass('is-active');
  })

  $('.home').on('click', function() {
    var homeClick = $(this);
    if ( homeClick.hasClass('is-active')){
      $('nav').removeClass('active');
      $('.c-hamburger').toggleClass('is-active');
      $('.home').toggleClass('is-active');
    }
  });

$(window).resize( function () {

  var wWidth = $(window).width();
  var navActive = $('.home');
  if (wWidth > 768){
    console.log('window width', wWidth);
    console.log(navActive);
      if ( navActive.hasClass('is-active') ) {
        navActive.removeClass('is-active');
        console.log('nav has active class!!!');
        $('nav').removeClass('active');
        $('.c-hamburger--htx').removeClass('is-active');
      } 
  }

});   


// function windowScroll(){
//   $(window).scroll (function () {
//         var sT = $(this).scrollTop();
//         var wWith = $(window).width(); 
//         console.log('Scroll top',sT);
//         var vHeight = $('#top-header').height();
//         console.log('WIndow  height',vHeight);
//         console.log('window with',wWith);
//             if (sT >= vHeight )  {
//                console.log('below header');
//             } else {
//                 console.log('back to header');
//             } 
//   });
// }

// windowScroll();


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

  $('form').submit(function(e) {

      e.preventDefault();

      var $form  = $(this);
      var $email = $("#email");
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
