"use strict";
(function () {
	
    var elem = document.querySelector('.main-carousel');
    var flkty = new Flickity(elem, {
      // options
      cellAlign: 'left',
      hash: true,
      contain: true,
      freeScroll: true,
      pageDots: false
    });
    
    var flkty = new Flickity('.main-carousel', {
      groupCells: true
    });

    var buttonGroup = document.querySelector('.button-group');
    var buttons = buttonGroup.querySelectorAll('.button');
    buttons = fizzyUIUtils.makeArray(buttons);
    
    buttonGroup.addEventListener('click', function(event) {
      // filter for button clicks
      if ( !matchesSelector(event.target, '.button' )) {
        return;
      }
      var index = buttons.indexOf( event.target );
      flkty.selectCell(index);
    });
    

    var progressBar = document.querySelector('.progress-bar')

    flkty.on('scroll', function(progress) {
    progress = Math.max(0, Math.min( 1, progress));
    progressBar.style.width = progress * 100 + '%';
    });

    var flkty = new Flickity( '.main-carousel', {
    groupCells: true
    });

})();