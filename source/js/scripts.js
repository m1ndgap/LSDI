$( document ).ready(function() {
  // $('#js-index-slick-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   dots: true,
  // });

  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 10000,
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
  })

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

  $('#js-index-gallery').masonry({
    columnWidth: '.masonry-sizer',
    gutter: '.masonry-gutter',
    itemSelector: '.gallery__image',
    fitWidth: true,
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

  $(".js-label-morph").on({
    focus: function() {
      let default_text = $(this).closest('.js-form-validation').data('default_label');
      $(this).siblings('.form__label').addClass('label-shrink');
      $(this).closest('.js-form-validation').removeClass('form__input-error');
      $(this).siblings('.form__label').val(default_text)
      },
    focusout: function() {
      if ($(this).val() != ""){

      } else {
        $(this).siblings('.form__label').removeClass('label-shrink');
      }
    }
  });

  $('#js-index-form-submit').on('click', function(){
    $('.js-form-validation').each(function(){
      let input = $(this).find('input');
      let tarea = $(this).find('textarea');
      let label = $(this).find('label');
      let errormsg= $(this).data('errormsg');
      if ((input.val() == '') || (tarea.val() == '')) {
        $(this).addClass('form__input-error');
        label.text(errormsg);
      };
    });
  });
  //
  // $("#js-form-file-1").on({
  //   change: function(event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     console.log(1);
  //   },
  //   dragover: function(event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     console.log(2);
  //   },
  //   dragleave: function(event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     console.log(3);
  //   },
  //   drop: function(event) {
  //     event.preventDefault();
  //     event.stopPropagation();
  //     console.log($(this)[0].files[0].size);
  //
  //   }
  // });


});
