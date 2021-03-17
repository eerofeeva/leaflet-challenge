console.log("test");


// var apiEndpoint = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";


// //initial map
// var initialMap = L.map("map-div", {center: [44.986656, -93.258133],zoom: 4});

// //title layer
// // L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
// //     attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
// //     maxZoom: 18,
// //     id: "mapbox.streets",
// //     accessToken: Mapbox_API_KEY,
// //   }).addTo(initialMap);

//   L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: Mapbox_API_KEY
// }).addTo(initialMap);

//   //radius
//  d3.json(apiEndpoint, function(data) {
//     function styleInfo(feature) {
//       return {
//         opacity: 1,
//         fillOpacity: 1,
//         fillColor: magnitudeColors(feature.properties.mag),
//         color: "#000000",
//         radius: magnitudeRadius(feature.properties.mag),
//         stroke: true,
//         weight: 0.5
//       };
//     }

// function magnitudeColors(magnitude) {
//     switch (true) {
//     case magnitude > 5:
//       return "#ea2c2c";
//     case magnitude > 4:
//       return "#ea822c";
//     case magnitude > 3:
//       return "#ee9c00";
//     case magnitude > 2:
//       return "#eecc00";
//     case magnitude > 1:
//       return "#d4ee00";
//     default:
//       return "#98ee00";
//     }
//   }
//   // set radiuss from magnitude
//     function magnitudeRadius(magnitude) {
//     if (magnitude === 0) {
//       return 1;
//     }
//     return magnitude * 4;
//   }
//     // GeoJSON layer
//     L.geoJson(data, {
//       pointToLayer: function(feature, latlng) {
//         return L.circleMarker(latlng);
//       },
//       style: styleInfo,
//       onEachFeature: function(feature, layer) {
//         layer.bindPopup("Magnitude: " + feature.properties.mag + "<br>Location: " + feature.properties.place);
//       }
//     }).addTo(initialMap);
  
//     var legend = L.control({
//       position: "bottomright"
//     });
  
//     // legelnd details
//     legend.onAdd = function() {
//       var div = L.DomUtil.create("div", "info legend");
//       var grades = [0, 1, 2, 3, 4, 5];
//       var colors = ["#98ee00",
//         "#d4ee00",
//         "#eecc00",
//         "#ee9c00",
//         "#ea822c",
//         "#ea2c2c"];
  
//       for (var i = 0; i < grades.length; i++) {
//         div.innerHTML +=
//           "<i style='background: " + colors[i] + "'></i> " +
//           grades[i] + (grades[i + 1] ? "&ndash;" + grades[i + 1] + "<br>" : "+");
//       }
//       return div;
//     };
  
//     // Finally, we our legend to the map.
//     legend.addTo(initialMap);
//   });