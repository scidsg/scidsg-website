$(document).ready(function() {
  $(window).scroll(function() {
    if ($(document).scrollTop() > 500) {
      $('.logo').addClass('animate');
    } else {
      $('.logo').removeClass('animate');
    }
  });
  $('.navButton').on('click', function() {
    $('.staged').toggleClass('open');
  });

  $('.closeButton').on('click', function() {
    $('.staged').removeClass('open');
  });

  $('NAV li').on('click', function() {
    $('.staged').removeClass('open');
  });
});
