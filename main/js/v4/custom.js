$(document).ready(function () {

	$('.carousel').carousel({ 
		interval:false
	});
	
});
$(function(){
"use strict";
 var shrinkHeader = 100;
  $(window).scroll(function() {
    var scroll = getCurrentScroll();
    if ( scroll >= shrinkHeader ) {
     $('.navbar').addClass('shrink');
     $('.checkBox').addClass('shrink');
    }
    else {
      $('.navbar').removeClass('shrink');
      $('.checkBox').removeClass('shrink');
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});

$(document).ready(function() {
    $("#burger-container").click(function(e) {
        e.stopPropagation();
        $(this).toggleClass("open");
        $(".checkBox").toggleClass("anim-rect");
       $(".slide-menu").toggleClass("show-slide-menu");
  $(".main-container").toggleClass("overlay-in");
    });
  $(document).click(function(e){
      if(!e.target.closest(".test-menu div") && $("#burger-container").hasClass("open")){
        $("#burger-container").toggleClass("open");
         $(".checkBox").toggleClass("anim-rect");
       $(".slide-menu").toggleClass("show-slide-menu");
  $(".main-container").toggleClass("overlay-in");
      }
    })  
});
jQuery(document).ready(function($){
	"use strict";
  var $lateral_menu_trigger = $('#cd-menu-trigger'),
    $content_wrapper = $('.cd-main-content'),
    $navigation = $('header');
  $lateral_menu_trigger.on('click', function(event){
    event.preventDefault();
    
    $lateral_menu_trigger.toggleClass('is-clicked');
    $navigation.toggleClass('lateral-menu-is-open');
    $content_wrapper.toggleClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
     $('body').toggleClass('overflow-hidden');
    });
    $('#cd-lateral-nav').toggleClass('lateral-menu-is-open');    
    if($('html').hasClass('no-csstransitions')) {
      $('body').toggleClass('overflow-hidden');
    }
  });
  $content_wrapper.on('click', function(event){
    if( !$(event.target).is('#cd-menu-trigger, #cd-menu-trigger span, #cd-menu-trigger-1, #cd-menu-trigger-1 span') ) {
      $lateral_menu_trigger.removeClass('is-clicked');
      $navigation.removeClass('lateral-menu-is-open');
      $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
      //check if transitions are not supported
      if($('html').hasClass('no-csstransitions')) {
        $('body').removeClass('overflow-hidden');
      }
    }
  });
  $("#cd-menu-trigger-1, .menu_overlay").on('click', function(event){
      $lateral_menu_trigger.removeClass('is-clicked');
      $navigation.removeClass('lateral-menu-is-open');
      $content_wrapper.removeClass('lateral-menu-is-open').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
        $('body').removeClass('overflow-hidden');
      });
      $('#cd-lateral-nav').removeClass('lateral-menu-is-open');
      //check if transitions are not supported
      if($('html').hasClass('no-csstransitions')) {
        $('body').removeClass('overflow-hidden');
      }
  });
});
$(document).ready(function() {
$(".submenu1").click(function () {
    $(".submenu1").removeClass("active"); 
    $(this).addClass("active");   
});
});

//Safari only CSS
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
if (isSafari) { 
  $('head').append('<link rel="stylesheet" type="text/css" href="main/css/safari.css">') 
};
	 (function () {
    var ua = navigator.userAgent
    var isIOSSafari = /iPhone|iPad|iPod/.test(ua) && /AppleWebKit.*Safari\//i.test(ua) && ua.indexOf('Chrome') === -1
    if (isIOSSafari) {
      document.body.style.webkitTextStroke = '.01rem'
    }
  })()	

// ===== Scroll to Top ==== //
$(document).ready(function() {
  $(window).scroll(function() {
      if ($(this).scrollTop() >= 50) {       
          $('#scroll-top').fadeIn(200);    
      } else {
          $('#scroll-top').fadeOut(200);  
      }
  });
  $('#scroll-top').click(function() {     
      $('body,html').animate({
          scrollTop : 0                       
      }, 500);
  });
});