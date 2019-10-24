$(function() {
  function init() {
    // Toggle bg colour on and off
    $('.js-tk-position').on('click', function (e) {
      e.preventDefault();
      $('body').toggleClass('tk-reveal--on');
    })
  }
  
  init();
});
