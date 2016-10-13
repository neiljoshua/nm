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
  });
  
$('header nav a').on('click', function(){
  $('nav').removeClass('active');
})

// function windowScroll(){
//   $(window).scroll (function () {
//         var sT = $(this).scrollTop();
//             if (sT >= 200 )  {
//                 $('nav').addClass('color-menu');
//             }else {
//                 $('nav').removeClass('color-menu');
//             }
//   });
// }

// windowScroll();

function aboutSlider(){
  $("#contact-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 100,
      paginationSpeed : 200,
      singleItem:true, 
      autoPlay: true,
      pagination: true,
  });
}

aboutSlider();

 //Instagram Feed 

  $.ajax({
    url : 'https://api.instagram.com/v1/users/30193863/media/recent/?access_token=3637633428.a62eb01.ecaefb0ff4664d879594ee6912bc44b6&count=9',
    dataType : "jsonp",
    success : function(results) {
      for(var i = 0; i< results.data.length; i++ ){
          var imageInsta = results.data[i].images.standard_resolution.url;
          $('.grid').append('<img src="' + imageInsta + '"/>');
      }
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

  $(window).scroll(function () {
    var e = $(window).scrollTop(),
        t = $("header").height() - 50;
        // console.log(e);
        // console.log(t);
    if (e >= t) {
        // $("header").css({
        //     "margin-top": 50
        // });
        console.log('passed header');
        $("body > section").each(function (t) {
          console.log(t);
          console.log('hey');
            if ($(this).position().top - 1 <= e - $(this).height() + 50) {
              console.log('active');
                $("#nav a.active").removeClass("active");
                $("#nav a").eq(t).addClass("active")
            }
        })
    } else {
        $(".welcome").css({
            "margin-top": 0
        });
        $("#nav a.active").removeClass("active");
        $("#nav a:first").addClass("active")
    }
}).scroll();

}); // End of doc ready.  
