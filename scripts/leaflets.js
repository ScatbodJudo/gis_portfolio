var pointStyle = {
	"color":"#ff7800",
	"weight":5

}

var map = L.map('map',{
center: [43.64701, -79.39425],
zoom: 4
});

// basemap tile layer

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// earthquake geoJson layer

var geojsonLayer = new L.GeoJSON.AJAX("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson");
geojsonLayer.addTo(map);
L.geoJSON(geojsonLayer,{
	 style: pointStyle
}).addTo(map);

// earthquake properties are nested in dictionaries
// console.log(geojsonLayer._layers[25]["feature"]["properties"]["mag"])

for (var i = geojsonLayer._layers.length; i >= 0; i--) {
	console.log(geojsonLayer._layer[i]["feature"]["properties"]["mag"])
}

var nums = [1,2,3,4,5,6,7,8,9];


	for (var i = nums.length; i >= 0; i--) {
	console.log(nums[i])
	}

