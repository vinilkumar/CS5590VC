<html>
<body>
<script type='text/javascript'>//<![CDATA[ 

function initialize() {
    var myOptions = {
        zoom: 6,
        center: new google.maps.LatLng(39, -90),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    var weather = new google.maps.weather.WeatherLayer({
        temperatureUnits: google.maps.weather.TemperatureUnit.FAHRENHEIT 
    });
    weather.setMap(map);
    var cloud = new google.maps.weather.CloudLayer();
    cloud.setMap(map); //Comment out this line if you do not wish to
}
//]]>  

</script>


</body>


</html>
