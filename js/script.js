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
    navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
  });
});

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
