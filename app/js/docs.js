;(function($){
  'use strict';

  var trsEvt = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';
  var touchEvt = window.ontouchend ? 'touchend' : 'click';

  var toggleContent = function(url) {
    if( url ) {
       // load and show new content 
      $('.cd-fold-content').load(url+' .cd-fold-content > *', function(){
        var self = $(this);
        setTimeout(function(){
          $('.cd').addClass('is-open');
          self.scrollTop(0);
        }, 100);
      });
    } else {
       // close the folding panel 
      $('.cd').removeClass('is-open');
    } 
  };

  /* open folding content */
  $('.cd-gallery a').on(touchEvt, function(e){
    e.preventDefault();
    toggleContent($(this).attr('href'));

  });

  /* close folding content */
  $('.cd-close').on(touchEvt, function(e){
    e.preventDefault();
    toggleContent();
  });

})(jQuery);