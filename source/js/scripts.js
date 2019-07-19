$( document ).ready(function() {
  // $('#js-index-slick-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 2000,
  //   dots: true,
  // });

  $('#nav-icon').on('click', function(){
    $(this).toggleClass('open');
    $('#header-mobile-menu').toggleClass('header-mobile-menu--active');
    $('.header').toggleClass('header--no-overflow');
  });


    // slider progress animation


  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    renderBullet: function (index, className) {
      console.log(1);
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
    autoplay: {
      delay: 5000,
    },
    on: {
      slideChange: function() {

      }
    },

    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },

    // And if we need scrollbar
  })

  var bar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
  strokeWidth: 17,
  // easing: 'easeInOut',
  duration: 5000,
  color: '#00AAE5',
  trailColor: '#D9E7EE',
  trailWidth: 17,
  svgStyle: null
  });
  bar.animate(1.0);

  mySwiper.on('slideChange', function() {
    $('.swiper-pagination-bullet svg').remove();
    var bar = new ProgressBar.Circle('.swiper-pagination-bullet-active', {
    strokeWidth: 17,
    easing: 'easeInOut',
    duration: 5000,
    color: '#00AAE5',
    trailColor: '#D9E7EE',
    trailWidth: 17,
    svgStyle: null
    });
    bar.animate(1.0);
  })

  // video popup
  $('#js-video-popup').magnificPopup({
    type:'inline',
    midClick: true, // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    closeBtnInside:true
  });

  // initiating jq client tabs
  $('#clients_tabs').tabs();

  $('.clients__tabs-mobile li').on('click', function(){
    let content = $(this).find('.clients__tabs-mobile-content');
    let arrow = $(this).find('.clients__collapse-arrow');
    content.slideToggle();
    content.toggleClass('clients__tabs-mobile-content--hidden');
    arrow.toggleClass('clients__collapse-arrow--open');
    $(this).toggleClass('clients__tabs-mobile-title--active');
  });

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

  //removing default text for remove button, cant figure out why it wont work with data attribute
  Dropzone.prototype.defaultOptions.dictRemoveFile = "";

  Dropzone.autoDiscover = false;
  $("#index-dropzone").dropzone({
    url: "/file/post",
    maxFiles: 2,
    maxFilesize: 20,
    // probably because of this lol
    addRemoveLinks: true,
    dictMaxFilesExceeded: 'Only 2 files',
    success: function (file, response) {
        var imgName = response;
        file.previewElement.classList.add("dz-success");
        console.log("Successfully uploaded :" + imgName);
    },
    accept: function(file, done) {
      let dropzone = $('#index-dropzone');
      $("#index-dropzone .form__file-wrapper-dud").remove();
      let fileDud = $('#file-dud')
      console.log(dropzone.children().length);
      if (dropzone.children().length <= 2) {
        $('.file-dud').clone().appendTo('#index-dropzone');
      };
      if (dropzone.children().length > 3) {
        dropzone.children().last().remove();
      }
    },
    removedfile: function(file){
      let dropzone = $('#index-dropzone');
      file.previewElement.remove();
      if (dropzone.children().length <= 2) {
        console.log("duds:" + dropzone.children('.file-dud').length);
        if (dropzone.children('.file-dud').length == 0) {
          $('.file-dud').clone().appendTo('#index-dropzone');
        }
      }
    },
    error: function (file, response) {
        file.previewElement.classList.add("dz-error");
    },

    previewTemplate: document.querySelector('#tpl').innerHTML,
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

  function addDud() {

  };

  function validateEmail(email) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }
});
