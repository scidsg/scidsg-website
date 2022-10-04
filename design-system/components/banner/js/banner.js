$(document).ready(function() {

  $('.bannerBtn').on('click', function() {
    $('.banner').toggleClass('hidden');
  });

  $('.bannerBtn').on('click', function() {
    $('BODY + div').removeClass('banner');
  });

});
