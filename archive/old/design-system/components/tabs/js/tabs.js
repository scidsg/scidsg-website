$(document).ready(function(){

  // $('.tabs').before($('.tabs').clone(true).addClass('clonedTabs'));
  $('.nonprofitTab').on('click', function() {
    $('.nonprofitRetainer').removeClass('hidden');
    $('.smallBusinessRetainer').addClass('hidden');
    $('.enterpriseRetainer').addClass('hidden');

    $('.nonprofitTab').addClass('selected');
    $('.smbTab').removeClass('selected');
    $('.enterpriseTab').removeClass('selected');

    $('.nonprofitTable').removeClass('hidden');
    $('.smbTable').addClass('hidden');
    $('.enterpriseTable').addClass('hidden');

  });

  $('.smbTab').on('click', function() {
    $('.nonprofitRetainer').addClass('hidden');
    $('.smallBusinessRetainer').removeClass('hidden');
    $('.enterpriseRetainer').addClass('hidden');

    $('.nonprofitTab').removeClass('selected');
    $('.smbTab').addClass('selected');
    $('.enterpriseTab').removeClass('selected');

    $('.nonprofitTable').addClass('hidden');
    $('.smbTable').removeClass('hidden');
    $('.enterpriseTable').addClass('hidden');
  });

  $('.enterpriseTab').on('click', function() {
    $('.nonprofitRetainer').addClass('hidden');
    $('.smallBusinessRetainer').addClass('hidden');
    $('.enterpriseRetainer').removeClass('hidden');

    $('.nonprofitTab').removeClass('selected');
    $('.smbTab').removeClass('selected');
    $('.enterpriseTab').addClass('selected');

    $('.nonprofitTable').addClass('hidden');
    $('.smbTable').addClass('hidden');
    $('.enterpriseTable').removeClass('hidden');
  });

  // $(window).bind('scroll', function() {
  // var navHeight = $( window ).height() - 266;
  // if ($(window).scrollTop() > navHeight) {
  //   $('.clonedTabs').addClass('tabContainerScrolled');
  //   $('.clonedTabs').addClass('clonedTabsVisible');
  // }
  // else {
  //   $('.clonedTabs').removeClass('tabContainerScrolled');
  //   $('.clonedTabs').removeClass('clonedTabsVisible');

});
