$( document ).ready(function() {

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

  $('#js-index-gallery-2 a').magnificPopup({
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

  let $container = $('#js-index-gallery');

  $container.masonry({
    columnWidth: '.masonry-sizer',
    itemSelector: '.gallery__image',
    fitWidth: true,
  });

  $(window).resize(function () {
    console.log(123123123);
    $container.masonry('reloadItems');
  });

  $('#js-gallery-add-items').on( 'click', function() {
  // create new item elements
  var $items = $('.js-gallery-extra');

  // append items to grid
  $('#js-index-gallery').append($items)
    // add and lay out newly appended items
  .masonry( 'appended', $items );

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
  $('#js-gallery-add-items').fadeOut(200);
  $('.js-gallery-extra').removeClass('js-gallery-extra')
  });


  // test append
  $('#js-gallery-add-items-2').on( 'click', function() {
  // create new item elements
  $('.js-gallery-extra-2').each(function(){
    $(this).appendTo('.gallery__images-2').hide().fadeIn('3300');
  });

    $('#js-index-gallery-2 a').magnificPopup({
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
  $('#js-gallery-add-items-2').fadeOut(200);
  $('.js-gallery-extra').removeClass('js-gallery-extra')
  });

});
