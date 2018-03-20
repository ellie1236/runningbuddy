$(document).ready(function() {
    
     $('#myPanel').enhanceWithin().panel();
    console.log( "ready!" );
});

$(document).on('pageshow', '#running', function (e, data) {
    
   // async defer src=""
    
  setTimeout(function () {
        // This is the minimum zoom level that we'll allow
        var minZoomLevel = 12;

        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            zoom: minZoomLevel,
            center: new google.maps.LatLng(53.7457, -1),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        });
        }, 1);
});
