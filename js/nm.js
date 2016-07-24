$(document).ready(function() {
  
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });
  
$('header nav i').on('click', function(){
  $('header nav ul').toggleClass('active-menu');
})

$('header nav a').on('click', function(){
  $('header nav ul').removeClass('active-menu');
  $(this).addClass('active-menu');
})

function windowScroll(){
  $(window).scroll (function () {
        var sT = $(this).scrollTop();
            if (sT >= 200) {
                $('nav').addClass('color-menu');
                $('nav ul li a:hover').addClass('moved');
            }else {
                $('nav').removeClass('color-menu');
                $('nav ul li a:hover').removeClass('moved');
            }
  });
}

windowScroll();

function aboutSlider(){
  $("#contact-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 200,
      paginationSpeed : 400,
      singleItem:true, 
      autoPlay: true,
      pagination: false,
  });
}

aboutSlider();

$('form').submit(function(e) {

    e.preventDefault();

    var $form  = $(this);

     var url = "contact.php"; // the script where you handle the form input.

      $.ajax({
         type: "POST",
         url: url,
         data: $("#contact-form").serialize(),
         success: function(data)
         {
               $('form').html('<p>thank you!</p>');
               $('form input').val('');
         }
       });
      return false;
});

function initialize() {
    var mapProp = {
      center:new google.maps.LatLng(40.774393,-73.92699099999999),
      zoom:12,
      mapTypeId:google.maps.MapTypeId.ROADMAP
    };
    var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
google.maps.event.addDomListener(window, 'load', initialize);

}); // End of doc ready.  
