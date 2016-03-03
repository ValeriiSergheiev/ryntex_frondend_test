$(document).ready(function(){

  $('.open-popup-link').magnificPopup({
    type:'inline',
    alignTop: 'true',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
  });

  $('.mob-search a').click(function(){
    //alert('hello');
    $('.search-wrapper').slideToggle();
  });

  $('.mob-menu-open a').click(function(){
    $('.mob-wrapper').slideToggle('fast');
  });

});
