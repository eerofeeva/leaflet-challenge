// Creating map object
var mapDiv = L.map("map-div", {
  center: [32.7153, -117.1573],
  zoom: 6
});

// Adding tile layer
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: "pk.eyJ1Ijoic2Nob29sZWEiLCJhIjoiY2ttYnNwbjRkMDN5ZjJvbGpkbmoxZTk4eiJ9.sjYrv1vqKJe89n9nU8ITrg"
}).addTo(mapDiv);

var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"
d3.json(link, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  //
  function mapStyle(feature) {
        return {
          opacity: 1,
          fillOpacity: 1,
          fillColor: mapColor(feature.geometry.coordinates[2]),
          color: "#ffffff",
          radius: mapRadius(feature.properties.mag),
          stroke: true,
          weight: 0.75
        };
      }
      function mapColor(depth) {
        var colors = ['#ffffe0', '#c0eade', '#9dced6', '#80b1cc', '#6694c1', '#4e78b5', '#325da9', '#00429d']
        var depths = [0,1,5,10,20,30,40,50]

        var retColor = "#3c99ea"; // default value
        for (var i = 0; i < depths.length; i++) {
          if (depth > depths[i]) { retColor = colors[i] }
        }
        return retColor;
      }
    
      function mapRadius(magnitude) {
        if (magnitude === 0) {
          return 1;
        }
    
        return magnitude * 7;
      }
      
      L.geoJson(data, {
        pointToLayer: function(feature, coords) {
          return L.circleMarker(coords);
        },
    
        style: mapStyle,
    
        onEachFeature: function(feature, layer) {
          layer.bindPopup("Earthquake Strength: " + feature.properties.mag + 
          "<br> Location: " + feature.properties.place +
          "<br> Depth: " + feature.geometry.coordinates[2]);
    
        }
      }).addTo(mapDiv);
    
      var legend = L.control({
        position: "bottomleft"
      });
    
      legend.onAdd = function( mapDiv ) {
        var div = L.DomUtil.create("div", "info legend");
    
        var labels = ['<strong>Depth</strong>']
        var grades = [0,1,5,10,20,30,40,50];
    
        for (var i = 0; i<grades.length; i++) {
          div.innerHTML +=
          labels.push(
            '<i style="background:' + mapColor(grades[i]) + '"></i> ' +
            grades[i]+
              (grades[i + 1] ? "&ndash;" + grades[i + 1] : "+")
          );
            // (grades[i] ? grades[i] : '+'));
        }
        div.innerHTML = labels.join('<br>');
        return div;
      };
      legend.addTo(mapDiv)
 });