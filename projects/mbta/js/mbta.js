import { mapAccessToken } from "./config.js"
let routeID = 1;
let markers = [];
mapboxgl.accessToken = mapAccessToken;

// New Map Instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-71.104081, 42.365554],
  zoom: 12,
});

  async function run(){
  console.log(new Date());
	let route = await getBusLocations();
  removeMarkers();
  routeData(route);
  console.log("Vehicles on route: " + route.length)
  setTimeout(run, 15000);
}
function removeMarkers(){
  if(markers){
    markers.forEach(marker => {
      marker.remove();
    })
  }
}
function routeData(route){
  route.forEach(vehicle => {
    markers.push(new mapboxgl.Marker()
    .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
    .setPopup(new mapboxgl.Popup().setHTML(buildPopup(vehicle)))
    .addTo(map));
  });
}
function buildPopup(vehicle){
  let html = `<h2>Route: ${ routeID }</h2><hr>
              <ul>
                <li>
                  Occupancy: ${ vehicle.attributes.occupancy_status }
                </li>
              </ul>`;
  return html;
}
// Request bus data from MBTA
async function getBusLocations(){
	const url = `https://api-v3.mbta.com/vehicles?filter[route]=${ routeID }&include=trip`;
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}

run();