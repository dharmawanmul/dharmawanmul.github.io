/* =================================================
                    CounterUp2
===================================================*/
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});
/* =================================================
                    Preloader
===================================================*/
$(window).on('load', function() {
  $('#status').fadeOut();
  $('#preloader').delay(350).fadeOut();
});

$(function() {
  $('#myCarousel').carousel({
    interval: 2000
  });
  var clickEvent = false;

  $('#myCarousel').on('click', '.nav a', function () {
    clickEvent = true;
    $('.nav li').removeClass('nav-item active');
    $(this).parent().addClass('nav-item active');
  });

  $('#myCarousel').bind('slid.bs.carousel', function () {
  // Get currently selected item
  var item = $('#myCarousel .carousel-inner .carousel-item.active');

  // Deactivate all nav links
  $('.nav li').removeClass('nav-item active');
  
  // Index is 1-based, use this to activate the nav link based on slide
  var index = item.index() + 1;
  
  $('.nav li:nth-child(' + index + ')').addClass('nav-item active');
  });
});

/* =================================================
                    Navbar
===================================================*/
$(function () {
  $(window).scroll(function (){
    if ( $(window).scrollTop() > 50 ) {
      $("nav").addClass("navbar-dark bg-dark");
      $("#back-to-top").fadeIn();
    } else {
      $("nav").removeClass("navbar-dark bg-dark");
      $("#back-to-top").fadeOut();
    }
  });
});

$(function() {
  $("#mobile-nav-open-btn").click(function () {
    $("#mobile-nav").css("height", "100%");
    $("#mobile-nav").css("visibility", "visible");
    $("#mobile-nav-open-btn").css("visibility", "hidden");
  });

  $("#mobile-nav-close-btn").click(function () {
    $("#mobile-nav").css("height", "0%");
    $("#mobile-nav").css("visibility", "hidden");
    $("#mobile-nav-open-btn").css("visibility", "visible");
  });
});

/* =================================================
                    Smooth Scroll
===================================================*/
$(function () {
  $("a.smooth-scroll").click(function () {
    var section_id = $(this).attr("href");

    $("html, body").animate({
      scrollTop: $(section_id).offset().top
    }, 1250, "easeInOutExpo");
  });
});

/* =================================================
                     Slider
===================================================*/
$(function() {
  $("#team-members").owlCarousel({
    items: 2,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      }
    }
  });
});

$(function() {
  $("#testimonial-slider").owlCarousel({
    items: 1,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

$(function() {
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: false,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: true,
    dots: false,
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

/* =================================================
                    Google Map
===================================================*/
function initMap() {
  var addressString = "Tödistrasse 7, Zürich, Switzerland";
  var myLatlng = {lat: 47.364670, lng:8.535540};

  //Render Map
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: myLatlng
  });
  //Add Marker
  var marker = new google.maps.Marker({
    position: myLatlng,
    map: map,
    title: "Click To See Address"
  });
  //Info Window
  var infowindow = new google.maps.InfoWindow({
    content: addressString
  });

  marker.addListener('click', function() {
    infowindow.open(map, marker);
  });

  google.maps.event.addDomListener(window, 'resize', function() {
    var center = map.getCenter();
    google.maps.event.trigger(map, 'resize');
    map.setCenter(center);
  });
}

/* =================================================
                    Progress Bar
===================================================*/
$(function() {
  $("#progress-elements").waypoint(function () {
    $(".progress-bar").each(function () {
      $(this).animate(
        {width: $(this).attr("aria-valuenow") + "%" 
      }, 1000);
    });
    this.destroy();
  }, {
    offset: 'bottom-in-view'
  });
});

/* =================================================
                Pets [Isotope Filter]
===================================================*/
$(window).on('load', function () {

  // Initialize Isotope
  $("#isotope-container").isotope({

  });

  // filter items on button click
  $("#isotope-filters").on('click', 'button', function () {

      // get filter value
      var filterValue = $(this).attr('data-filter');

      // filter portfolio
      $("#isotope-container").isotope({
          filter: filterValue
      });

      // active button
      $("#isotope-filters").find('.active').removeClass('active');
      $(this).addClass('active');
  });
});
/* =================================================
                    Magnific
===================================================*/
$(function() {
  $("#pets-wrapper").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery: {
      enabled: true
    }
  });
});

/* =================================================
                  Responsive Tabs
===================================================*/
// $(function() {
//   $('#services-tabs').responsiveTabs({
//     startCollapsed: 'accordion',
//     animation: 'slide',
//     duration: 300,
//   });
// });

/* =================================================
                    Animation
===================================================*/
$(function() {
  new WOW().init();
});

$(window).on('load', function() {
  $("#home-heading-1").addClass("animate__animated animate__fadeInDown");
  $("#home-heading-2").addClass("animate__animated animate__fadeInLeft");
  $("#home-text").addClass("animate__animated animate__zoomIn");
  $("#home-btn").addClass("animate__animated animate__zoomIn");
  $("#arrow-down").addClass("animate__animated animate__fadeInDown animate__infinite	infinite");
});