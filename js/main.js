let offset = 0;                                                                             /*slider Каталог низьких цін*/
const sliderLine = document.querySelector('.slider-line');

document.querySelector('#slider-next').addEventListener('click', function(){
    offset = offset + 321;
    if (offset > 988) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('#slider-prev').addEventListener('click', function () {
    offset = offset - 321;
    if (offset < 0) {
        offset = 988;
    }
    sliderLine.style.left = -offset + 'px';
});                                                                                              /*slider Каталог низьких цін*/


let offsetFeedback = 0;                                                                          /*slider Відгуки клієнтів*/
const sliderLineFeedback = document.querySelector('.slider-line-feedback');

document.querySelector('#slider-next-feedback').addEventListener('click', function(){
    offsetFeedback = offsetFeedback + 352;
    if (offsetFeedback > 1308) {
        offsetFeedback = 0;
    }
    sliderLineFeedback.style.left = -offsetFeedback + 'px';
});

document.querySelector('#slider-prev-feedback').addEventListener('click', function () {
    offsetFeedback = offsetFeedback - 352;
    if (offsetFeedback < 0) {
        offsetFeedback = 1408;
    }
    sliderLineFeedback.style.left = -offsetFeedback + 'px';
});                                                                                               /*slider Відгуки клієнтів*/



$(function(){                                                                                          /*Увеличение изображения по клику*/
  $('.minimized').click(function(event) { 
    var i_path = $(this).attr('src');
    $('body').append('<div id="overlay"></div><div id="magnify"><img src="'+i_path+'"><div id="close-popup"><i></i></div></div>');
    $('#magnify').css({
     left: ($(document).width() - $('#magnify').outerWidth())/2,
            top: ($(window).height() - $('#magnify').outerHeight())/2
   });
    $('#overlay, #magnify').fadeIn('fast');
  });
  
  $('body').on('click', '#close-popup, #overlay', function(event) {
    event.preventDefault();
    $('#overlay, #magnify').fadeOut('fast', function() {
      $('#close-popup, #magnify, #overlay').remove();
    });
  });
});                                                                                                          /*Увеличение изображения по клику*/
