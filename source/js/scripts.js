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

  $('#js-video-popup').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    closeBtnInside:true
  });

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
    itemSelector: '.gallery__image',
    fitWidth: true,
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
      let submit = $("#js-index-form-submit")
      $(this).siblings('.form__label').addClass('label-shrink');
      $(this).closest('.js-form-validation').removeClass('form__input-error');
      $(this).siblings('.form__label').text(default_text);
      submit.removeClass('blue-button--inactive');
      },
    focusout: function() {
      let parent = $(this).closest('.js-form-validation');
      let content = $(this).val();
      let input = $(this);
      if (content != ""){

      } else {
        input.siblings('.form__label').removeClass('label-shrink');
      }
    }
  });

  $('.js-email-validation').on({
    focusout: function() {
      let content = $(this).val();
      let validation = validateEmail(content);
      let parent = $(this).closest('.js-form-validation');
      let label = $(this).siblings('.form__label');
      //let submit = $(".form__submit");
      if (validation) {

      } else {
        if ( content.length > 0 ) {
          // submit.addClass('blue-button--inactive');
          // this is not working for some reason...
          parent.addClass('form__input-error');
          label.text("Please enter a valid e-mail");
        }
      }
    },
    keyup: function() {}
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

  Dropzone.autoDiscover = false;
  $("#js-index-form-file-1").dropzone({
    url: "/file/post",
    maxFilesize: 20,
    addRemoveLinks: true,
    success: function (file, response) {
        var imgName = response;
        file.previewElement.classList.add("dz-success");
        console.log("Successfully uploaded :" + imgName);
    },
    error: function (file, response) {
        file.previewElement.classList.add("dz-error");
    }
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

  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
});
