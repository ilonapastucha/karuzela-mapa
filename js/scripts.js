"use strict";
(function () {

  // Mustache template - gallery create

  var gallery = document.getElementById('template-gallery').innerHTML;
  var listItems = '';
  var view = document.getElementById('carousel');
  var elem = document.querySelector('.main-carousel');

  Mustache.parse(gallery);

  for (var i = 0; i < galleryData.length; i++) {
    listItems += Mustache.render(gallery, galleryData[i]);
  };
  view.innerHTML = listItems;

  // Gallery slide carusel Flickity
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    // options
    cellAlign: 'left',
    hash: true,
    contain: true,
    freeScroll: true,
    pageDots: false,
    groupCells: true
  });


  // restart button 
  var button = document.querySelector('.button');

  button.addEventListener('click', function (event) {
    flkty.selectCell(0);
  });

  // pasek postempu
  var progressBar = document.querySelector('.progress-bar')

  flkty.on('scroll', function (progress) {
    progress = Math.max(0, Math.min(1, progress));
    progressBar.style.width = progress * 100 + '%';
  });

  var flkty = new Flickity('.main-carousel', {
    groupCells: true
  });

})();