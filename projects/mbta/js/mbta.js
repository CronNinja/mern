import { mapAccessToken } from "./config.js"
let routeID = null;
let markers = [];
mapboxgl.accessToken = mapAccessToken;
// New Map Instance
let map = undefined;
function setRouteID(id){
  routeID = id;
}
function initMap(){
  map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-71.104081, 42.365554],
    zoom: 12,
  });
}


async function run(){
  let route = await getBusLocations();
  removeMarkers();
  routeData(route);
  setTimeout(run, 10000);
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
    let occupancy = getOccupancyData(vehicle.attributes.occupancy_status);
    markers.push(new mapboxgl.Marker({color: occupancy.color})
    .setLngLat([vehicle.attributes.longitude, vehicle.attributes.latitude])
    .setPopup(new mapboxgl.Popup().setHTML(buildPopup(vehicle, occupancy)))
    .addTo(map));
  });
}
function getOccupancyData(o){
  switch (o) {
    case "MANY_SEATS_AVAILABLE":
      return {
        color: "MediumSeaGreen",
        seats: "Many Seats"
      };
      break;
    case "FEW_SEATS_AVAILABLE":
      return {
        color: "Orange",
        seats: "Few Seats"
      };
      break;
    case "FULL":
      return {
        color: "Red",
        seats: "Full"
      };
      break;
    default:
      return {
        color: "#3FB1CE",
        seats: "Unknown"
      };
      break;
  }
}
function buildPopup(vehicle, occupancy){
  let html = `<p><strong>Route:</strong> ${ routeID }<hr>
              <ul>
              <li>
                  Occupancy: ${ occupancy.seats }
                </li>
                <li>
                  Updated: ${ vehicle.attributes.updated_at.split("T")[1].split("-")[0] }
                </li>
              </ul>
            </p>`;
  return html;
}
// Request bus data from MBTA
async function getBusLocations(){
	const url = `https://api-v3.mbta.com/vehicles?filter[route]=${ routeID }&include=trip`;
	const response = await fetch(url);
	const json     = await response.json();
	return json.data;
}
export { initMap, run, setRouteID }