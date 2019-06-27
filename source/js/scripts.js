$( document ).ready(function() {
  // $('#js-index-slick-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   dots: true,
  // });

  $('#js-index-gallery a').magnificPopup({
    type: 'image',
    gallery: {
      enabled: true, // set to true to enable gallery
      preload: [0,2], // read about this option in next Lazy-loading section
      navigateByImgClick: true,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
      tPrev: 'Previous (Left arrow key)', // title for left button
      tNext: 'Next (Right arrow key)', // title for right button
      tCounter: '<span class="mfp-counter"></span>' // markup of counter
  }
});

});
