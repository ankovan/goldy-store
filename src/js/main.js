// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import 'owl.carousel'
import 'owl.carousel/dist/assets/owl.carousel.css';
import $ from 'jquery';
// import 'lazysizes';

// $(function() {
//   $('.owl-carousel').owlCarousel()
// })

$(document).ready(function($) {

  const owl = $(".owl-carousel");
  const initConfig = {

    
    autoplay:false, 
  
    items: 1,
    loop: true,
    center: true,
    rewind: false,

    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    freeDrag: false,

    margin: 0,
    stagePadding: 0,

    merge: false,
    mergeFit: true,
    autoWidth: false,

    startPosition: 0,
    rtl: false,

    smartSpeed: 250,
    fluidSpeed: false,
    dragEndSpeed: false,
    responsiveRefreshRate: 200,
    responsiveBaseElement: window,
    // responsive: {
    //   0: {
    //     items: 1,
    //     nav: true
    //   },
    //   480: {
    //     items: 2,
    //     nav: false
    //   },
    //   768: {
    //     items: 3,
    //     nav: true,
    //     loop: false
    //   },
    //   // 992: {
    //   //   items: 4,
    //   //   nav: true,
    //   //   loop: false
    //   // }
    // },
    fallbackEasing: 'swing',

    info: false,

    nestedItemSelector: false,
    itemElement: 'div',
    stageElement: 'div',

    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
    autoHeight: false,
    lazyLoad: false
  }
  owl.owlCarousel(initConfig);

  $(".next").click(function() {
    owl.owlCarousel(initConfig);
    owl.trigger('owl.next');
  });
  $(".prev").click(function() {
    owl.owlCarousel(initConfig);
    owl.trigger('owl.prev');
  });

  /* Equal Heights using javascript */
  // $('.latest-blog-posts .thumbnail.item').matchHeight();

});
