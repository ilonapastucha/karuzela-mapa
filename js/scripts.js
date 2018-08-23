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


    // Initialize and add the map-poprawne
   // window.initMap = function() {
    // The location of Bologna Italy
   // var italy = {lat: 44.494263, lng: 11.346742};
    // The map, centered at Bologna Italy
   // var map = new google.maps.Map(document.getElementById('map'), {zoom: 7, center: italy});
    // The marker, positioned at Bologna
   // var marker = new google.maps.Marker({position: italy, map: map});
   // }
    
    var coordinate = [
      {lat: 44.494263, lng: 11.346742},
      {lat: 43.768061, lng: 11.253208},
      {lat: 45.436059, lng: 12.325853},
      {lat: 41.900848, lng: 12.483046},
      {lat: 40.761685, lng: 14.030700}
    ];
    var markers = [];

    window.initMap = function() {
    var map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: coordinate[0].lat, lng: coordinate[0].lng }, zoom: 7
    });
    for (var i=0; i < coordinate.length; i++) {
      var lat = coordinate[i].lat;
      var lng = coordinate[i].lng;
      markers[i] = new google.maps.Marker({
        position: {lat: lat, lng: lng}, map: map
    });
  } 
}

})();