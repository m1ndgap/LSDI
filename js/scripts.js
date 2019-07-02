$( document ).ready(function() {
  // $('#js-index-slick-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   dots: true,
  // });

  $('#clients_tabs').tabs();

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

  $(".js-label-morph").on({
    focus: function() {
      $(this).siblings('.form__label').addClass('label-shrink');
      },
    focusout: function() {
      if ($(this).val() != ""){

      } else {
        $(this).siblings('.form__label').removeClass('label-shrink');
      }
    }
  });

  $('#js-index-gallery').masonry({
    columnWidth: '.masonry-sizer',
    gutter: '.masonry-gutter',
    itemSelector: '.gallery__image',
    percentPosition: true
  })

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




});
