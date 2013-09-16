<html>
<body> 
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false"></script>
    <script>
        function initialize() {
          var myLatlng = new google.maps.LatLng(39.09973, -94.57857);
          var mapOptions = {
            zoom: 6,
            center: myLatlng,
            mapTypeId: google.maps.MapTypeId.ROADMAP
          }

          var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

          var contentString = "<iframe width='250' height='207' src='http://www.youtube.com/embed/z9XExbbjdm4' frameborder='0' ></iframe>";

          var infowindow = new google.maps.InfoWindow({
              content: contentString
          });

          var marker = new google.maps.Marker({
              position: myLatlng,
              map: map,
              title: 'Kamigari (Vinil Rocks)'
          });
          google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
          });
        }

        google.maps.event.addDomListener(window, 'load', initialize);

    </script>


</body>
</html>